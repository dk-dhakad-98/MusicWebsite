var express = require('express')
const pool = require('./pool')
var router = express.Router()

router.get('/admin_login', function (req, res, next) {

    res.render('login', { message: '' })
})

router.post('/check_admin_login', function (req, res, next) {
    pool.query("select * from admins where email =? and password =?", [req.body.emailid, req.body.password], function (error, result) {

        if (error) {

            res.render('login', { message: 'Server Error' })
        }
        else {
            if (result.length == 1) {
                res.render('home', { result: result[0] })
            }
            else {
                res.render('login', { message: 'Invalid Email/Password' })
            }
        }
    })

})

router.get('/admin_exit', function (req, res, next) {
    res.render('login', { message: '' })
})
module.exports = router;