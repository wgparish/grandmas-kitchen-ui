import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import cardHeaderStyle from "../../assets/jss/material-kit-pro-react/components/cardHeaderStyle.jsx";

// @material-ui/icons

function CardHeader({...props}) {
    const {
        classes,
        className,
        children,
        color,
        plain,
        image,
        contact,
        signup,
        noShadow,
        icon,
        text,
        ...rest
    } = props;
    const cardHeaderClasses = classNames({
        [classes.cardHeader]: true,
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderImage]: image,
        [classes.cardHeaderContact]: contact,
        [classes.cardHeaderSignup]: signup,
        [classes.noShadow]: noShadow,
        [classes.cardHeaderIcon]: icon,
        [classes.cardHeaderText]: text,
        [className]: className !== undefined
    });
    return (
        <div className={cardHeaderClasses} {...rest}>
            {children}
        </div>
    );
}

CardHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    plain: PropTypes.bool,
    image: PropTypes.bool,
    contact: PropTypes.bool,
    signup: PropTypes.bool,
    noShadow: PropTypes.bool,
    icon: PropTypes.bool,
    text: PropTypes.bool
};

export default withStyles(cardHeaderStyle)(CardHeader);
