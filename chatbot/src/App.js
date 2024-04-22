import React, {useState} from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessage = { id: messages.length + 1, text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
      body: JSON.stringify({ input: input })
    };

    fetch('/getResponse', requestOptions).then(res => res.json()).then(data => {
      const botResponse = { id: messages.length + 2, text: data.botMessage, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse])
    })

  };

  return (
      <div className="App">
        <header className="App-header">
          <p>Chatbot</p>
        </header>

        <div className="chat-window">
          {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                {message.text}
              </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="message-form">
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
  );
}

export default App;
