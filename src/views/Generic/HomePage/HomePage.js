import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "../../../components/Header/Header.jsx";
import HeaderLinks from "../../../components/Header/HeaderLinks.jsx";
import Parallax from "../../../components/Parallax/Parallax.jsx";
import PageFooter from "../../../components/Footer/PageFooter.jsx";
import StaticImageCarousel from "../../../components/ImageCarousel/StaticImageCarousel";
import componentsStyle from "../../../assets/jss/material-kit-pro-react/views/componentsStyle";
import GridItem from "../../../components/Grid/GridItem";
import CardHeader from "../../../components/Card/CardHeader";
import GridContainer from "../../../components/Grid/GridContainer";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIds: null,
      pageContent: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
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
          {...rest}
        />
        <Parallax filter="dark">
          <div>
            <StaticImageCarousel />
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={6} justify="center">
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h1>Grandma's Kitchen</h1>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12}>
                  <br />
                  <br />
                </GridItem>
                <GridItem xs={1}></GridItem>
                <GridItem xs={6}>
                  <h5 className={classes.description}>
                    Welcome to Grandma's Kitchen.
                  </h5>
                  <br />
                  <h5>
                    Feel free to sign in & browse all of the public groups &
                    cookbooks. This website is still under development so be
                    sure to check back often to see what's new.
                  </h5>
                  <br />
                  <h5>
                    Feel free to create new groups & recipes! I hope you enjoy &
                    what I've created.
                  </h5>
                  <br />
                  <h5>
                    If you should run into any errors feel free to contact me
                    <a href="mailto:william@grandmaskitchen.app">here</a>
                  </h5>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(HomePage);
