import axios from "axios";
import { useState } from "react";

import Entry from "./components/Entry";
import Main from "./components/Main";

function App() {
  const [screen, setScreen] = useState("entry");
  const [apiUrl, setApiUrl] = useState("");
  const [nickname, setNickname] = useState("");

  const handleMessageSend = ({ question }) => {
    axios.post(`${apiUrl}/api/questions`, { nickname, question });
  };

  switch (screen) {
    case "entry":
      return (
        <Entry
          onSubmit={({ address, nickname }) => {
            setApiUrl(address);
            setNickname(nickname);
            setScreen("main");
          }}
        />
      );
    case "main":
    default:
      return <Main onSubmit={handleMessageSend} />;
  }
}

export default App;
