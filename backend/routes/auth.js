const express = require("express");
const Student = require("../Models/Student");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchStudent = require("../MiddleWare/fetchStudent");

const JWT_SECRET = "FuckDE69>>FuckYOu36";

// create new user
router.post("/createStudent", [
    body("enrollmentNo", "Should be 12 digit long!").isLength({ min: 12, max:12 }),
    body("name", "Should be Greater than 3 char").isLength({ min: 3 }),
    body("email", "Invalid Email Address.").isEmail(),
    body("phoneNo", "Should be valid phone number").isLength({ min: 10, max: 10 }),
    body("password", "Password must be of 8 char long.").isLength({ min: 8 })
], async (req, res) => {
    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ success, error: error.array() });
    }
    try {
        // check if already a user exist with same email
        let user = await Student.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "Sorry, a user with same email already exist!" });
        }

        // create new user
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        let student = await Student.create({
            enrollmentNo: req.body.enrollmentNo,
            name: req.body.name,
            email: req.body.email,
            college: req.body.college,
            branch: req.body.branch,
            class: req.body.class,
            phoneNo: req.body.phoneNo,
            gender: req.body.gender,
            password: secPass
        });

        const data = {
            user: {
                id: student.id
            }
        };

        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authToken });
    } catch (error) {
        console.error(error.massage);
        res.status(500).sent("Internal Server Error!");
    }
}
);

module.exports = router;