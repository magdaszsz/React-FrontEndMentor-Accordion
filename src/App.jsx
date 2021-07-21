import React from "react";
import data from "./data";
import FaqContainer from "./components/FaqContainer";
import Container from './components/Container';
import illustration from "./images/illustration.svg";

function App() {
  return (
    <div className="App">
      <main>
        <FaqContainer>
          <div className="illustration">
            <img src={illustration} />
          </div>
          <div className="accordion">
            <h3>FAQ</h3>
          <Container data={data} />
          </div>
        </FaqContainer>
      </main>
    </div>
  );
}

export default App;
