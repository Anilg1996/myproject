const express = require('express');
const router = express.Router();///test-you
//importing a custom module
//const xyz = require('../logger')
//importing external package
//const underscore = require('underscore')


// import module
// First Question
// const wel = require("../logger1/logger");
// router.get('/test-me', function (req, res) {
//     console.log(wel.welcome());
//     res.send('My first ever api!')
// });

// Second Problem 
// const helper = require("../util/helper.js");
// router.get('/test-me', function (req, res) {
//     helper.getBatchInfo();
//     res.send('My first ever api!')
// });

// Third Question
// const a = require("../validator/foramatter.js");
// router.get('/test-me', function (req, res) {
//        a.format();
//     res.send('My first ever api!')
// });

const a = require("../lodash/lodash.js");
router.get('/test-me', function (req, res) {
       a.lodash();
    res.send('My first ever api!')
});


module.exports = router;

