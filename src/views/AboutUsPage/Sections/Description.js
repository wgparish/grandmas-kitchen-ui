import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CardHeader from "../../../components/Card/CardHeader";
import React from "react";
import basicsStyle from "../../../assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle";
import withStyles from "@material-ui/core/styles/withStyles";

class Description extends React.Component{

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.sections}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <CardHeader color="danger" className={classes.cardHeader}>
                            <h3>About Us</h3>
                        </CardHeader>
                    </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h5 className={classes.description}>
                            I've wanted to build this Recipe Sharing website for years. I've just never
                            had the know how. UNTIL NOW. I've been working on this over the past year &
                            a half. Hope you all enjoy.
                        </h5>
                    </GridItem>
                </GridContainer>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
export default withStyles(basicsStyle)(Description);
