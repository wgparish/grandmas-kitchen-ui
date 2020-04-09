import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import PageFooter from "../../components/Footer/PageFooter.jsx";
import StaticImageCarousel from "../../components/ImageCarousel/StaticImageCarousel";
import CardHeader from "../../components/Card/CardHeader";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import aboutUsStyle from "../../assets/jss/material-kit-pro-react/views/aboutUsStyle";


class AboutPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageIds: null,
            pageContent: ""
        }
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
                <Parallax filter="dark" >
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                top: "25%"
                            }}>
                        </div>
                        <StaticImageCarousel/>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.contactContent}>
                        <div className={classes.container}>
                            <div className={classes.sections}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <CardHeader color="danger" className={classes.cardHeader}>
                                            <h3>About Us</h3>
                                        </CardHeader>
                                    </GridItem>
                                </GridContainer>
                                <GridContainer justify="center">
                                    <GridItem xs={12} sm={12} md={8}>
                                        <h5 className={classes.description}>
                                            I've wanted to build this Recipe Sharing website for years. I've just never
                                            had the know how. UNTIL NOW. I've been working on this over the past year &
                                            a half. Hope you all enjoy.
                                        </h5>
                                    </GridItem>
                                </GridContainer>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter/>
            </div>
        );
    }
}
export default withStyles(aboutUsStyle)(AboutPage);
