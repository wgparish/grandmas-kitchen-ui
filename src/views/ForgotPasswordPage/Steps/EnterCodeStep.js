import WizardStep from "../../../components/Wizard/WizardStep";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Apps} from "@material-ui/icons";
import React from "react";
import UserController from "../../../api/UserController";
import forgotPasswordObject from "./ForgotPasswordObject";

const style = {
    infoText: {
        fontWeight: "300",
        margin: "10px 0 30px",
        textAlign: "center"
    },
    inputAdornmentIcon: {
        color: "#555"
    },
    inputAdornment: {
        position: "relative"
    }
};

class EnterCodeStep extends WizardStep {
    constructor(props) {
        super(props);

        this.state = {
            code: "",
            codeState: "",
            codeSent: false
        };
    }

    sendState() {
        if(!forgotPasswordObject.sentCode && forgotPasswordObject.email !== "") {
            UserController.pinCheck(forgotPasswordObject.email, this.state.code)
                .then((response) => {
                    forgotPasswordObject.code = this.state.code;
                    forgotPasswordObject.sentCode = true;
                    forgotPasswordObject.userId = response.data.id;
                })
                .catch((err) => console.log("Something dun fucked up." + err))
        }
        return this.state;
    }


    // function that verifies if a string has a given length or not
    verifyLength(value, length) {
        return value.length === length;
    }

    change(event, stateName, type, stateNameEqualTo) {
        switch (type) {
            case "length":
                if (this.verifyLength(event.target.value, 6)) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            default:
                break;
        }
        this.setState({ [stateName]: event.target.value });
    }

    render() {
        const { classes } = this.props;

        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12}>
                    <h4 className={classes.infoText}>
                        Enter the code you received in your email
                    </h4>
                </GridItem>

                <GridItem xs={12} sm={6}>
                    <CustomInput
                        labelText={(<span>Enter Code: </span>)}
                        id="code"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            onChange: event => {
                                this.change(event, "code", "length");
                            },
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    className={classes.inputAdornment}
                                >
                                    <Apps className={classes.inputAdornmentIcon}/>
                                </InputAdornment>
                            ),
                            type: "text"
                        }}
                    />
                </GridItem>
            </GridContainer>
        );
    }

}

export default withStyles(style)(EnterCodeStep);
