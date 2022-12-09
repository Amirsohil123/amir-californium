const express = require('express');
const router = express.Router();
const log = require('../logger/logger')
const help = require('../util/helper')
const move = require('../logger/movies')
const date = require('../util/helper')
// const month = require('../util/helper')
// const getbatch = require('../util/helper')
const format = require('../validator/formatter')
const chunky = require('../validator/lodash')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    
        log.myfunction('amir')
        date.date()
        date.month()
        date.getBatchinfo()
        format.xyz('    jack sparrow    ')
        format.upper('Amir sohaiL')
        format.lower(' AMIR SOHail')
        chunky.dash()
        chunky.trail()
        chunky.unique()
        chunky.Pair()


});

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    
});
router.get('/test-movie', function (req, res){
    res.send(`the movies are ${move.abc}`)
});

module.exports = router;