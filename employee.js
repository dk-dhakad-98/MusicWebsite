var express = require('express');
var router = express.Router();
var pool = require('./pool');
var upload = require('./multer');
var fs = require('fs');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

 router.get('/employeeinterface', function(req, res, next) {
  try{ 
     var admin = JSON.parse(localStorage.getItem('ADMIN'))
      if(admin == null){
        res.render('loginpage',{message:''})
      }
      res.render('employeeinterface', { status: null });
    }
    catch(e)
    {
      res.render('loginpage',{message:''})
    }
    
  });

router.post('/submit_employee_record',upload.single('picture'),function(req,res,next){
  console.log("Body:", req.body)
  console.log("File:", req.file)

  var dob= new Date(req.body.dob)
  var name=req.body.firstname +" "+req.body.lastname
  pool.query('insert into employees(employeename,dob,gender,address,state,city,email,contactnumber,picture) values(?,?,?,?,?,?,?,?,?)' ,[name,dob,req.body.gender,req.body.address,
    req.body.state,req.body.city,req.body.email,req.body.contactnumber,req.file.filename] ,function(error,result){
      
      if(error)
      {
        console.log(error)
        res.render('employeeinterface',{status: '0' })
      }
      else{
        console.log("Result:"+result)
        res.render('employeeinterface',{status: '1'})
      }
    })
})
  
router.get('/displayallemployee',function(req,res,next){
  try{ 
    var admin = JSON.parse(localStorage.getItem('ADMIN'))
     if(admin == null){
       res.render('loginpage',{message:''})
      }
     
   pool.query("select E.*,(select S.statename from states as S where S.stateid = E.state )as sname,(select C.cityname from city as C where C.cityid = E.city)as cname from employees as E",function(error,result){
 
  if(error)
  {
    console.log(error)
    res.render('displayemployee',{status:false,result:[]})
  }
  else{
    res.render('displayemployee',{status:true,result:result})
  }
 })
  }
  catch(e)
  {
    res.render('loginpage',{message:''})
  }  
})

router.get('/display_by_id',function(req,res,next){

  pool.query("select E.*,(select S.statename from states as S where S.stateid = E.state )as sname,(select C.cityname from city as C where C.cityid = E.city)as cname from employees as E where E.employeeid=?",[req.query.eid],function(error,result){

    if(error)
    {
      res.render('displaybyid',{status:false,result:[]})
    }
    else{
      res.render('displaybyid',{status:true,result:result[0]})
    }
  })

})

router.post('/edit_employee_record',function(req,res,next){

  if(req.body.action =='Edit'){
  var dob= new Date(req.body.dob)
  var name=req.body.firstname +" "+req.body.lastname
  pool.query('update employees set employeename=?,dob=?,gender=?,address=?,state=?,city=?,email=?,contactnumber=? where employeeid=?' ,[name,dob,req.body.gender,req.body.address,
    req.body.state,req.body.city,req.body.email,req.body.contactnumber,req.body.employeeid] ,function(error,result){
      
      if(error)
      {
        console.log(error)
        res.redirect('/employee/displayallemployee')
      }
      else{
        res.redirect('/employee/displayallemployee')
      }
    
    })
  }
  else{

    pool.query('delete from employees where employeeid=?',[req.body.employeeid],function(error,result){
        
        if(error)
        {
          console.log(error)
          res.redirect('/employee/displayallemployee')
        }
        else{
          res.redirect('/employee/displayallemployee')
        }
      
      })

  }
})

router.get('/edit_picture',function(req,res,next){
  res.render('displaypicture',{eid: req.query.eid,picture: req.query.picture,ename:req.query.ename})
})

router.post('/update_employee_picture',upload.single('picture'), function(req,res,next){
  pool.query('update employees set picture=? where employeeid=?',[req.file.filename,req.body.employeeid],function(error,result){
    if(error)
    {
      console.log("body:", error)
      res.redirect('/employee/displayallemployee')
    }
    else
    {
      var filePath = 'd:/employeemanagement/public/images/'+req.body.oldpicture; 
       fs.unlinkSync(filePath);
      res.redirect('/employee/displayallemployee')
    }
  })
})
  module.exports = router;