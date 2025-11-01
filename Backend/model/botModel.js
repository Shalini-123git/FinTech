import mongoose from "mongoose";

const botSchema = mongoose.Schema({
    sender: { 
        type: String, 
        required: true 
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Bot = mongoose.model("Bot", botSchema);

export default Bot;