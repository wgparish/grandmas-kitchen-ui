import { initializeGA } from "../../constants/utils";
import UserController from "../../api/UserController";
import * as ReactGA from "react-ga";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import image from "../../assets/img/bread.jpg";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Fade from "@material-ui/core/Fade";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CustomInput from "../../components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import React from "react";
import CardFooter from "../../components/Card/CardFooter";
import Button from "../../components/CustomButtons/Button";
import PageFooter from "../../components/Footer/PageFooter";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-pro-react/views/loginPageStyle";
import { Face } from "@material-ui/icons";
import { Redirect } from "react-router-dom";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimation: "",
      email: null,
      password: null,
      firstName: null,
      lastName: null,
      showLogin: true,
      errorText: null,
      processing: false,
      userLoggedIn: false,
      imageId: null
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

  registerUser() {
    //If you want to add a login-wait animation/change then do so below
    let email = this.state.email;
    let password = this.state.password;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    UserController.register({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    })
      .then(response => this.handleRegisterServerSuccessResponse(response))
      .catch((error) => this.handleRegisterServerError(error));
  }

  handleRegisterServerError(error) {
    console.log(error);
    if (error != null && error.response != null && error.response.status != null) {
      let statusCode = error.response.status;
      this.setState({ userLoggedIn: false });
      if (statusCode === 400) {
        let responseBody = typeof error.response.data === "string" ? [error.response.data] : error.response.data; //should be array of strings
        this.setState({ errorText: responseBody });
      } else if (statusCode === 403) { //user already logged in somehow
        this.props.history.push("/");
      } else {
        this.setState({ errorText: "We are experiencing technical difficulties. Please try again, or contact support if this persists." });
      }
    }
  }

  handleRegisterServerSuccessResponse(response) {
    ReactGA.event({
      category: "User",
      action: "Register",
      label: this.state.email.split("@")[0]
    });
    console.log(response);

    this.setState({ userLoggedIn: true });
  }

  render() {
    const { classes, ...rest } = this.props;

    if (!this.state.userLoggedIn) {
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
                      <form className={classes.form} onSubmit={e => {
                        e.preventDefault();
                        this.registerUser();
                      }}>
                        <CardHeader color="danger" className={classes.cardHeader}>
                          <h4>Register</h4>
                        </CardHeader>
                        <p className={classes.divider}>Please fill out the below information</p>
                        <CardBody>
                          <CustomInput
                            labelText="First Name..."
                            id="firstName"
                            formControlProps={{
                              fullWidth: true,
                              onChange: (evt) => {
                                if (evt.target === null || evt.target.value === null) {
                                  this.setState({ firstName: "" });
                                } else {
                                  this.setState({ firstName: evt.target.value });
                                }

                              }
                            }}
                            inputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Face className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Last Name..."
                            id="lastName"
                            formControlProps={{
                              fullWidth: true,
                              onChange: (evt) => {
                                if (evt.target === null || evt.target.value === null) {
                                  this.setState({ lastName: "" });
                                } else {
                                  this.setState({ lastName: evt.target.value });
                                }

                              }
                            }}
                            inputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Face className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Email..."
                            id="email"
                            formControlProps={{
                              fullWidth: true,
                              onChange: (evt) => {
                                if (evt.target === null || evt.target.value === null) {
                                  this.setState({ email: "" });
                                } else {
                                  this.setState({ email: evt.target.value });
                                }

                              }
                            }}
                            inputProps={{
                              type: "email",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Password"
                            id="password"
                            formControlProps={{
                              fullWidth: true,
                              onChange: (evt) => {
                                if (evt.target === null || evt.target.value === null) {
                                  this.setState({ password: "" });
                                } else {
                                  this.setState({ password: evt.target.value });
                                }
                              }
                            }}
                            inputProps={{
                              type: "password",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Icon className={classes.inputIconsColor}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              )
                            }}
                          />
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                          <Button
                            type={"submit"}
                            simple
                            color="danger"
                            size="lg"
                          >
                            Register!
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
      return (
        <Redirect to="/login" />
      );
    }
  }
}

export default withStyles(loginPageStyle)(RegisterPage);
