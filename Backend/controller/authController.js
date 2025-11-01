import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import bcrypt from "bcryptjs"

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne( { email });

        if(!user) return res.status(400).json({message: "user not found. Please signUp"})

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid Credentials"});

        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            user,
        }, 'mysecretkey');

        res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                maxAge: 1000000,
            })

        let decoded = jwt.verify(token, "mysecretkey")
        res.status(200).json({message: "user logged in successfullt", decoded, token})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server error"})
    }
}

export const signUp = async (req, res) => {
    try {
        const {sender, password, email} = req.body;

        const existingUser = await User.findOne({email});
        console.log(existingUser)
        if(existingUser) return res.status(400).json({message: "email already exist, Please login to continue"})

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            sender,
            password: hashedPassword,
            email
        })

        await newUser.save();
        console.log(newUser)
        res.status(200).json({message: "user registered successfully", newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Interal server error", error: error.message})
    }
}

export const logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({message: "user logout succesfully"})
}