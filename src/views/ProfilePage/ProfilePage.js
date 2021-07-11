import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";
import StaticImageCarousel from "../../components/ImageCarousel/StaticImageCarousel";
import classNames from "classnames";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CardHeader from "../../components/Card/CardHeader";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";
import { Email } from "@material-ui/icons";
import PageFooter from "../../components/Footer/PageFooter";
import React from "react";
import UserController from "../../api/UserController";
import { NavLink } from "react-router-dom";
import contactUsStyle from "../../assets/jss/material-kit-pro-react/views/contactUsStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIds: null,
      finished: false,
      userLoggedIn: false,
      inputFirstName: "",
      inputLastName: "",
      inputEmail: "",
      inputOldPassword: "",
      inputNewPassword: "",
      inputChangePassword: false
    };

    this.loadUserInformation();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  loadUserInformation() {
    UserController.getAccount()
      .then(response => {
        this.setState({
          inputFirstName: response.data.firstName,
          inputLastName: response.data.lastName,
          inputEmail: response.data.email,
          userLoggedIn: true
        });
      })
      .catch(() => this.setState({ userLoggedIn: false }));
  }

  saveProfileInformation() {
    if (this.state.inputNewPassword === "") {
      UserController.updateAccount({
        firstName: this.state.inputFirstName,
        lastName: this.state.inputLastName,
        email: this.state.inputEmail
      })
        .then(() => {
          this.setState({
            finished: true,
            inputOldPassword: "",
            inputNewPassword: ""
          });
        })
        .catch(err => console.log("Something done fucked up: " + err));
    } else {
      UserController.updateAccount({
        firstName: this.state.inputFirstName,
        lastName: this.state.inputLastName,
        email: this.state.inputEmail,
        currentPassword: this.state.inputOldPassword,
        newPassword: this.state.inputNewPassword
      })
        .then(() => {
          this.setState({
            finished: true,
            inputOldPassword: "",
            inputNewPassword: ""
          });
        })
        .catch(err => console.log("Something done fucked up: " + err));
    }
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
                <GridItem sm={3} />
                <GridItem sm={3}>
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h2>Profile</h2>
                  </CardHeader>
                </GridItem>
                <GridItem sm={6} />
              </GridContainer>
              <GridContainer>
                <GridItem sm={3} />
                <GridItem sm={6}>
                  <p>
                    Your information is listed below. Feel free to change.
                    <br />
                  </p>
                  {this.state.userLoggedIn && (
                    <form>
                      <CustomInput
                        labelText={"Your First Name: "}
                        id="firstName"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            this.setState({
                              inputFirstName: event.target.value
                            });
                          },
                          value: this.state.inputFirstName
                        }}
                      />
                      <CustomInput
                        labelText={"Your Last Name: "}
                        id="lastName"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            this.setState({
                              inputLastName: event.target.value
                            });
                          },
                          value: this.state.inputLastName
                        }}
                      />
                      <CustomInput
                        labelText={"Email Address: "}
                        id="currentEmail"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            this.setState({ inputEmail: event.target.value });
                          },
                          value: this.state.inputEmail,
                          type: "email",
                          autoComplete: "off",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText={"Current Password: "}
                        id="oldPassword"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            this.setState({
                              inputOldPassword: event.target.value
                            });
                          },
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
                      <CustomInput
                        labelText={"New Password: "}
                        id="newPassword"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            this.setState({
                              inputNewPassword: event.target.value
                            });
                          },
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

                      {this.state.finished !== true && (
                        <div className={classes.textCenter}>
                          <Button
                            color="danger"
                            round
                            onClick={evt => this.saveProfileInformation()}
                          >
                            Save
                          </Button>
                        </div>
                      )}
                      {this.state.finished === true && (
                        <div className={classes.textCenter}>
                          <p>Your information has been saved. </p>
                          <Button
                            color="danger"
                            round
                            onClick={evt => this.saveProfileInformation()}
                          >
                            Save
                          </Button>
                        </div>
                      )}
                    </form>
                  )}
                  {!this.state.userLoggedIn && (
                    <div className={classes.textCenter}>
                      <Button color="danger" round>
                        <NavLink to={"/login"}>Please Login</NavLink>
                      </Button>
                    </div>
                  )}
                </GridItem>
                <GridItem sm={3} />
              </GridContainer>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default withStyles(contactUsStyle)(ProfilePage);
