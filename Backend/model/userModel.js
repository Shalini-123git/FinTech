import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true,
        default: "user"
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("User", userSchema);

export default User;