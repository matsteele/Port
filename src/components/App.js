import React, { useState, useEffect, useContext } from "react";
import Input from "./input";
import TitleDisplay from "./title_display";
import Prompt from "./prompt";
import Divider from "./list_display/divider";
import "../style/style.scss";
import { StoreProvider } from "../store";

const App = () => {
  const [seq, setSeq] = useState(0);

  useEffect(() => {
    let interval = null;
    if (seq < 3) {
      interval = setTimeout(() => {
        setSeq(seconds => seconds + 1);
      }, 500);
    }

    return () => clearTimeout(interval);
  }, [seq]);


  return (
    <div className="app">
      <StoreProvider>
        <TitleDisplay seq={seq} />
        <div className="promptInputContainer">
          <Prompt seq={seq} />
          <Divider />
          <Input seq={seq} />
        </div>
      </StoreProvider>
    </div>
  );
};

export default App;
