import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import SelectionIcon from "@material-ui/icons/PlaylistAddCheck";
import AccountIcon from "@material-ui/icons/AccountBox";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function TabContainer(props) {
  return (
    <Typography component={"div"} style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

function LinkTab(props) {
  const { linkTo } = props;
  return <Tab component={Link} to={linkTo} {...props} />;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class AccountTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position={"static"} color={"default"}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant={"fullWidth"}
            indicatorColor={"primary"}
            textColor={"primary"}
            centered
          >
            <LinkTab label={"Dashboard"} icon={<DashboardIcon />} linkTo={"/account/dashboard"}/>
            <LinkTab label={"Sports Selections"} icon={<SelectionIcon />} linkTo={"/account/selections"}/>
            <LinkTab label={"View Subscriptions"} icon={<SubscriptionIcon />} linkTo={"/account/subscriptions"}/>
            <LinkTab label={"Purchase History"} icon={<HistoryIcon />} linkTo={"/account/receipts"}/>
            <LinkTab label={"Update Profile"} icon={<AccountIcon />} linkTo={"/account/edit"}/>
          </Tabs>
        </AppBar>

      </div>
    );

  }
}

AccountTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountTabs)
