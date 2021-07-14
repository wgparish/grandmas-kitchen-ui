import registerPageStyle from "../../../assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import UserController from "../../../api/UserController";
import {Redirect} from "react-router-dom";
import React from "react";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import Header from "../../../components/Header/Header";
import PageFooter from "../../../components/Footer/PageFooter";
import GridContainer from "../../../components/Grid/GridContainer";
import Fade from "@material-ui/core/Fade";
import GridItem from "../../../components/Grid/GridItem";
import Wizard from "../../../components/Wizard/Wizard";
import image from "../../../assets/img/bread.jpg";
import EnterEmailStep from "./Steps/EnterEmailStep";
import EnterCodeStep from "./Steps/EnterCodeStep";
import ResetPasswordStep from "./Steps/ResetPasswordStep";
import forgotPasswordObject from "./Steps/ForgotPasswordObject";

class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: false,
            cardAnimation: "",
            passwordResetSuccess: false,
            passwordResetFailed: false,
            serverError: false,
            imageId: null,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;

        this.loadUserLoggedIn();
    }

    loadUserLoggedIn() {
        UserController.getAccount()
            .then(() => this.setState({ userLoggedIn: true }))
            .catch(() => this.setState({ userLoggedIn: false }));
    }

    handleFinishedButtonClick(allStates) {
        UserController.resetPassword({
            userId: forgotPasswordObject.userId,
            email: forgotPasswordObject.email,
            password: forgotPasswordObject.password
        })
            .then(() => {
                this.setState({passwordResetSuccess: true})
            })
            .catch((err) => console("Something dun fucked up." + err))
        // if(allStates[1].account.passwordConfirm !== allStates[1].account.password) {
        //     this.setState({
        //         registrationSuccess: false,
        //         registrationFailed: true,
        //         registrationErrors: ["Passwords must match"],
        //         serverError: false
        //     });
        //     return;
        // }
    }

    render() {
        const { classes, ...rest } = this.props;

        //if user is already logged in, redirect them to home page
        if (this.state.userLoggedIn) {
            return (
                <Redirect to="/"/>
            );
        }

        if (this.state.passwordResetSuccess && !this.state.passwordResetFailed) {
            return (
                <Redirect to={"/PasswordResetSuccessPage"}/>
            );
        }

        return (
            <div>
                <Header
                    absolute
                    color="transparent"
                    brand="Grandmas Kitchen"
                    links={<HeaderLinks dropdownHoverColor="info"/>}
                    {...rest}
                />
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <Fade in={true}>
                                <GridItem xs={12} sm={12} md={9}>
                                    <Wizard
                                        validate
                                        color={"danger"}
                                        steps={[
                                            { stepName: "Enter Email", stepComponent: EnterEmailStep, stepId: "email" },
                                            { stepName: "Enter Code", stepComponent: EnterCodeStep, stepId: "code" },
                                            { stepName: "Reset Password", stepComponent: ResetPasswordStep, stepId: "password" }
                                        ]}
                                        title="Reset your Password"
                                        subtitle="The below steps will allow you to reset your password"
                                        finishButtonClick={(allStates) => {
                                            this.handleFinishedButtonClick(allStates);
                                        }}
                                    />
                                </GridItem>
                            </Fade>
                        </GridContainer>
                    </div>
                </div>
                <PageFooter/>
            </div>
        );
    }
}

export default withStyles(registerPageStyle)(ForgotPasswordPage);
