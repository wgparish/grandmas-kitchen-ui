import {
    mrAuto,
    mlAuto,
    cardTitle
} from "../../material-kit-pro-react.jsx";

const pricingStyle = {
    mrAuto,
    mlAuto,
    cardTitle,
    cardTitleWhite: {
        ...cardTitle,
        color: "#fff!important",
        "& small": {
            color: "rgba(255,255,255,0.8)!important"
        }
    },
    cardTitleBlack: {
        ...cardTitle,
        color: "#000!important",
        "& small": {
            color: "rgba(0,0,0,0.8)!important"
        }
    },
    textCenter: {
        textAlign: "center"
    },
    pricingSection: {
        padding: "80px 0px"
    },
    textInfo: {
        color: "#00bcd4!important"
    }
};

export default pricingStyle;
