import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Chatbot from './components/Chatbot/Chatbot';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Math from './components/Math/Math';
import Grammar from './components/Grammar/Grammar';
import Chemistry from './components/Chemistry/Chemistry';
import Physics from './components/Physics/Physics';
import Translation from './components/Translation/Translation';
import Chatbot from './components/Chatbot/Chatbot';
import './App.css';


function App() {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Home toggleChatbot={toggleChatbot} />
        <Math />
        <Grammar />
        <Chemistry />
        <Physics />
        <Translation />
      </main>
      {chatbotVisible && <Chatbot />}
      <Footer />
    </div>
  );
}


export default App;



