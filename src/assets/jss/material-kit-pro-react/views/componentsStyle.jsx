import {
    container,
    main,
    mainRaised,
    title,
    section
} from "../../material-kit-pro-react.jsx";

const componentsStyle = {
    main,
    mainRaised,
    parallax: {
        height: "80vh",
        overflow: "hidden"
    },
    container: {
        ...container,
        zIndex: "2",
        position: "relative",
        //alignLeft: "true"
    },
    brand: {
        color: "#FFFFFF",
        textAlign: "center",
        "& h1": {
            fontSize: "4.2rem",
            fontWeight: "600",
            display: "inline-block",
            position: "relative"
        },
        "& h3": {
            fontSize: "1.313rem",
            maxWidth: "500px",
            margin: "10px auto 0"
        }
    },
    title: {
        ...title,
        color: "#FFFFFF !important"
    },
    link: {
        textDecoration: "none"
    },
    textCenter: {
        textAlign: "center"
    },
    proBadge: {
        position: "absolute",
        fontSize: "22px",
        textTransform: "uppercase",
        fontWeight: "bold",
        left: "-90px",
        bottom: "-350px",
        padding: "10px 18px",
        backgroundColor: "#fff",
        borderRadius: "3px",
        color: "#444",
        lineHeight: "22px",
        boxShadow: "0px 5px 5px -2px rgba(31,31,31,0.4)"
    },
    section: {
        ...section,
        padding: "70px 0px"
    },
    sectionGray: {
        background: "#e5e5e5"
    },
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right"
    },
    icon: {
        width: "18px",
        height: "18px",
        top: "3px",
        position: "relative"
    },
    "carousel-wrapper, carousel, carousel > .slider-wrapper, carousel > .slider-wrapper > .slider": {
        height: "100%",
        //height: "80vh",
        //zIndex: "3",
        //overflow: "hidden",
        //position: "relative",
        //backgroundPosition: "50%",
        //backgroundSize: "cover",
        //margin: "0",
        //padding: "0",
        //border: "0",
        //display: "flex",
        //alignItems: "center"
    },
    fullHeight: {
        height: "100%",
    },
    cardLink: {
        color: "inherit",
        textDecoration: "none"
    }

};

export default componentsStyle;
