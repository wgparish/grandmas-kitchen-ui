import { initializeGA } from "../../constants/utils";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-pro-react/views/loginPageStyle";
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
import { Chat } from "@material-ui/icons";
import { purple } from "@material-ui/core/colors";
import CardFooter from "../../components/Card/CardFooter";
import Button from "../../components/CustomButtons/Button";
import PageFooter from "../../components/Footer/PageFooter";
import { Redirect, Switch } from "react-router-dom";
import GroupController from "../../api/GroupController";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    "&$checked": {
      color: purple[500]
    },
    "&$checked + $track": {
      backgroundColor: purple[500]
    }
  },
  checked: {},
  track: {}
})(Switch);

class CreateGroupPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimation: "",
      errorText: null,
      processing: false,
      userLoggedIn: false,
      groupName: "",
      groupDescription: "",
      groupIsPublic: false,
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

  createGroup() {
    //If you want to add a login-wait animation/change then do so below
    let email = this.state.email;
    let password = this.state.password;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;

    let name = this.state.groupName;
    let description = this.state.groupDescription;
    let isPublic = this.state.groupIsPublic;
    GroupController.groupAdd({
      name: name,
      description: description,
      public: isPublic
    })
      .then(response => this.handleGroupAddServerSuccessResponse(response))
      .catch(error => this.handleGroupAddServerError(error));
  }

  handleGroupAddServerError(error) {
    console.log(error);
    if (
      error != null &&
      error.response != null &&
      error.response.status != null
    ) {
      let statusCode = error.response.status;
      this.setState({ userLoggedIn: false });
      if (statusCode === 400) {
        let responseBody =
          typeof error.response.data === "string"
            ? [error.response.data]
            : error.response.data; //should be array of strings
        this.setState({ errorText: responseBody });
      } else if (statusCode === 403) {
        //user already logged in somehow
        this.props.history.push("/");
      } else {
        this.setState({
          errorText:
            "We are experiencing technical difficulties. Please try again, or contact support if this persists."
        });
      }
    }
  }

  handleGroupAddServerSuccessResponse(response) {
    ReactGA.event({
      category: "Group",
      action: "Create Group",
      label: this.state.groupName
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
                      <form
                        className={classes.form}
                        onSubmit={e => {
                          e.preventDefault();
                          this.createGroup();
                        }}
                      >
                        <CardHeader
                          color="danger"
                          className={classes.cardHeader}
                        >
                          <h4>Create New Group</h4>
                        </CardHeader>
                        <p className={classes.divider}>
                          Please fill out the below information
                        </p>
                        <CardBody>
                          <CustomInput
                            labelText="Group Name..."
                            id="groupName"
                            formControlProps={{
                              fullWidth: true,
                              onChange: evt => {
                                if (
                                  evt.target === null ||
                                  evt.target.value === null
                                ) {
                                  this.setState({ groupName: "" });
                                } else {
                                  this.setState({
                                    groupName: evt.target.value
                                  });
                                }
                              }
                            }}
                          />
                          <CustomInput
                            labelText="Description..."
                            id="description"
                            type="textarea"
                            formControlProps={{
                              fullWidth: true,
                              onChange: evt => {
                                if (
                                  evt.target === null ||
                                  evt.target.value === null
                                ) {
                                  this.setState({ description: "" });
                                } else {
                                  this.setState({
                                    description: evt.target.value
                                  });
                                }
                              }
                            }}
                            inputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Chat className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.groupIsPublic}
                                onChange={evt => {
                                  if (
                                    evt.target === null ||
                                    evt.target.checked === null
                                  ) {
                                    this.setState({ groupIsPublic: false });
                                  } else {
                                    this.setState({
                                      groupIsPublic: evt.target.checked
                                    });
                                  }
                                }}
                                name="antoine"
                              />
                            }
                            label="Is This Group Public"
                          />
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                          <Button
                            type={"submit"}
                            simple
                            color="danger"
                            size="lg"
                          >
                            Create Group
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
      return <Redirect to="/login" />;
    }
  }
}

export default withStyles(loginPageStyle)(CreateGroupPage);
