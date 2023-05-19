import React, { useState } from 'react';
import './Chatbot.css';
import axios from 'axios';

function Chatbot() {
  const [message, setMessage] = useState('');

  const sendMessageToChatGPT = async (message) => {
    try {
      const api_key = process.env.OPENAI_API_KEY; // Recupera la clave de API de una variable de entorno

const headers = {
  'Authorization': `Bearer ${api_key}`,
  'Content-Type': 'application/json'
} catch (error) {
  console.error(error);
};

      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        temperature: 0.7
      }, { headers });

      const completion = response.data.choices[0].message.content;
      console.log(completion);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    setMessage(''); // Limpiar el campo de entrada después de enviar el mensaje
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
