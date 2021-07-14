import React from "react";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import WizardStep from "../../../../components/Wizard/WizardStep";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
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
      firstname: "",
      firstnameState: "",
      lastname: "",
      lastnameState: "",
      phone: "",
      phoneState: ""
    };
  }
  sendState() {
    return this.state;
  }

  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }

  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }

  isValidated() {
    return (
      this.state.firstnameState === "success" &&
      this.state.lastnameState === "success"
    );
  }

  render() {
    const { classes, validationErrors } = this.props;

    let firstNameError = validationErrors.filter(validationError =>
      validationError.includes("First Name")
    );
    let lastNameError = validationErrors.filter(validationError =>
      validationError.includes("Last Name")
    );
    let phoneNumberError = validationErrors.filter(validationError =>
      validationError.includes("Phone Number")
    );
    let firstNameErrorExists = firstNameError.length > 0;
    let lastNameErrorExists = lastNameError.length > 0;
    let phoneNumberErrorExists = phoneNumberError.length > 0;

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>
            Let's start with the basic information
          </h4>
        </GridItem>

        <GridItem xs={12} sm={6}>
          <CustomInput
            success={
              this.state.firstnameState === "success" && !firstNameErrorExists
            }
            error={
              this.state.firstnameState === "error" || firstNameErrorExists
            }
            labelText={
              firstNameErrorExists ? (
                <span>
                  First Name <small>({firstNameError[0]})</small>
                </span>
              ) : (
                <span>
                  First Name <small>(required)</small>
                </span>
              )
            }
            id="firstname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => {
                this.change(event, "firstname", "length", 3);
                // registrationDatta.firstName = event.target.value;
              },
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Face className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            success={
              this.state.lastnameState === "success" && !lastNameErrorExists
            }
            error={this.state.lastnameState === "error" || lastNameErrorExists}
            labelText={
              lastNameErrorExists ? (
                <span>
                  Last Name <small>({lastNameError[0]})</small>
                </span>
              ) : (
                <span>
                  Last Name <small>(required)</small>
                </span>
              )
            }
            id="lastname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => {
                this.change(event, "lastname", "length", 3);
                // registrationData.lastName = event.target.value;
              },
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <RecordVoiceOver className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            error={phoneNumberErrorExists}
            labelText={
              phoneNumberErrorExists ? (
                <span>
                  Phone <small>(optional)</small>
                </span>
              ) : (
                <span>
                  Phone <small>({phoneNumberError[0]})</small>
                </span>
              )
            }
            id="phone"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => {
                this.change(event, "phone", "", null);
                // registrationData.phoneNumber = event.target.value;
              },
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <RecordVoiceOver className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(RecipeStepList);
