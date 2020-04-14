import {container} from "../../../material-kit-pro-react.jsx";

const carouselStyle = {

    slickContainer: {
        position: "relative",
        height: "100%",
        width: "100%",
        // margin: "0",
        // padding: "0",
        display: "flex",
        "&, & slide": {
            // height: "100%",
            // width: "auto",
        },
        "& slickTrack": {
            height: "100%",
        },
    },
    slickTrack: {
        height: "100%",
    },
    slide: {
        // left: "50%",
        // marginLeft: "-50vw",
        height: "100%",
        width: "100vw",
        overflow: "hidden",
        //backgroundSize: "cover !important",
        "& img": {
            overflow: "hidden",
            // left: "50%",
            // marginLeft: "-50vw",
            height: "100vh",
            width: "100vw",
            "-webkit-filter": "brightness(50%)",
            filter: "brightness(50%)"
        }
    }

};

export default carouselStyle;
