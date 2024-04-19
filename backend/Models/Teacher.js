const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    college: {
        type: Number,
        required: true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Teacher = mongoose.model("teacher", TeacherSchema);
module.exports = Teacher;