import { useState } from "react";
import "./Chatbot.scss";

const Chatbot = ({ name = "Smartie", icon = chatIcon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, type: "user" }]);
    setInput("");
  };

  return (
    <div className="chatbot">
      {!isOpen && (
        <img
          src={icon}
          alt={`${name} Icon`}
          className="chatbot__icon"
          onClick={() => setIsOpen(true)}
        />
      )}

      {isOpen && (
        <div className="chatbot__window">
          <div className="chatbot__header">
            <span>{name.toUpperCase()}</span>
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="chatbot__body">
            <p className="chatbot__message">
              Hey! I'm {name}, your personal MadeWithNestle assistant. Ask
              me anything, and I'll quickly search the entire site to find the
              answers you need!
            </p>
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`chatbot__message ${
                  msg.type === "user" ? "chatbot__message--user" : ""
                }`}
              >
                {msg.text}
              </p>
            ))}
          </div>

          <div className="chatbot__input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chatbot__input"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="chatbot__send-btn">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
