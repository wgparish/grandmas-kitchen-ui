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
import { Link, NavLink } from "react-router-dom";
import componentsStyle from "../../../assets/jss/material-kit-pro-react/views/componentsStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import GroupController from "../../../api/GroupController";
import Card from "../../../components/Card/Card";
import { Add } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import CardBody from "../../../components/Card/CardBody";
import CircularProgress from "@material-ui/core/CircularProgress";

class GroupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: false,
      isLoaded: false,
      imageIds: null,
      pageContent: "",
      groupList: []
    };

    this.loadGroupList();
    this.loadUserInformation();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  loadGroupList() {
    GroupController.groupPublicList() //TODO: Show both public & non public
      .then(response => {
        console.log("Group List: ");
        console.log("===========================");
        console.log(response);
        this.setState({
          groupList: response.data,
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
            />
            <StaticImageCarousel />
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={5}>
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h2>Public Groups</h2>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={4} />
              </GridContainer>
              <p>
                <br />
                Your Groups are listed below
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
                  this.state.groupList.map(group => {
                    return (
                      <GridItem xs={12} sm={12} md={4} lg={4}>
                        <Card danger color="danger">
                          <Link
                            to={"/" + group.id}
                            className={classes.cardLink}
                          >
                            <CardHeader plain>
                              <h3>{group.name}</h3>
                            </CardHeader>
                            <CardBody>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center"
                                }}
                              >
                                <p>{group.description}</p>
                              </div>
                            </CardBody>
                          </Link>
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
                          <Link to={"/create-group"}>
                            <IconButton
                              to={"/create-group"}
                              color="info"
                              aria-label={"Create Group"}
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

export default withStyles(componentsStyle)(GroupPage);
