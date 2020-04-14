import React from "react";
// react component for creating beautiful carousel
// @material-ui/coßre components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Slider from "react-slick";
import carouselStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";
import apiBaseURL from "../../api/BaseUrl";

function ImageCarousel(props) {
    const {classes, imageIds} = props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 15000,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true,
        variableWidth: true,
        draggable: false,
        swipe: false,
        touchMove: false,
        arrows: false,
        touchThreshold: 0
    };

    if (imageIds.length === 1) {
        return (
            <img src={apiBaseURL + "/content/image?imageId=" + imageIds[0]} alt={""}/>
        );
    } else {
        return (
            <Slider className={classes.slickContainer} {...settings}>
                {
                    imageIds.map(imageId => {
                        return (
                            <div className={classes.slide}>
                                <img src={apiBaseURL + "/content/image?imageId=" + imageId} alt={""}/>
                            </div>
                        );
                    })
                }
            </Slider>
        );
    }
}

export default withStyles(carouselStyle)(ImageCarousel);
