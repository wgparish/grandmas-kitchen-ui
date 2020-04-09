import {
  container,
  title,
  main,
  mainRaised,
  mlAuto,
  description
} from "../../material-kit-pro-react.jsx";

const contactUsStyle = {
  main,
  mainRaised,
  title,
  mlAuto,
  description,
  parallax: {
    height: "90vh",
    overflow: "hidden"
  },
  container: {
    ...container,
    zIndex: "2",
    position: "relative"
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
  contactContent: {
    paddingBottom: "40px",
    paddingTop: "40px"
  },
  info: {
    paddingBottom: "10px",
    paddingTop: 0
  },
  textCenter: {
    textAlign: "center !important"
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
  }
};

export default contactUsStyle;
