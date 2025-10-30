import botResponses from "../init/data.js";
import User from "../model/userModel.js";
import Bot from "../model/botModel.js"

export const message = async (req, res) => {
    try {

        const {prompt} = req.body;

        if(!prompt) return res.status(400).json({message: "prompt can't be empty"})
        const normalisePrompt = prompt.toLowerCase().trim();

        const user = new User({
            sender: "user",
            text: prompt
        })
        await user.save();

        const botResponse = botResponses[normalisePrompt] || "Sorry, I don't understand that!!"
        console.log(botResponse)

        const bot = new Bot({
            text: botResponse
        })
        await bot.save();

        res.status(200).json({userMessage: prompt ,botMessage: botResponse})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

