import React from 'react';
import './Chatbot.css';
import axios from 'axios';

// Función para enviar el mensaje a la API de ChatGPT
const sendMessageToChatGPT = async (message) => {
  try {
    const response = await axios.post('https://chat.openai.com/', {
      message: message
    });

    // Procesar la respuesta de la API y mostrarla en el chatbot
    const answer = response.data.answer;
    console.log(answer);
  } catch (error) {
    console.error(error);
  }
};

function Chatbot() {
  const handleSendMessage = () => {
    // Lógica para enviar el mensaje a la API de ChatGPT
    const message = ""; // Obtén el mensaje del input
    sendMessageToChatGPT(message);
  };

  return (
    <div className="chatbot__container">
      <h2>Chatbot Section</h2>
      <div className="chatbot__card">
        <p>Content goes here</p>
        <div className="chatbot-input-container">
          <input type="text" placeholder="Type your message" />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
