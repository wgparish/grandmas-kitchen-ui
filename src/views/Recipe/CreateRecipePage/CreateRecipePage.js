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
    setTimeout(
      function() {
        this.setState({ cardAnimation: "" });
      }.bind(this),
      700
    );
  }

  createRecipe() {
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
  //
  // handleCookBookAddServerError(error) {
  //   console.log(error);
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
  // }
  //
  // handleCookBookAddServerSuccessResponse(response) {
  //   ReactGA.event({
  //     category: "CookBook",
  //     action: "Create CookBook",
  //     label: this.state.cookbookName
  //   });
  //   console.log(response);
  //
  //   this.setState({ createdGroup: true });
  // }

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
                <GridItem xs={12} sm={8} md={7}>
                  <Fade in={true}>
                    <Card className={classes[this.state.cardAnimation]}>
                      <form
                        className={classes.form}
                        onSubmit={e => {
                          e.preventDefault();
                          this.createCookbook();
                        }}
                      >
                        <CardHeader
                          color="danger"
                          className={classes.cardHeader}
                        >
                          <h4>Create New Recipe</h4>
                        </CardHeader>
                        <p className={classes.divider}>
                          Please fill out the below information
                        </p>
                        <CardBody>
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                          <Button
                            type={"submit"}
                            simple
                            color="danger"
                            size="lg"
                          >
                            Create Recipe
                          </Button>
                        </CardFooter>
                      </form>
                    </Card>
                  </Fade>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          <PageFooter />
        </div>
      );
    } else {
      return <Redirect to={"/" + this.props.match.params.groupId + "/" + this.props.match.params.cookBookId} />;
    }
  }
}

export default withStyles(loginPageStyle)(CreateRecipePage);
