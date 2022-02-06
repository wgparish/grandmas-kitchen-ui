import { initializeGA } from "../../../constants/utils";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../../assets/jss/material-kit-pro-react/views/loginPageStyle";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import image from "../../../assets/img/bread.jpg";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Fade from "@material-ui/core/Fade";
import PageFooter from "../../../components/Footer/PageFooter";
import { Redirect } from "react-router-dom";
import Wizard from "../../../components/Wizard/Wizard";
import RecipeGenericInformation from "./CreateRecipeWizardSteps/RecipeGenericInformation";
import RecipeHardwareList from "./CreateRecipeWizardSteps/RecipeHardwareList";
import RecipeIngredientList from "./CreateRecipeWizardSteps/RecipeIngredientList";
import RecipeStepList from "./CreateRecipeWizardSteps/RecipeStepList";
import RecipeController from "../../../api/RecipeController";
import ReactGA from "react-ga";

class CreateRecipePage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimation: "",
      errorText: null,
      processing: false,
      recipeName: "",
      recipeDescription: "",
      imageId: null,
      createdRecipe: false
    };
    initializeGA();
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  createRecipe(states) {
    console.log("==================");
    console.log("States: ");
    console.log(states);

    const generalInfo = states[0]["general"];
    const hardwareInfo = states[1]["hardware"];
    const ingredientInfo = states[2]["ingredients"];
    const stepsInfo = states[3]["steps"];

    //Add sequenceNumber to Steps
    stepsInfo["stepList"] = stepsInfo["stepList"].map((step, index) => {
      return {
        sequenceNumber: index,
        title: step["stepName"],
        description: "TBD",
        ...step
      };
    });
    console.log("Steps: ");
    console.log(stepsInfo);

    ingredientInfo["categoryList"] = ingredientInfo["categoryList"].map(
      (category, catInd) => {
        return {
          sequenceNumber: catInd,
          ingredientList: category["ingredientList"].map(
            (ingredient, ingInd) => {
              return {
                sequenceNumber: ingInd,
                quantity: 1,
                unit: "tsp",
                optional: false,
                name: ingredient["ingredientName"],
                ...ingredient
              };
            }
          ),
          name: category["categoryName"]
        };
      }
    );
    console.log("Category: ");
    console.log(ingredientInfo);

    let cookbookId = this.props.match.params.cookBookId;
    let groupId = this.props.match.params.groupId;

    let recipeAddRequest = {
      cookbookId: cookbookId,
      groupId: groupId,
      name: generalInfo["recipeName"],
      recipeType: generalInfo["recipeType"],
      description: generalInfo["description"],
      totalTime: (
        parseInt(generalInfo["prepTime"]) || 0 + parseInt(generalInfo["cookTime"]) || 0
      ).toString(),
      prepTime: generalInfo["prepTime"],
      cookTime: generalInfo["cookTime"],
      serves: generalInfo["serves"],
      labelList: [
        {
          labelText: "Random",
          recipeType: "FOOD"
        }
      ],
      hardwareList: hardwareInfo["hardwareList"],
      stepList: stepsInfo["stepList"],
      ingredientCategoryList: ingredientInfo["categoryList"]
    };

    console.log(recipeAddRequest);

    RecipeController.recipeAdd(recipeAddRequest)
      .then(response => this.handleRecipeAddServerSuccessResponse(response))
      .catch(error => this.handleRecipeAddServerError(error));
  }

  handleRecipeAddServerError(error) {
    console.log(error);
  }

  handleRecipeAddServerSuccessResponse(response) {
    ReactGA.event({
      category: "Recipe",
      action: "Create Recipe",
      label: this.state.recipeName
    });
    console.log(response);

    this.setState({ createdRecipe: true });

    this.props.history.push(
      "/" +
        this.props.match.params.cookBookId +
        "/" +
        this.props.match.params.groupId +
        "/" +
        response.data.id
    );
  }

  render() {
    const { classes, ...rest } = this.props;

    if (!this.state.createdGroup) {
      return (
        <div>
          <Header
            absolute
            color="transparent"
            brand="Grandmas Kitchen"
            links={<HeaderLinks dropdownHoverColor="info" />}
            {...rest}
          />
          <div
            className={classes.pageHeader}
            style={{
              backgroundImage: "url(" + image + ")",
              backgroundSize: "cover",
              backgroundPosition: "top center"
            }}
          >
            <div className={classes.container}>
              <GridContainer justify="center">
                <Fade in={true}>
                  <GridItem xs={12} sm={12} md={9}>
                    <Wizard
                      validate
                      color={"danger"}
                      steps={[
                        {
                          stepName: "General",
                          stepComponent: RecipeGenericInformation,
                          stepId: "general"
                        },
                        {
                          stepName: "Equipment",
                          stepComponent: RecipeHardwareList,
                          stepId: "hardware"
                        },
                        {
                          stepName: "Ingredients",
                          stepComponent: RecipeIngredientList,
                          stepId: "ingredients"
                        },
                        {
                          stepName: "Steps",
                          stepComponent: RecipeStepList,
                          stepId: "steps"
                        }
                      ]}
                      title="Create Your Recipe"
                      subtitle="This information will be all about your recipe."
                      finishButtonClick={allStates => {
                        this.createRecipe(allStates);
                      }}
                    />
                  </GridItem>
                </Fade>
              </GridContainer>
            </div>
          </div>
          <PageFooter />
        </div>
      );
    } else {
      return (
        <Redirect
          to={
            "/" +
            this.props.match.params.groupId +
            "/" +
            this.props.match.params.cookBookId
          }
        />
      );
    }
  }
}

export default withStyles(loginPageStyle)(CreateRecipePage);
