import React, { Component } from "react";
import Diagrams from "./Diagrams";
import ControlPanel from "./ControlPanel";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <ControlPanel />
        <Diagrams />
        <Footer />
      </div>
    );
  }
}

export default App;
