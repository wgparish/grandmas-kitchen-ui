import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import WizardStep from "../../../../components/Wizard/WizardStep";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { Description, MenuBook } from "@material-ui/icons";
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

class RecipeGenericInformation extends WizardStep {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "Test",
      recipeNameState: "Test",
      lastname: "desc",
      descriptionState: "desc",
      recipeType: "",
      recipeTypeState: ""
    };
  }
  sendState() {
    return this.state;
  }

  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    return value.length >= length;
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
      this.state.recipeNameState === "success" &&
      this.state.descriptionState === "success"
    );
  }

  render() {
    const { classes, validationErrors } = this.props;

    let recipeNameError = validationErrors.filter(validationError =>
      validationError.includes("Recipe Name")
    );
    let descriptionError = validationErrors.filter(validationError =>
      validationError.includes("Description")
    );
    // let totalTimeError = validationErrors.filter(validationError =>
    //   validationError.includes("Total Time")
    // );
    let recipeNameErrorExists = recipeNameError.length > 0;
    let descriptionErrorExists = descriptionError.length > 0;
    // let totalTimeErrorExists = totalTimeError.length > 0;

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
              this.state.recipeNameState === "success" && !recipeNameErrorExists
            }
            error={
              this.state.recipeNameState === "error" || recipeNameErrorExists
            }
            labelText={
              recipeNameErrorExists ? (
                <span>
                  Recipe Name <small>({recipeNameError[0]})</small>
                </span>
              ) : (
                <span>
                  Recipe Name <small>(required)</small>
                </span>
              )
            }
            id="recipeName"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => {
                this.change(event, "recipeName", "length", 3);
              },
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <MenuBook className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            success={
              this.state.descriptionState === "success" &&
              !descriptionErrorExists
            }
            error={
              this.state.descriptionState === "error" || descriptionErrorExists
            }
            labelText={
              descriptionErrorExists ? (
                <span>
                  Description <small>({descriptionError[0]})</small>
                </span>
              ) : (
                <span>
                  Description <small>(required)</small>
                </span>
              )
            }
            id="description"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => {
                this.change(event, "description", "length", 3);
              },
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Description className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
          <InputLabel>Recipe Type</InputLabel>
          <Select
            labelId="recipeTypeSelect"
            id="recipeTypeSelect"
            value={this.state.recipeType}
            label="Recipe Type"
            onChange={event =>
              this.setState({ recipeType: event.target.value })
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"FOOD"}>Food</MenuItem>
            <MenuItem value={"DRINK"}>Drinks</MenuItem>
            <MenuItem value={"PET"}>Animal Related</MenuItem>
          </Select>
          {/*FIXME: Commenting out due to Total Time being int when it should be string.*/}
          {/*<CustomInput*/}
          {/*  success={*/}
          {/*    this.state.totalTimeState === "success" && !totalTimeErrorExists*/}
          {/*  }*/}
          {/*  error={*/}
          {/*    this.state.totalTimeState === "error" || totalTimeErrorExists*/}
          {/*  }*/}
          {/*  labelText={*/}
          {/*    totalTimeErrorExists ? (*/}
          {/*      <span>*/}
          {/*        Total Time <small>({descriptionError[0]})</small>*/}
          {/*      </span>*/}
          {/*    ) : (*/}
          {/*      <span>*/}
          {/*        Total Time <small>(required)</small>*/}
          {/*      </span>*/}
          {/*    )*/}
          {/*  }*/}
          {/*  id="description"*/}
          {/*  formControlProps={{*/}
          {/*    fullWidth: true*/}
          {/*  }}*/}
          {/*  inputProps={{*/}
          {/*    onChange: event => {*/}
          {/*      this.change(event, "description", "length", 3);*/}
          {/*    },*/}
          {/*    endAdornment: (*/}
          {/*      <InputAdornment*/}
          {/*        position="end"*/}
          {/*        className={classes.inputAdornment}*/}
          {/*      >*/}
          {/*        <RecordVoiceOver className={classes.inputAdornmentIcon} />*/}
          {/*      </InputAdornment>*/}
          {/*    )*/}
          {/*  }}*/}
          {/*/>*/}
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(RecipeGenericInformation);
