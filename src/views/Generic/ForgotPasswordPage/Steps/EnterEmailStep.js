import WizardStep from "../../../../components/Wizard/WizardStep";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import React from "react";
import {Email} from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import withStyles from "@material-ui/core/styles/withStyles";
import UserController from "../../../../api/UserController";
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

class EnterEmailStep extends WizardStep {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailState: "",
            emailSent: false,
        };
    }

    sendState() {
        if(!forgotPasswordObject.sentEmail) {
            UserController.forgotPassword(this.state.email)
                .then(() => {
                    this.setState({emailSent: true})
                    forgotPasswordObject.email = this.state.email;
                    forgotPasswordObject.sentEmail = true;
                    console.log("sent email");
                })
                .catch((err) => console.log("Something dun fucked up" + err))
        }
        return this.state;
    }

    verifyEmail(value) {
        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(value);

    }

    change(event, stateName, type, stateNameEqualTo) {
        switch (type) {
            case "email":
                if (this.verifyEmail(event.target.value)) {
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

    /**
     * Change functionality
     * @returns {boolean}
     */
    isValidated() {
        return true;
    }

    render() {
        const { classes, validationErrors } = this.props;

        let emailAddressError = validationErrors.filter(validationError => validationError.includes("Email Address"));
        let emailAddressErrorExists = emailAddressError.length > 0;

        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12}>
                    <h4 className={classes.infoText}>
                        Enter your email, so we can find your account
                    </h4>
                </GridItem>

                <GridItem xs={12} sm={6}>
                    <CustomInput
                    success={this.state.emailState === "success" && !emailAddressErrorExists}
                    error={this.state.emailState === "error" || emailAddressErrorExists}
                    labelText={
                        emailAddressErrorExists ?
                            (<span>{emailAddressError[0]}</span>) :
                            (<span>Email (required)</span>)
                    }
                    id="email"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => {
                            this.change(event, "email", "email");
                        },
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                className={classes.inputAdornment}
                            >
                                <Email className={classes.inputAdornmentIcon}/>
                            </InputAdornment>
                        ),
                        type: "email"
                    }}
                />
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(style)(EnterEmailStep);
