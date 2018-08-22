"use strict";
let express = require('express');
let router = express.Router();
let sql = require('../../../mariaDB/db_sql')();

/* GET home page. */
router.get('/', function(req, res, next) {//해당 위치에 일정 시간 이상 머물렀을 경우
    console.log("X : ",req.query.X);
    console.log("Y : ",req.query.Y);
    console.log("WifiList : ",req.query.WifiList);
    //그냥 위치에 맞는 시설 중 첫 번째를 보냄
    sql.getLocation(req.query.X, req.query.Y, function(err, result){
        res.send(result);
    });
});
router.post('/', function(req, res, next){//해당 위치를 임시 등록(글 등록은 안함.)
    res.send('test(post)');
});
router.delete('/', function(req, res, next){//해당 위치를 임시 등록(글 등록은 안함.)
    res.send('test(post)');
});
module.exports = router;