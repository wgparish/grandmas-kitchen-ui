import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import InfoArea from "../../components/InfoArea/InfoArea.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import PageFooter from "../../components/Footer/PageFooter.jsx";

import contactUsStyle from "../../assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";
import {Email} from "@material-ui/icons";
import StaticImageCarousel from "../../components/ImageCarousel/StaticImageCarousel";
import CardHeader from "../../components/Card/CardHeader";
import PublicController from "../../api/PublicController";

class ContactUsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageIds: null,
            finished: false,
            inputName: "",
            inputEmail: "",
            inputPhone: "",
            inputTechnical: false,
            inputMessage: "",
            inputNameError: null,
            inputEmailError: null,
            inputPhoneError: null,
            inputMessageError: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }

    sendSupportRequest() {
        PublicController.submitContactUsEmail(
            this.state.inputName,
            this.state.inputEmail,
            this.state.inputPhone,
            this.state.inputMessage)
            .then(() => this.setState({finished: true}))
            .catch(error => {
                if (typeof error !== "undefined" && typeof error.response !== "undefined" && error.response.status === 400) {
                    let errors = error.response.data;
                    let inputNameErrorOpt = errors.filter(errorStr => errorStr.includes("Full Name"));
                    let inputEmailErrorOpt = errors.filter(errorStr => errorStr.includes("Email Address"));
                    let inputPhoneErrorOpt = errors.filter(errorStr => errorStr.includes("Phone Number"));
                    let inputMessageErrorOpt = errors.filter(errorStr => errorStr.includes("Support Message"));
                    let inputNameError = inputNameErrorOpt.length > 0 ? inputNameErrorOpt[0] : null;
                    let inputEmailError = inputEmailErrorOpt.length > 0 ? inputEmailErrorOpt[0] : null;
                    let inputPhoneError = inputPhoneErrorOpt.length > 0 ? inputPhoneErrorOpt[0] : null;
                    let inputMessageError = inputMessageErrorOpt.length > 0 ? inputMessageErrorOpt[0] : null;
                    this.setState({
                        finished: false,
                        inputNameError: inputNameError,
                        inputEmailError: inputEmailError,
                        inputPhoneError: inputPhoneError,
                        inputMessageError: inputMessageError
                    });
                }
            });
    }

    render() {
        const {classes, ...rest} = this.props;

        return (
            <div>
                <Header
                    color="white"
                    brand="Grandma's Kitchen"
                    links={<HeaderLinks dropdownHoverColor="info"/>}
                    fixed
                    changeColorOnScroll={{
                        height: 300,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax filter="dark">
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                top: "25%"
                            }}>
                        </div>
                        <StaticImageCarousel/>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.contactContent}>
                        <div className={classes.container}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CardHeader color="danger" className={classes.cardHeader}>
                                        <h2>Contact Us</h2>
                                    </CardHeader>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem md={6} sm={6}>
                                    <p>
                                        Feel Free to contact me with any questions, comments, or concerns you may have.
                                        <br/>
                                    </p>
                                    <form>
                                        <CustomInput
                                            labelText={"Your Name" + (this.state.inputNameError !== null ? " (" + this.state.inputNameError + "):" : ":")}
                                            id="name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: event => {
                                                    this.setState({inputName: event.target.value})
                                                },
                                                value: this.state.inputName
                                            }}
                                        />
                                        <CustomInput
                                            labelText={"Email Address" + (this.state.inputEmailError !== null ? " (" + this.state.inputEmailError + "):" : ":")}
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: event => {
                                                    this.setState({inputEmail: event.target.value})
                                                },
                                                value: this.state.inputEmail
                                            }}
                                        />
                                        <CustomInput
                                            labelText={"Phone Number" + (this.state.inputPhoneError !== null ? " (" + this.state.inputPhoneError + "):" : ":")}
                                            id="phone"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: event => {
                                                    this.setState({inputPhone: event.target.value})
                                                },
                                                value: this.state.inputPhone
                                            }}
                                        />
                                        <CustomInput
                                            labelText={"Your Message" + (this.state.inputMessageError !== null ? " (" + this.state.inputMessageError + "):" : ":")}
                                            id="message"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                multiline: true,
                                                rows: 6,
                                                onChange: event => {
                                                    this.setState({inputMessage: event.target.value})
                                                },
                                                value: this.state.inputMessage
                                            }}
                                        />
                                        {
                                            this.state.finished !== true &&
                                            <div className={classes.textCenter}>
                                                <Button color="danger" round onClick={evt => this.sendSupportRequest()}>
                                                    Contact us
                                                </Button>
                                            </div>
                                        }
                                        {
                                            this.state.finished === true &&
                                            <div className={classes.textCenter}>
                                                <p>We have received your feedback and will respond to you as soon as
                                                    possible.</p>
                                            </div>
                                        }
                                    </form>
                                </GridItem>

                                <GridItem md={4} sm={4} className={classes.mlAuto}>
                                    <InfoArea
                                        className={classes.info}
                                        title="Find us at the office"
                                        description={
                                            <div>
                                                <p>
                                                    123 Random St North,
                                                    <br/>
                                                    Middle, Nowhere 12345
                                                </p>
                                            </div>
                                        }
                                        icon={PinDrop}
                                        iconColor="danger"
                                    />
                                    <InfoArea
                                        className={classes.info}
                                        title="Give us a ring"
                                        description={
                                            <p>
                                                +1 678 - 977 - 4383 <br/>
                                                Mon - Sat, 8:00 am - 5:00 pm
                                            </p>
                                        }
                                        icon={Phone}
                                        iconColor="danger"
                                    />
                                    <InfoArea
                                        className={classes.info}
                                        title="Send us an email"
                                        description={
                                            <p>
                                                <a href={"mailto:william@wyllian.com"}>william@wyllian.com</a>

                                            </p>
                                        }
                                        icon={Email}
                                        iconColor="danger"
                                    />
                                    <InfoArea
                                        className={classes.info}
                                        title="Legal Information"
                                        description={
                                            <p>
                                                Wyllian, LLC. <br/>
                                            </p>
                                        }
                                        icon={BusinessCenter}
                                        iconColor="danger"
                                    />
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                <PageFooter/>
            </div>
        );
    }
}

export default withStyles(contactUsStyle)(ContactUsPage);
