/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import footerStyle from "../../assets/jss/material-kit-pro-react/components/footerStyle.jsx";

// @material-ui/icons

function Footer(props) {
    const {children, content, classes, theme, big, className} = props;
    const themeType =
        !(theme === "transparent" || theme === undefined);
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes[theme]]: themeType,
        [classes.big]: big || children !== undefined,
        [className]: className !== undefined
    });
    const aClasses = classNames({
        [classes.a]: true
    });

    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                {children !== undefined ? (
                    <div>
                        <div className={classes.content}>{children}</div>
                        <hr/>
                    </div>
                ) : (
                    " "
                )}
                {content}
                <div className={classes.clearFix}/>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.oneOf(["dark", "white", "transparent"]),
    big: PropTypes.bool,
    content: PropTypes.node.isRequired
};

export default withStyles(footerStyle)(Footer);
