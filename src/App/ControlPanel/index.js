import React, { Component } from "react";

import SourceSelector from "./SourceSelector";
import GlobalFilters from "./GlobalFilters";
import Notifications from "./Notifications";
import UserControl from "./UserControl";

export default class ControlPanel extends Component {
  render() {
    return (
      <div>
        <SourceSelector />
        <GlobalFilters />
        <Notifications />
        <UserControl />
      </div>
    );
  }
}
