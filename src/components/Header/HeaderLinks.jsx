/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import {AccountCircle} from "@material-ui/icons";
// core components

import headerLinksStyle from "../../assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";
import {ListItemIcon} from "@material-ui/core";

function HeaderLinks({...props}) {

    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    const smoothScroll = (e, target) => {
        if (window.location.pathname === "/sections") {
            var isMobile = navigator.userAgent.match(
                /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
            );
            //Ignore if on mobile
            if (!isMobile) {
                e.preventDefault();
                var targetScroll = document.getElementById(target);
                scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
            }
        }
    };
    const scrollGo = (element, to, duration) => {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function () {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };
    var onClickSections = {};

    const {classes, userLoggedIn} = props;

    return (
        <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
                <Link to="/#" className={classes.navLink}>
                    Home
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to="/about" className={classes.navLink}>
                    About Us
                </Link>
            </ListItem>
            {
                userLoggedIn &&
                <ListItem className={classes.listItem}>
                    <Link to="/account" className={classes.navLink}>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                    </Link>
                </ListItem>
            }
            {
                !userLoggedIn &&
                <ListItem className={classes.listItem}>
                    <Link to="/login" className={classes.navLink}>
                        Login
                    </Link>
                </ListItem>
            }
            {
                !userLoggedIn &&
                <ListItem className={classes.listItem}>
                    <Link to="/register" className={classes.navLink}>
                        Register
                    </Link>
                </ListItem>
            }
        </List>
    );
}

HeaderLinks.defaultProps = {
    hoverColor: "primary"
};

HeaderLinks.propTypes = {
    dropdownHoverColor: PropTypes.oneOf([
        "dark",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
