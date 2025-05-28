import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
const baseURL = import.meta.env.VITE_API_URL;


function App() {
  // const [input, setInput] = useState('');
  // const [reply, setReply] = useState('');

  // const sendMessage = async () => {
  //   const res = await axios.post(`${baseURL}/api/chat`, { message: input });
  //   setReply(res.data.reply);
  // };

  return (
    <div className="app">
      <div className='app__background'>

      </div>
      {/* <h1>AI Chatbot</h1> */}
      {/* <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
      <p>Bot: {reply}</p> */}
    </div>
  );
}

export default App;
