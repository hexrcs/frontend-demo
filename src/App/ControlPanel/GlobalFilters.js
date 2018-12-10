import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { appStore } from "@stores";

const Container = styled.div`
  flex: 1;
  align-self: flex-start;
  margin: 0.5rem;
`;

const PaperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 10rem;
`;

@observer
class GlobalFilters extends Component {
  handleChange = (category, name) => event => {
    appStore.updateGlobalFilters(category, name)(event.target.checked);
  };

  render() {
    return (
      <Container>
        <Paper elevation={1}>
          <PaperContent>
            <Typography variant="subheading" component="h3">
              Global Filters
            </Typography>
            <div>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={appStore.globalFilters.layers.layer1}
                        onChange={this.handleChange("layers", "layer1")}
                        value="layer1"
                      />
                    }
                    label="Layer 1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={appStore.globalFilters.layers.layer2}
                        onChange={this.handleChange("layers", "layer2")}
                        value="layer2"
                      />
                    }
                    label="Layer 2"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={appStore.globalFilters.layers.layer3}
                        onChange={this.handleChange("layers", "layer3")}
                        value="layer1"
                      />
                    }
                    label="Layer 3"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={appStore.globalFilters.layers.layer4}
                        onChange={this.handleChange("layers", "layer4")}
                        value="layer4"
                      />
                    }
                    label="Layer 4"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={appStore.globalFilters.layers.layer5}
                        onChange={this.handleChange("layers", "layer5")}
                        value="layer5"
                      />
                    }
                    label="Layer 5"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={appStore.globalFilters.layers.layer6}
                        onChange={this.handleChange("layers", "layer6")}
                        value="layer6"
                      />
                    }
                    label="Layer 6"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={appStore.globalFilters.layers.layer7}
                        onChange={this.handleChange("layers", "layer7")}
                        value="layer7"
                      />
                    }
                    label="Layer 7"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </PaperContent>
        </Paper>
      </Container>
    );
  }
}

export default GlobalFilters;
