import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";
import StaticImageCarousel from "../../components/ImageCarousel/StaticImageCarousel";
import PageFooter from "../../components/Footer/PageFooter";
import React from "react";
import UserController from "../../api/UserController";
import componentsStyle from "../../assets/jss/material-kit-pro-react/views/componentsStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CardHeader from "../../components/Card/CardHeader";
import CookbookController from "../../api/CookbookController";
import RecipeController from "../../api/RecipeController";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import { Link, NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { Add } from "@material-ui/icons";
import Button from "../../components/CustomButtons/Button";

class CookBookViewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: false,
      isLoaded: false,
      imageIds: null,
      pageContent: "",
      cookBookInfo: {},
      recipeList: []
    };

    this.loadCookBookInfo();
    // this.loadRecipeList();
    this.loadUserInformation();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    console.log(this.props.match.params.groupId);
    console.log(this.props.match.params.cookBookId);
  }

  loadCookBookInfo() {
    CookbookController.cookbookView(
      this.props.match.params.groupId,
      this.props.match.params.cookBookId
    )
      .then(response => {
        console.log("COOKBOOK INFO: ");
        console.log(response.data);
        this.setState({
          cookBookInfo: response.data,
          isLoaded: true
        });
      })
      .catch(err => console.log("Something done fucked up." + err));
  }

  loadRecipeList() {
    RecipeController.recipeList(
      this.props.match.params.groupId,
      this.props.match.params.cookBookId
    )
      .then(response => {
        this.setState({
          recipeList: response.data,
          isLoaded: true
        });
      })
      .catch(err => console.log("Something done fucked up." + err));
  }

  loadUserInformation() {
    UserController.getAccount()
      .then(() => {
        this.setState({
          userLoggedIn: true,
          isLoaded: true
        });
      })
      .catch(() => this.setState({ userLoggedIn: false }));
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="white"
          brand="Grandma's Kitchen"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter="dark">
          <div>
            <div
              style={{
                position: "absolute",
                top: "25%"
              }}
            ></div>
            <StaticImageCarousel />
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={5}>
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h2>{this.state.cookBookInfo.name}</h2>
                    <h4>{this.state.cookBookInfo.description}</h4>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={4} />
              </GridContainer>
              <p>
                <br />
                Your Recipes are listed below
                <br />
                <br />
              </p>
              <GridContainer justify={"center"}>
                {!this.state.isLoaded && (
                  <div>
                    <CircularProgress
                      className={classes.progress}
                      style={{ marginLeft: "50%" }}
                    />
                  </div>
                )}
                {this.state.userLoggedIn &&
                  this.state.isLoaded &&
                  this.state.recipeList.map(recipe => {
                    return (
                      <GridItem xs={12} sm={12} md={4} lg={4}>
                        <Card danger color="danger">
                          <CardHeader plain>
                            <h3>{recipe.name}</h3>
                          </CardHeader>
                          <CardBody>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center"
                              }}
                            >
                              <p>{recipe.description}</p>
                            </div>
                          </CardBody>
                        </Card>
                      </GridItem>
                    );
                  })}
                {this.state.userLoggedIn && this.state.isLoaded && (
                  <GridItem xs={12} sm={12} md={4} lg={4}>
                    <Card danger color="info">
                      <CardBody>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Link
                            to={"/create-recipe/" + this.props.match.params.groupId + "/" + this.props.match.params.cookBookId}
                          >
                            <IconButton
                              to={"/create-recipe/" + this.props.match.params.groupId + "/" + this.props.match.params.cookBookId}
                              color="info"
                              aria-label={"Create Recipe"}
                            >
                              <Add fontSize="large" />
                            </IconButton>
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </GridItem>
                )}
                {!this.state.userLoggedIn && this.state.isLoaded && (
                  <GridItem sm={12}>
                    <div className={classes.textCenter}>
                      <Button color="danger" round>
                        <NavLink to={"/login"}>Please Login</NavLink>
                      </Button>
                    </div>
                  </GridItem>
                )}
              </GridContainer>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(CookBookViewPage);
