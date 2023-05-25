const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
   answer: String,
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questions'
    },
    createdAt: {
        type: Date,
        dafault: Date.now(),
    },
   
});

module.exports = mongoose.model("Answers", AnswerSchema);