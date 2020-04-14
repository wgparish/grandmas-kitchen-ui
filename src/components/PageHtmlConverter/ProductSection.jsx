import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";

import productStyle from "../../assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
    render() {
        const {classes, missionContent} = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={11} sm={11} md={8}>
                        <div dangerouslySetInnerHTML={{__html: missionContent}}>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(productStyle)(ProductSection);
