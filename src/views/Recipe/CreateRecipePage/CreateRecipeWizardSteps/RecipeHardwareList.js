import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import WizardStep from "../../../../components/Wizard/WizardStep";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import {OutdoorGrill} from "@material-ui/icons";
import Button from "../../../../components/CustomButtons/Button";
// core components

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

class RecipeHardwareList extends WizardStep {
  constructor(props) {
    super(props);
    this.state = {
      hardwareList: []
    };
  }

  sendState() {
    return this.state;
  }

  addHardwareItem() {
    console.log(this.state);
    console.log("=================");
    const tempHardwareList = [...this.state.hardwareList];
    tempHardwareList.push({ hardwareName: "" });
    this.setState({ hardwareList: tempHardwareList });
  }

  removeHardwareItem() {
    console.log(this);
    console.log("=================");
    const tempHardwareList = [...this.state.hardwareList];
    tempHardwareList.pop();
    this.setState({ hardwareList: tempHardwareList });
  }

  change(event, index) {
    const tempHardwareList = [...this.state.hardwareList];
    tempHardwareList[index]["hardwareName"] = event.target.value;
    console.log("Hardware Item: " + event.target.value);
    this.setState({ hardwareList: tempHardwareList });
  }

  isValidated() {
    return (
      this.state.firstnameState === "success" &&
      this.state.lastnameState === "success"
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>What are we cooking with?</h4>
        </GridItem>
        <GridItem xs={12} sm={6}>
          {this.state.hardwareList.map((hardwareItem, i) => {
            return (
              <CustomInput
                labelText={<span>Hardware Item Name</span>}
                id="hardwareItem"
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
          <Button onClick={this.addHardwareItem.bind(this)}>
            Add Hardware Item
          </Button>
          <Button onClick={this.removeHardwareItem.bind(this)}>
            Remove Hardware Item
          </Button>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(RecipeHardwareList);
