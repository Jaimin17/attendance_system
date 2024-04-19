const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClassSchema = new Schema({
    Branch: {
        type: Number,
        required: true
    },
    college: {
        type: Number,
        required: true
    },
    totalStudent: {
        type: Number,
        default: 0
    },
    cc: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    student: {
        type: [String]
    },
    attendance: {
        type: {Date: [String]}
    }
});

const Class = mongoose.model("class", ClassSchema);
module.exports = Class;