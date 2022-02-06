import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import WizardStep from "../../../../components/Wizard/WizardStep";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import { OutdoorGrill } from "@material-ui/icons";
import Button from "../../../../components/CustomButtons/Button";
const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  }
};

class RecipeStepList extends WizardStep {
  constructor(props) {
    super(props);
    this.state = {
      stepList: []
    };
  }

  sendState() {
    return this.state;
  }

  addStep() {
    const tempStepList = [...this.state.stepList];
    tempStepList.push({ stepName: "" });
    this.setState({ stepList: tempStepList });
  }

  removeStep() {
    const tempStepList = [...this.state.stepList];
    tempStepList.pop();
    this.setState({ stepList: tempStepList });
  }

  change(event, index) {
    const tempStepList = [...this.state.stepList];
    tempStepList[index]["stepName"] = event.target.value;
    this.setState({ stepList: tempStepList }, () => console.log(this.state));
  }

  render() {
    const { classes } = this.props;

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>How are we cooking this recipe?</h4>
        </GridItem>
        <GridItem xs={12} sm={6}>
          {this.state.stepList.map((step, i) => {
            return (
              <CustomInput
                labelText={<span>Step Name</span>}
                id="stepName"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    this.change(event, i);
                  },
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      className={classes.inputAdornment}
                    >
                      <OutdoorGrill className={classes.inputAdornmentIcon} />
                    </InputAdornment>
                  )
                }}
              />
            );
          })}
        </GridItem>
        <GridItem xs={12} sm={12}>
          <Button onClick={this.addStep.bind(this)}>Add Step</Button>
          <Button onClick={this.removeStep.bind(this)}>Remove Step</Button>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(RecipeStepList);
