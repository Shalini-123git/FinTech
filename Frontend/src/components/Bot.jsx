import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { MessageCircle, Send, X } from "lucide-react";

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState([
    { sender: "bot", text: "Hi there! 👋 I'm BudgetBot. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setLoading(true);
        try {
          const res = await axios.post("https://finance-chat-sh7m.onrender.com/api/message", {
            sender: "user",
            prompt: input,
          });
          console.log(res)
          if (res.status === 200) {
            setMessage((prev) => [
              ...prev,
              { id: uuidv4(), text: res.data.userMessage, sender: "user" },
              { id: uuidv4(), text: res.data.botMessage, sender: "bot" },
            ]);
          }
        } catch (error) {
          console.log(error.response?.data?.message || error.message);
        }

        setInput("");
        setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200"
        >
          <MessageCircle size={23} className="mr-2"/>
          Talk to FinSmart
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-fadeIn">
          {/* Header */}
          <div className="bg-indigo-600 text-white flex items-center justify-between p-3">
            <h2 className="font-semibold">Your Finance Assistant</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {message.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`p-2 rounded-lg max-w-[75%] text-sm ${
                    msg.sender === "user" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <form onSubmit={handleSend} className="p-2 border-t border-gray-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 outline-none px-3 py-2 rounded-lg bg-gray-100"
            />
            <button
              type="submit"
              className="ml-2 bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Bot;
