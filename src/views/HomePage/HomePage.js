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
import componentsStyle from "../../assets/jss/material-kit-pro-react/views/componentsStyle";


class HomePage extends React.Component {
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
        const {classes, ...rest} = this.props;
        return (
            <div>
                <Header
                    color="white"
                    brand="Grandma's Kitchen"
                    links={<HeaderLinks dropdownHoverColor="info"/>}
                    fixed
                    {...rest}
                />
                <Parallax filter="dark">
                    <div>
                        <StaticImageCarousel/>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.contactContent}>
                        <div className={classes.container}>
                        </div>
                    </div>
                </div>
                <PageFooter/>
            </div>
        );
    }
}

export default withStyles(componentsStyle)(HomePage);
