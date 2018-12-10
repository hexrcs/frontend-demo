import React, { Component } from "react";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddBoxIcon from "@material-ui/icons/AddBox";

const Container = styled.div`
  display: flex;
  margin: 0 1rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledAddBoxIcon = styled(AddBoxIcon)`
  margin-right: 0.5rem;
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Typography variant="body1" color="textSecondary">
          {"© 2018 ADIN Frontend Contributors"}
        </Typography>
        <Button variant="contained" color="primary">
          <StyledAddBoxIcon />
          Add Diagram
        </Button>
      </Container>
    );
  }
}
