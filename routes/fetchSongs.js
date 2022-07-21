var express = require('express');
var pool = require('./pool')
var router = express.Router();
var multer = require('./multer')

router.get('/table', function (req, res, next) {
  pool.query("select S.*,(select A.artistname from artist A where A.artistid = S.artist)as art from songs S", function (error, result) {

    if (error) {
      res.status(500).json({ status: false, result: [] })
    }
    else {
      res.status(200).json({ status: true, songs: result })
    }
  })
})

router.get('/table1', function (req, res, next) {
  pool.query("SELECT (select artistname from artist where artist=artistid)as name ,(select dob from artist where artist=artistid) as dob,group_concat(songname) as songs from songs group by artist", function (error, result) {

    if (error) {
      res.status(500).json({ status: false, result: [] })
    }
    else {
      res.status(200).json({ status: true, songs: result })
    }
  })
})

module.exports = router;