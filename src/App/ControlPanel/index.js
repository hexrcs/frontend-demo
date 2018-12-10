import React, { Component } from "react";

import SourceSelector from "./SourceSelector";
import GlobalFilters from "./GlobalFilters";
import Notifications from "./Notifications";
import UserControl from "./UserControl";

import { Logo } from "@components";

export default class ControlPanel extends Component {
  render() {
    return (
      <div>
        <Logo />
        <SourceSelector />
        <GlobalFilters />
        <Notifications />
        <UserControl />
      </div>
    );
  }
}
