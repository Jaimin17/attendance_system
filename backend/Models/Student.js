const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
    enrollmentNo: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    college: {
        type: Number,
        required: true
    },
    branch: {
        type: Number,
        required: true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Student = mongoose.model("student", StudentSchema);
module.exports = Student;