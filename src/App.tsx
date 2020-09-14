import React from "react";
import Button, {ButtonSize, ButtonType} from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button> Hello</Button>
        <Button
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
          onClick={(e) => {
            alert(1);
          }}
        >
          Hello
        </Button>
        <Button
          disabled
          btnType={ButtonType.Link}
          href="http://baidu.com"
          size={ButtonSize.Large}
        >
          Hello
        </Button>
      </header>
    </div>
  );
}

export default App;
