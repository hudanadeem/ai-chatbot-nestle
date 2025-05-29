import { useState } from "react";
import "./Chatbot.scss";
import chatIcon from "../../assets/images/chat_icon.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="chatbot">
        {!isOpen && (
          <img
            src={chatIcon}
            alt="Chatbot"
            className="chatbot__icon"
            onClick={() => setIsOpen(true)}
          />
        )}

        {isOpen && (
          <div className="chatbot__window">
            <div className="chatbot__header">
              <span>SMARTIE</span>
              <button onClick={() => setIsOpen(false)}>X</button>
            </div>
            <div className="chatbot__body">
              <p className="chatbot__message">
                Hey! I'm Smartie, youre personal MadewithNestle assistant. Ask
                me anything, and I'll quickly search the entire site to find the
                answers you need!
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;
