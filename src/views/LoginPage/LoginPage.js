import React from "react";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";

import image from "../../assets/img/bread.jpg";
import {initializeGA} from "../../constants/utils";
import {NavLink, Redirect} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";
import Fade from "@material-ui/core/Fade";
import PageFooter from "../../components/Footer/PageFooter";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimation: "",
            email: null,
            password: null,
            firstName: null,
            lastName: null,
            showLogin: true,
            errorText: null,
            processing: false,
            userLoggedIn: false,
            imageId: null
        };
        initializeGA();
    }

    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        setTimeout(
            function () {
                this.setState({cardAnimation: ""});
            }.bind(this),
            700
        );
        //this.setState({userLoggedIn: false});
        this.loadUserLoggedIn();
        // this.loadBackgroundImageId();
    }

    loadUserLoggedIn() {
        this.setState({userLoggedIn: false})
        // UserAccountController.ping()
        //     .then(response => this.setState({ userLoggedIn: true }))
        //     .catch(error => this.setState({ userLoggedIn: false }));
    }

    handleLoginClick() {
        //If you want to add a login-wait animation/change then do so below
        let email = this.state.email;
        let password = this.state.password;
        console.log("Email: " + email);
        console.log("Password: " + password);
        // UserAccountController.login(email, password)
        //     .then(response => this.handleLoginServerSuccessResponse(response))
        //     .catch(error => this.handleLoginServerError(error));
    }

    // handleLoginServerError(error) {
    //     console.log(error);
    //     if (error != null && error.response != null && error.response.status != null) {
    //         let statusCode = error.response.status;
    //         this.setState({userLoggedIn: false});
    //         if (statusCode === 400) {
    //             let responseBody = typeof error.response.data === "string" ? [error.response.data] : error.response.data; //should be array of strings
    //             this.setState({errorText: responseBody});
    //         } else if (statusCode === 403) { //user already logged in somehow
    //             this.props.history.push("/");
    //         } else {
    //             this.setState({errorText: "We are experiencing technical difficulties. Please try again, or contact support if this persists."});
    //         }
    //     }
    // }

    // handleLoginServerSuccessResponse(response) {
    //     ReactGA.event({
    //         category: 'User',
    //         action: 'Logged In',
    //         label: this.state.email.split('@')[0]
    //     });
    //     this.setState({userLoggedIn: true});
    // }

    render() {
        const {classes, ...rest} = this.props;

        if (!this.state.userLoggedIn) {
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
                        }}
                    >
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={8} md={7}>
                                    <Fade in={true}>
                                        <Card className={classes[this.state.cardAnimation]}>
                                            <form className={classes.form} onSubmit={e => {
                                                e.preventDefault();
                                                this.handleLoginClick();
                                            }}>
                                                <CardHeader color="danger" className={classes.cardHeader}>
                                                    <h4>Login</h4>
                                                </CardHeader>
                                                <p className={classes.divider}>Please login below</p>
                                                <CardBody>
                                                    <CustomInput
                                                        labelText="Email..."
                                                        id="email"
                                                        formControlProps={{
                                                            fullWidth: true,
                                                            onChange: (evt) => {
                                                                if (evt.target === null || evt.target.value === null) {
                                                                    this.setState({email: ""});
                                                                } else {
                                                                    this.setState({email: evt.target.value});
                                                                }

                                                            }
                                                        }}
                                                        inputProps={{
                                                            type: "email",
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <Email className={classes.inputIconsColor}/>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                    />
                                                    <CustomInput
                                                        labelText="Password"
                                                        id="password"
                                                        formControlProps={{
                                                            fullWidth: true,
                                                            onChange: (evt) => {
                                                                if (evt.target === null || evt.target.value === null) {
                                                                    this.setState({password: ""});
                                                                } else {
                                                                    this.setState({password: evt.target.value});
                                                                }
                                                            }
                                                        }}
                                                        inputProps={{
                                                            type: "password",
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <Icon className={classes.inputIconsColor}>
                                                                        lock_outline
                                                                    </Icon>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                    />
                                                    {
                                                        this.state.errorText != null &&
                                                        <React.Fragment>
                                                            <h5>
                                                                {this.state.errorText}
                                                            </h5>
                                                            <NavLink to={"/forgotMyPassword"}>
                                                                Forgot your password?
                                                            </NavLink>
                                                        </React.Fragment>
                                                    }
                                                </CardBody>
                                                <CardFooter className={classes.cardFooter}>
                                                    <Button type={"submit"} simple color="danger"
                                                            size="lg">Login</Button>
                                                </CardFooter>
                                            </form>
                                        </Card>
                                    </Fade>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                    <PageFooter/>
                </div>
            );
        } else {
            return (
                <Redirect to="/"/>
            );
        }
    }
}

export default withStyles(loginPageStyle)(LoginPage);

// const useStyles = makeStyles(styles);
//
// export default function LoginPage(props) {
//   const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
//   setTimeout(function() {
//     setCardAnimation("");
//   }, 700);
//   const classes = useStyles();
//   const { ...rest } = props;
//   return (
//     <div>
//       <Header
//         absolute
//         color="transparent"
//         brand="Material Kit React"
//         rightLinks={<HeaderLinks />}
//         {...rest}
//       />
//       <div
//         className={classes.pageHeader}
//         style={{
//           backgroundImage: "url(" + image + ")",
//           backgroundSize: "cover",
//           backgroundPosition: "top center"
//         }}
//       >
//         <div className={classes.container}>
//           <GridContainer justify="center">
//             <GridItem xs={12} sm={12} md={4}>
//               <Card className={classes[cardAnimaton]}>
//                 <form className={classes.form}>
//                   <CardHeader color="primary" className={classes.cardHeader}>
//                     <h2>Login</h2>
//                   </CardHeader>
//                   <p className={classes.divider}>Sign In Below</p>
//                   <CardBody>
//                     <CustomInput
//                       labelText="Email..."
//                       id="email"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                       inputProps={{
//                         type: "email",
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <Email className={classes.inputIconsColor} />
//                           </InputAdornment>
//                         )
//                       }}
//                     />
//                     <CustomInput
//                       labelText="Password"
//                       id="pass"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                       inputProps={{
//                         type: "password",
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <Icon className={classes.inputIconsColor}>
//                               lock_outline
//                             </Icon>
//                           </InputAdornment>
//                         ),
//                         autoComplete: "off"
//                       }}
//                     />
//                   </CardBody>
//                   <p className={classes.divider}>Or Sign Up Here</p>
//                   <CardFooter className={classes.cardFooter}>
//                     <Button simple color="primary" size="lg">
//                       Get started
//                     </Button>
//                   </CardFooter>
//                 </form>
//               </Card>
//             </GridItem>
//           </GridContainer>
//         </div>
//         <Footer whiteFont />
//       </div>
//     </div>
//   );
// }
