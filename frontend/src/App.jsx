import "./App.scss";
import Chatbot from "./components/ChatBot/Chatbot";
import customIcon from "./assets/images/chat_icon.png";

function App() {
  return (
    <div className="app__background">
      <Chatbot name="SMARTIE" icon={customIcon} />
    </div>
  );
}

export default App;
