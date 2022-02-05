import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import Parallax from "../../../components/Parallax/Parallax";
import StaticImageCarousel from "../../../components/ImageCarousel/StaticImageCarousel";
import classNames from "classnames";
import PageFooter from "../../../components/Footer/PageFooter";
import React from "react";
import UserController from "../../../api/UserController";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CardHeader from "../../../components/Card/CardHeader";
import Button from "../../../components/CustomButtons/Button";
import { NavLink } from "react-router-dom";
import componentsStyle from "../../../assets/jss/material-kit-pro-react/views/componentsStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CircularProgress from "@material-ui/core/CircularProgress";
import RecipeController from "../../../api/RecipeController";
import { List, ListItem } from "@material-ui/core";

class RecipePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: false,
      isLoaded: false,
      imageIds: null,
      pageContent: "",
      recipeInfo: {}
    };

    this.loadRecipeInfo();
    this.loadUserInformation();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  loadRecipeInfo() {
    let cookbookId = this.props.match.params.cookBookId;
    let groupId = this.props.match.params.groupId;
    let recipeId = this.props.match.params.recipeId;
    RecipeController.recipeView(groupId, cookbookId, recipeId) //TODO: Show both public & non public
      .then(response => {
        console.log("RECIPE INFO: ");
        console.log("=============================");
        console.log(response.data);
        this.setState({
          recipeInfo: response.data,
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
    const hardwareList = this.state.recipeInfo.hardwareList;
    console.log(hardwareList);

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
            />
            <StaticImageCarousel />
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              {!this.state.isLoaded && (
                <GridContainer justify={"center"}>
                  <div>
                    <CircularProgress
                      className={classes.progress}
                      style={{ marginLeft: "50%" }}
                    />
                  </div>
                </GridContainer>
              )}
              {this.state.userLoggedIn && this.state.isLoaded && (
                <div>
                  <GridContainer>
                    <GridItem xs={12} sm={5}>
                      <CardHeader color="danger" className={classes.cardHeader}>
                        <h2>{this.state.recipeInfo.name}</h2>
                      </CardHeader>
                    </GridItem>
                    <GridItem xs={12} sm={4} />
                  </GridContainer>
                  <GridContainer justify={"center"}>
                    <GridItem xs={12} sm={12} md={8} lg={8}>
                      <Card>
                        <CardBody>
                          <div>
                            <h2>General Information</h2>
                            {this.state.recipeInfo.description}
                          </div>
                          <div>
                            <List>
                              <ListItem>
                                Serves: {this.state.recipeInfo.serves}
                              </ListItem>
                              <ListItem>
                                Total Time: {this.state.recipeInfo.totalTime}
                              </ListItem>
                            </List>
                          </div>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8} lg={8}>
                      <Card>
                        <CardBody>
                          <div>
                            <h2>Equipment Needed</h2>
                          </div>
                          <div>
                            <List>
                              {this.state.isLoaded &&
                                this.state.recipeInfo.hardwareList?.map(
                                  hardware => {
                                    return (
                                      <ListItem>
                                        {hardware.hardwareName}
                                      </ListItem>
                                    );
                                  }
                                )}
                            </List>
                          </div>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8} lg={8}>
                      <Card>
                        <CardBody>
                          <div>
                            <h2>Ingredients</h2>
                          </div>
                          <div>
                            {this.state.isLoaded &&
                              this.state.recipeInfo.ingredientCategoryList?.map(
                                category => {
                                  return (
                                    <div>
                                      <h3> {category.name} </h3>
                                      <List>
                                        {this.state.isLoaded &&
                                          category.ingredientList?.map(
                                            ingredient => {
                                              return (
                                                <ListItem>
                                                  {ingredient.quantity}{" "}
                                                  {ingredient.unit}{" "}
                                                  {ingredient.name}
                                                </ListItem>
                                              );
                                            }
                                          )}
                                      </List>
                                    </div>
                                  );
                                }
                              )}
                          </div>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8} lg={8}>
                      <Card>
                        <CardBody>
                          <div>
                            <h2>Steps</h2>
                          </div>
                          <div>
                            {this.state.isLoaded &&
                              this.state.recipeInfo.stepList?.map(step => {
                                return (
                                  <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                  </div>
                                );
                              })}
                          </div>
                        </CardBody>
                      </Card>
                    </GridItem>
                  </GridContainer>
                </div>
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
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(RecipePage);
