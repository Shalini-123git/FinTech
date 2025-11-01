import botResponses from "../init/data.js";
import User from "../model/userModel.js";
import Bot from "../model/botModel.js"

export const message = async (req, res) => {
    try {

        const {prompt, sender} = req.body;

        if(!prompt) return res.status(400).json({message: "prompt can't be empty"})
        const normalisePrompt = prompt.toLowerCase().trim();

        const botResponse = botResponses[normalisePrompt] || "Sorry, I don't understand that!!"
        console.log(botResponse)

        const bot = new Bot({
            sender: sender || "user",
            text: botResponse
        })
        await bot.save();

        res.status(200).json({userMessage: prompt ,botMessage: botResponse})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

