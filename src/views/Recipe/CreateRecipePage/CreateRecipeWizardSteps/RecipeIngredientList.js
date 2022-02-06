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
import Grid from "@material-ui/core/Grid";

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

class RecipeIngredientList extends WizardStep {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: []
    };
  }

  sendState() {
    return this.state;
  }

  addCategory() {
    console.log(this.state);
    console.log("=================");
    const tempCategoryList = [...this.state.categoryList];
    tempCategoryList.push({ categoryName: "", ingredientList: [] });
    this.setState({ categoryList: tempCategoryList });
  }

  removeCategory() {
    console.log(this);
    console.log("=================");
    const tempCategoryList = [...this.state.categoryList];
    tempCategoryList.pop();
    this.setState({ categoryList: tempCategoryList });
  }

  addIngredient(index) {
    const tempCategoryList = [...this.state.categoryList];
    tempCategoryList[index]["ingredientList"].push({
      ingredientName: "",
      quantity: "",
      unit: ""
    });
    this.setState({ categoryList: tempCategoryList });
  }

  removeIngredient(index) {
    const tempCategoryList = [...this.state.categoryList];
    tempCategoryList[index]["ingredientList"].pop();
    this.setState({ categoryList: tempCategoryList });
  }

  change(event, index, ingredientIndex) {
    const tempCategoryList = [...this.state.categoryList];
    if (ingredientIndex === null) {
      tempCategoryList[index][event.target.id] = event.target.value;
    } else {
      tempCategoryList[index]["ingredientList"][ingredientIndex][
        event.target.id
      ] = event.target.value;
    }
    this.setState({ categoryList: tempCategoryList });
  }

  render() {
    const { classes } = this.props;

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>What Ingredients are we using?</h4>
        </GridItem>
        <GridItem xs={12} sm={6}>
          {this.state.categoryList.map((categoryItem, i) => {
            return (
              <div>
                <GridItem s={12} sm={12}>
                  <CustomInput
                    labelText={<span>Category Name</span>}
                    id="categoryName"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        this.change(event, i, null);
                      },
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          className={classes.inputAdornment}
                        >
                          <OutdoorGrill
                            className={classes.inputAdornmentIcon}
                          />
                        </InputAdornment>
                      )
                    }}
                  />
                </GridItem>
                <GridItem>
                  {categoryItem.ingredientList.map(
                    (ingredientItem, ingredientIndex) => {
                      return (
                        <GridItem style={{ display: "flex" }}>
                          <GridItem s={1}>
                            <CustomInput
                              labelText={<span>Quantity</span>}
                              id="quantity"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                onChange: event => {
                                  this.change(event, i, ingredientIndex);
                                }
                              }}
                            />
                          </GridItem>
                          <GridItem s={1}>
                            <CustomInput
                              labelText={<span>Unit</span>}
                              id="unit"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                onChange: event => {
                                  this.change(event, i, ingredientIndex);
                                }
                              }}
                            />
                          </GridItem>
                          <GridItem s={8}>
                            <CustomInput
                              labelText={<span>Ingredient Name</span>}
                              id="ingredientName"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                onChange: event => {
                                  this.change(event, i, ingredientIndex);
                                }
                              }}
                            />
                          </GridItem>
                          {/*TODO: Add Quantity & Unit & Optional checkbox*/}
                        </GridItem>
                      );
                    }
                  )}
                </GridItem>
                <GridItem>
                  <Button onClick={this.addIngredient.bind(this, i)}>
                    Add Ingredient
                  </Button>
                  <Button onClick={this.removeIngredient.bind(this, i)}>
                    Remove Ingredient
                  </Button>
                </GridItem>
              </div>
            );
          })}
        </GridItem>
        <GridItem xs={12} sm={12}>
          <Button onClick={this.addCategory.bind(this)}>Add Category</Button>
          <Button onClick={this.removeCategory.bind(this)}>
            Remove Category
          </Button>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(RecipeIngredientList);
