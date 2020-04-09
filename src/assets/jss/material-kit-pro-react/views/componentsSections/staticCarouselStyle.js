const staticCarouselStyle = {
    slickContainer: {
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        "&, & slide": {
        },
        "& slickTrack": {
            height: "100%",
        },
    },
    slickTrack: {
        height: "100%",
    },
    slide: {
        height: "100%",
        width: "100vw",
        overflow: "hidden",
        "& img": {
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            "-webkit-filter": "brightness(65%)",
            filter: "brightness(65%)"
        }
    }
};

export default staticCarouselStyle;
