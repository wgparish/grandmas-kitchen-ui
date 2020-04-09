import React from "react";
// react component for creating beautiful carousel
// @material-ui/coßre components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Slider from "react-slick";
import staticCarouselStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/staticCarouselStyle";
import image from "../../assets/img/cherry_pie.jpg";

function StaticImageCarousel(props) {
    const { classes } = props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 15000,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: false,
        variableWidth: true,
        draggable: false,
        swipe: false,
        touchMove: false,
        arrows: false,
        touchThreshold: 0
    };

    return (
        <Slider className={classes.slickContainer} {...settings}>
            <div className={classes.slide}>
                <img src={image} alt={""} />
            </div>
        </Slider>
    );
}

export default withStyles(staticCarouselStyle)(StaticImageCarousel);
