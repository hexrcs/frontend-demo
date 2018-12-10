import React, { Component } from "react";
import styled from "@emotion/styled";

import SourceSelector from "./SourceSelector";
import GlobalFilters from "./GlobalFilters";
import Notifications from "./Notifications";
import UserControl from "./UserControl";

import { Logo, Column } from "@components";

const Row = styled.div`
  display: flex;
  margin: 0 1rem;
`;

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
