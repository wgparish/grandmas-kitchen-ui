import {
    container,
    description,
    cardTitle,
} from "../../material-kit-pro-react.jsx";

const loginPageStyle = {
    description,
    container: {
        ...container,
        // zIndex: "4",
        // [theme.breakpoints.down("sm")]: {
        //   paddingBottom: "100px"
        // }
        zIndex: "2",
        position: "relative",
        paddingTop: "20vh",
        color: "#FFFFFF"
    },
    // cardHidden: {
    //   opacity: "0",
    //   transform: "translate3d(0, -60px, 0)"
    // },
    pageHeader: {
        color: "#fff",
        border: "0",
        // height: "100%",
        height: "auto",
        margin: "0",
        // display: "flex!important",
        display: "inherit",
        // padding: "120px 0",
        padding: "0",
        position: "relative",
        minHeight: "100vh",
        alignItems: "center",
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)"
        },
        "&:before,&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""'
        },
        "& footer li a,& footer li a:hover,& footer li a:active": {
            color: "#FFFFFF"
        },
        "& footer": {
            position: "absolute",
            bottom: "0",
            width: "100%",
        }
    },
    form: {
        margin: "0"
    },
    cardHeader: {
        width: "auto",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-40px",
        padding: "20px 0",
        marginBottom: "15px"
    },
    cardFooter: {
        paddingTop: "0rem",
        border: "0",
        borderRadius: "6px",
        justifyContent: "center !important"
    },
    cardTitle: {
        ...cardTitle,
        color: "#FFFFFF !important"
    },
    socialLine: {
        marginTop: "1rem",
        textAlign: "center",
        padding: "0"
    },
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center"
    },
    inputIconsColor: {
        color: "#495057"
    },
    textCenter: {
        textAlign: "center"
    },
    iconButtons: {
        marginRight: "3px !important",
        marginLeft: "3px !important"
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
        display: "block",
        "&,& *,& *:hover,& *:focus": {
            color: "#FFFFFF !important"
        }
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right",
        "&,& *,& *:hover,& *:focus": {
            color: "#FFFFFF !important"
        }
    },
    icon: {
        width: "18px",
        height: "18px",
        top: "3px",
        position: "relative"
    },
    footer: {
        position: "absolute",
        width: "100%",
        background: "transparent",
        bottom: "0",
        //color: "#fff",
        zIndex: "2"
    }
};

export default loginPageStyle;
