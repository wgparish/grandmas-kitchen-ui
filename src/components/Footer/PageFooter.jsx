import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {Link} from "react-router-dom";
// @material-ui/icons
// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Button from "../CustomButtons/Button.jsx";
import Footer from "./Footer.jsx";

import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx";

class PageFooter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sportNames: []
        };
    }

    componentDidMount() {
    }

    render() {
        const {classes} = this.props;

        return (
            <Footer
                theme="white"
                content={
                    <div>
                        <ul className={classes.socialButtons}>
                            <li>
                                <Button justIcon simple href="#pablo" color="twitter">
                                    <i className="fab fa-twitter"/>
                                </Button>
                            </li>
                            <li>
                                <Button justIcon simple href="#pablo"
                                        color="facebook">
                                    <i className="fab fa-facebook-square"/>
                                </Button>
                            </li>
                            <li>
                                <Button justIcon simple href="#pablo" color="youtube">
                                    <i className="fab fa-youtube"/>
                                </Button>
                            </li>
                            <li>
                                <Button justIcon simple href="#pablo" color="instagram">
                                    <i className="fab fa-instagram"/>
                                </Button>
                            </li>
                        </ul>

                        <div
                            className={classNames(classes.pullCenter, classes.copyRight)}
                        >
                            Copyright &copy; {1900 + new Date().getYear()}{" "}
                            <a href="https://www.rishall.com">Wyllian, LLC</a> All
                            Rights Reserved.
                        </div>
                    </div>
                }
            >
                <div className={classes.footer}>
                    <GridContainer>
                        <GridItem xs={12} sm={2} md={2}/>
                        <GridItem xs={12} sm={4} md={4}>
                            <h4>About</h4>
                            <ul className={classes.linksVertical}>
                                <li>
                                    <Link to="/about" className={classes.navLink}>
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className={classes.navLink}>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </GridItem>
                        <GridItem xs={12} sm={2} md={2}/>
                        <GridItem xs={12} sm={4} md={4}>
                            <h4>Legal</h4>
                            <ul className={classes.linksVertical}>
                                <li>
                                    <Link to="/terms" className={classes.navLink}>
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy" className={classes.navLink}>
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </GridItem>
                        <GridItem xs={12} sm={2} md={2}/>
                    </GridContainer>
                </div>
            </Footer>
        );
    }
}

export default withStyles(styles)(PageFooter);
