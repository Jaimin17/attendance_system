const express = require("express");
const Student = require("../Models/Student");
const Teacher = require("../Models/Teacher");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchStudent = require("../MiddleWare/fetchStudent");

const JWT_SECRET = "FuckDE69>>FuckYOu36";

router.post(
    "/create",
    [
        body("name", "Should be Greater than 3 char").isLength({min: 3}),
        body("email", "Invalid Email Address.").isEmail(),
        body("phoneNo", "Should be a valid phone number").isLength({
            min: 10,
            max: 10,
        }),
        body("password", "Password must be of 8 char long.").isLength({min: 8}),
    ], 
    async (req, res ) => {
        let success = false;
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({ success, error: error.array() });
        }
        try{
            // check if already a user exist with same email
            let user = await Teacher.findOne({ email: req.body.email });
            if(user) {
                return res.status(400).json({
                    success,
                    error: "Sorry, a user with same email already exist!",
                });
            }

            // create new teacher user
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            let teacher = await Teacher.create({
                name: req.body.name,
                email: req.body.email,
                college: req.body.college,
                class: req.body.class,
                phoneNo: req.body.phoneNo,
                password: secPass,
            });

            
            const data = {
                user: {
                    id: teacher.id,
                },
            };
            
            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authToken });
        } catch (error) {
            return res.status(500).send("Internal Error")
        }
    }
);


router.get("/fetchDetail", fetchStudent, async(req, res)=>{
    try{
        let teacher = await Teacher.findById(req.user.id);
        return res.json(teacher); 
    } catch (error){
        return res.status(500).send("Inernal server Error!");
    }
});

router.post(
    "/Login",
    [body("email", "Invalid Email Address.").isEmail()],
    async (req, res) => {
        let error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(400).json({ success: false, error:
            error.array() });
        }
        try{
            let teacher = await Teacher.findOne({ email: req.body.email });
        
            if(!teacher) {
                return res.status(400).json({
                    success : false,
                    error: "Please try to login with Correct credential",
                });
            }

            const passwordCompare = await bcrypt.compare(
                req.body.password,
                teacher.password
            );
            if(!passwordCompare) {
                return res.status(400).json({
                    success: false,
                    error: "Please try to login with correct credential",
                });
            }

            const data = {
                user : {
                    id: teacher.id,
                }
            };

            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authToken});
        }catch(error){
            // console.log(error)
            return res.status(500).send("Internal server Error!");
        }
    }
);

router.put(
    "/updatePassword",
    fetchStudent,
    [
        body("oldPassword", "should be atleast 8 char long").isLength({ min: 8}),
        body("newPassword", "New Password should be atleast 8 char long").isLength({min: 8}),
    ],
    async (req, res) => {
        let success = false;
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(400).json({ success, error: error.array() });
        }
        try {
            let user = await Teacher.findById(req.user.id);
            if(!user){
                return res.status(404).json({ success, error:"User not found."});
            }

            const passwordCompare = await bcrypt.compare(
                req.body.oldPassword,
                user.password
            );

            if(!passwordCompare){
                return res.status(400).json({success, error: "Please enter the correct password "});
            }

            const salt = await bcrypt.genSalt(10);
             const password = await bcrypt.hash(req.body.newPassword, salt);

            user = await Teacher.findByIdAndUpdate(
                req.user.id,
                {
                    $set: {password},
                },
                {
                    new: true
                }
            );
            success = true;

            res.json({ success, message: "Password update successfully"});
        }catch (error){
            return res.status(500).send("Internal Server Error!");
        }
    }
);

module.exports = router;
