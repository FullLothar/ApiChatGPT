import React, { useState } from 'react';
import './Chatbot.css';
import axios from 'axios';

function Chatbot() {
  const [message, setMessage] = useState('');

  const sendMessageToChatGPT = async (message) => {
    try {
      const response = await axios.post('https://chat.openai.com/', {
        message: message
      });

      const answer = response.data.answer;
      console.log(answer);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    sendMessageToChatGPT(message);
  };

  return (
    <div className="chatbot__container">
      <h2>Chatbot Section</h2>
      <div className="chatbot__card">
        <p>Content goes here</p>
        <div className="chatbot-input-container">
          <input
            type="text"
            placeholder="Type your message"
            value={message}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
