import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleChatbot = () => setIsOpen(!isOpen);

    const handleInputChange = (e) => setInput(e.target.value);

    const handleSend = async () => {
        if (input.trim()) {
            // Append user message
            setMessages((prev) => [...prev, { sender: 'user', text: input }]);

            // Send message to backend for response
            try {
                const response = await axios.post('http://localhost:3000/api/getHealthTip', { symptom: input });
                setMessages((prev) => [...prev, { sender: 'bot', text: response.data.advice }]);
            } catch (error) {
                setMessages((prev) => [...prev, { sender: 'bot', text: "Sorry, we couldn't fetch the advice." }]);
            }

            // Clear input field
            setInput('');
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Chat Icon */}
            <button
                onClick={toggleChatbot}
                className="bg-[#3DBAA1] text-white p-3 rounded-full shadow-lg hover:[#3DBAA1] focus:outline-none"
            >
                💬
            </button>

            {/* Chat Dialog */}
            {isOpen && (
                <div className="w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col mt-3">
                    {/* Chat Header */}
                    <div className="bg-[#3DBAA1] text-white p-4 flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Health Chatbot</h2>
                        <button onClick={toggleChatbot} className="text-white hover:text-gray-200 focus:outline-none">
                            ✖️
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-4 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`my-2 p-2 rounded-lg ${
                                    msg.sender === 'user'
                                        ? 'bg-blue-100 text-blue-800 self-end'
                                        : 'bg-gray-100 text-gray-800 self-start'
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="p-3 border-t border-gray-200 flex items-center">
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your symptom..."
                            value={input}
                            onChange={handleInputChange}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="ml-2 bg-[#3DBAA1] text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
