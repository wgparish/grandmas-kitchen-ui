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
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import Button from "../../../components/CustomButtons/Button";
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

  createRecipe() {
    console.log("Params: ");
    console.log(this.props.match.params);

    let cookbookId = this.props.match.params.cookBookId;
    let groupId = this.props.match.params.groupId;

    console.log(cookbookId + " :cookbookId: " + this.props.match.params.cookBookId);
    console.log(groupId + " :groupId: " + this.props.match.params.groupId);

    let recipeAddRequest = {
      cookbookId: cookbookId,
      groupId: groupId,
      name: "Hardcode Entry",
      recipeType: "FOOD",
      description: "Hardcoded Description",
      totalTime: 420,
      prepTime: 69,
      cookTime: 240,
      serves: "4 People",
      labelList: [
        {
          labelText: "Random",
          recipeType: "FOOD"
        }
      ],
      hardwareList: [
        {
          hardwareName: "Wok"
        }
      ],
      stepList: [
        {
          sequenceNumber: 0,
          description: "Hardcoded Step Description. blah blah blah",
          title: "Step 0. The correct first number"
        }
      ],
      ingredientCategoryList: [
        {
          sequenceNumber: 0,
          name: "Main Course",
          ingredientList: [
            {
              sequenceNumber: 0,
              quantity: "1/2",
              unit: "tsp",
              name: "corriander",
              optional: false
            }
          ]
        }
      ]
    };

    console.log(recipeAddRequest);

    RecipeController.recipeAdd(recipeAddRequest)
      .then(response => this.handleRecipeAddServerSuccessResponse(response))
      .catch(error => this.handleRecipeAddServerError(error));
    //If you want to add a login-wait animation/change then do so below
    // let name = this.state.recipeName;
    // let cookBookDescription = this.state.recipeDescription;
    // let groupId = this.props.match.params.groupId;
    // let cookBookId = this.props.match.params.cookBookId;
    // let cookBookAddRequest = {
    //   groupId: groupId,
    //   name: name,
    //   description: cookBookDescription
    // };
    // CookbookController.cookbookAdd(cookBookAddRequest)
    //   .then(response => this.handleCookBookAddServerSuccessResponse(response))
    //   .catch(error => this.handleCookBookAddServerError(error));
  }

  handleRecipeAddServerError(error) {
    console.log(error);
    //   if (
    //     error != null &&
    //     error.response != null &&
    //     error.response.status != null
    //   ) {
    //     let statusCode = error.response.status;
    //     this.setState({ userLoggedIn: false });
    //     if (statusCode === 400) {
    //       let responseBody =
    //         typeof error.response.data === "string"
    //           ? [error.response.data]
    //           : error.response.data; //should be array of strings
    //       this.setState({ errorText: responseBody });
    //     } else if (statusCode === 403) {
    //       //user already logged in somehow
    //       this.props.history.push("/");
    //     } else {
    //       this.setState({
    //         errorText:
    //           "We are experiencing technical difficulties. Please try again, or contact support if this persists."
    //       });
    //     }
    //   }
  }

  handleRecipeAddServerSuccessResponse(response) {
    ReactGA.event({
      category: "Recipe",
      action: "Create Recipe",
      label: this.state.recipeName
    });
    console.log(response);

    this.setState({ createdRecipe: true });
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
