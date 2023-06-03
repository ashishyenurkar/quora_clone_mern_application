const express = require("express");
const router = express.Router();

const answerRouter = require('./Answer');
const questionRouter = require('./question');
 const { models } = require("mongoose");


router.get('/', (req, res) => {
    res.send("this api is reserved for quora clone")
});
router.use('/questions', questionRouter);
 router.use('/answers', answerRouter);

module.exports = router;