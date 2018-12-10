import React, { Component } from "react";
import styled from "@emotion/styled";

import { FlexDiv, Column, Row } from "@components";

import Diagrams from "./Diagrams";
import ControlPanel from "./ControlPanel";
import Footer from "./Footer";

const Viewport = styled.div`
  height: 100%;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Viewport>
        <Column >
          <ControlPanel />
          {/* <Diagrams />
          <Footer /> */}
        </Column>
      </Viewport>
    );
  }
}

export default App;
