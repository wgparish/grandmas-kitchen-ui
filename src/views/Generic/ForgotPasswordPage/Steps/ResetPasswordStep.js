import WizardStep from "../../../../components/Wizard/WizardStep";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import React from "react";
import forgotPasswordObject from "./ForgotPasswordObject";
import Icon from "@material-ui/core/Icon";


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

class ResetPasswordStep extends WizardStep {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordState: "",
        };
    }

    sendState() {
        return this.state;
    }

    render() {
        const { classes } = this.props;

        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12}>
                    <h4 className={classes.infoText}>
                        Enter your new password
                    </h4>
                </GridItem>

                <GridItem xs={12} sm={6}>
                    <CustomInput
                        labelText={(<span> Password <small>(required)</small></span>)}
                        id="password"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            onChange: event => {
                                // this.change(event, "password", "password");
                                forgotPasswordObject.password = event.target.value;
                            },
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    className={classes.inputAdornment}
                                >
                                    <Icon className={classes.inputIconsColor}>
                                        lock_outline
                                    </Icon>
                                </InputAdornment>
                            ),
                            type: "password"
                        }}
                    />
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(style)(ResetPasswordStep);
