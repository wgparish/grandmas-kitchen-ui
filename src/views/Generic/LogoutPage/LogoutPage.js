import UserController from "../../../api/UserController";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import image from "../../../assets/img/bread.jpg";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Fade from "@material-ui/core/Fade";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import React from "react";
import PageFooter from "../../../components/Footer/PageFooter";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../../assets/jss/material-kit-pro-react/views/loginPageStyle";
import {initializeGA} from "../../../constants/utils";
import * as ReactGA from "react-ga";
import Button from "../../../components/CustomButtons/Button";

class LogoutPage extends React.Component {
    constructor(props) {
        super(props);
        initializeGA();
        this.state = {
            logoutSuccess: false
        }
    }

    componentWillMount() {
        UserController.logout()
            .then(() => this.handleLogoutSuccess())
            .catch(() => this.handleLogoutSuccess());
    }

    handleLogoutSuccess() {
        this.setState({logoutSuccess: true});
        ReactGA.event({
            category: 'User',
            action: 'Logged out'
        });
    }

    render() {

        const {classes, ...rest} = this.props;

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
                                        <CardHeader color="danger" className={classes.cardHeader}>
                                            {
                                                !this.state.logoutSuccess &&
                                                <h4>Error</h4>
                                            }
                                            {
                                                this.state.logoutSuccess &&
                                                <h4>Successfully Logged out.</h4>
                                            }
                                        </CardHeader>

                                        {
                                            !this.state.logoutSuccess &&
                                            <p className={classes.divider}>Please Try again</p>
                                        }
                                        {
                                            this.state.logoutSuccess &&

                                            <Button type={"submit"} simple color="danger" onClick={() => {
                                                this.props.history.push("/login");
                                            }}>
                                                Click Here to Login again
                                            </Button>
                                        }
                                    </Card>
                                </Fade>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
                <PageFooter/>
            </div>
        );
    }
}

export default withStyles(loginPageStyle)(LogoutPage);
