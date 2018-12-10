import React, { Component } from "react";
import styled from "@emotion/styled";

import Diagrams from "./Diagrams";
import ControlPanel from "./ControlPanel";
import Footer from "./Footer";

const Column = styled.div`
  height: 97vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class App extends Component {
  render() {
    return (
      <Column>
        <ControlPanel />
        <Diagrams />
        <Footer />
      </Column>
    );
  }
}

export default App;
