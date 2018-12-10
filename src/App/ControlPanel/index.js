import React, { Component } from "react";

import SourceSelector from "./SourceSelector";
import GlobalFilters from "./GlobalFilters";
import Notifications from "./Notifications";
import UserControl from "./UserControl";

import { Logo, Column, Row } from "@components";

export default class ControlPanel extends Component {
  render() {
    return (
      <Row>
        <Column>
          <Logo />
          <SourceSelector />
        </Column>
        <GlobalFilters />
        <Notifications />
        <UserControl />
      </Row>
    );
  }
}
