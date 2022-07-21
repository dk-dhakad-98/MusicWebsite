var express = require('express');
var pool = require('./pool')
var router = express.Router();
var upload = require('./multer');


router.get('/home', function (req, res, next) {
  res.render('home');
});

router.get('/add_new_song', function (req, res, next) {
  res.render('AddSong')
})

router.post('/upload_song', upload.single('artwork'), function (req, res, next) {


  var artist
  if (Array.isArray(req.body.artist)) {
    artist = req.body.artist.join('#')
  }
  else {
    artist = req.body.artist
  }

  pool.query("insert into songs(songname,dateofrelease,artwork,artist) value(?,?,?,?)", [req.body.songname, req.body.dateofrelease, req.file.filename, artist], function (error, result) {

    if (error) {
      res.render('AddSong', { status: false })
    }
    else {
      res.render('AddSong', { status: true })
    }
  })
})

router.get('/table', function (req, res, next) {
  pool.query("select * from songs", function (error, result) {

    if (error) {
      res.status(500).json({ status: false, result: [] })
    }
    else {
      res.status(200).json({ status: true, result: result })
    }
  })
})


router.get('/add_artist', function (req, res, next) {

  pool.query("insert into artist(artistname,dob,bio) value(?,?,?)", [req.query.artistname, req.query.dob, req.query.bio], function (error, result) {

    if (error) {
      res.status(500).json({ status: false, result: 'fail' })
    }
    else {
      res.status(200).json({ status: true, result: 'success' })
    }
  })
})


router.get('/fetchartist', function (req, res) {
  pool.query('select * from artist', function (err, data) {
    if (err) {
      console.log(err)
    }
    else {
      console.log(data)
      res.status(200).json(data)
    }
  })
})

module.exports = router;