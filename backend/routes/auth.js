const express = require("express");
const Student = require("../Models/Student");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchStudent = require("../MiddleWare/fetchStudent");

const JWT_SECRET = "FuckDE69>>FuckYOu36";

// create new user
router.post(
  "/createStudent",
  [
    body("enrollmentNo", "Should be 12 digit long!").isLength({
      min: 12,
      max: 12,
    }),
    body("name", "Should be Greater than 3 char").isLength({ min: 3 }),
    body("email", "Invalid Email Address.").isEmail(),
    body("phoneNo", "Should be valid phone number").isLength({
      min: 10,
      max: 10,
    }),
    body("password", "Password must be of 8 char long.").isLength({ min: 8 }),
  ],
  async (req, res) => {
    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }
    try {
      // check if already a user exist with same email
      let user = await Student.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry, a user with same email already exist!",
        });
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
        password: secPass,
      });

      const data = {
        user: {
          id: student.id,
        },
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

router.get("/fetchStudentDetail", fetchStudent, async (req, res) => {
  try {
    let student = await Student.findById(req.user.id);
    return res.json(student);
  } catch (error) {
    return res.status(500).send("Internal server Error!");
  }
});

router.post(
  "/studentLogin",
  [body("email", "Invalid Email Address.").isEmail()],
  async (req, res) => {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ success: false, error: error.array() });
    }
    try {
      let student = await Student.findOne({ email: req.body.email });

      if (!student) {
        return res.status(400).json({
          success: false,
          error: "Please try to login with correct credential",
        });
      }

      const passwordCompare = await bcrypt.compare(
        req.body.password,
        student.password
      );
      if (!passwordCompare) {
        return res.status(400).json({
          success: false,
          error: "Please try to login with correct credential",
        });
      }

      const data = {
        user: {
          id: student.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      return res.status(500).send("Internal server Error!");
    }
  }
);

router.put(
  "/updatePassword",
  fetchStudent,
  [
    body("oldPassword", "Should be at least 8 char long").isLength({ min: 8 }),
    body("newPassword", "New password should be at least 8 char long").isLength(
      { min: 8 }
    ),
  ],
  async (req, res) => {
    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }
    try {
      let user = await Student.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ success, error: "User not found." });
      }

      const passwordCompare = await bcrypt.compare(
        req.body.oldPassword,
        user.password
      );
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ success, error: "Please enter correct password" });
      }

      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.newPassword, salt);

      user = await Student.findByIdAndUpdate(
        req.user.id,
        {
          $set: { password },
        },
        { new: true }
      );

      success = true;

      res.json({ success, massage: "Password update successfully" });
    } catch (error) {
      return res.status(500).send("Internal server Error!");
    }
  }
);

router.put("/updateStudent", fetchStudent, async (req, res) => {
  const { name, email, phoneNo } = req.body;
  try {
    const newNode = {};
    if (name) {
      newNode.name = name;
    }
    if (email) {
      newNode.email = email;
    }
    if (phoneNo) {
      newNode.phoneNo = phoneNo;
    }

    let student = await Student.findById(req.user.id);
    if (!student) {
      return res.status(404).send("Student not Found!");
    }

    student = await Student.findByIdAndUpdate(
      req.user.id,
      {
        $set: newNode,
      },
      { new: true }
    );
    return res.send(student);
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
});

module.exports = router;
