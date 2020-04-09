import React from "react";
// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Moment from "moment";
import sitePerformanceCardStyle from "./SitePerformanceCardStyle";
import { TableBody } from "@material-ui/core";
import PublicPicksController from "../../api/PublicPicksController";

/**
 * This card is intended to obtain and display pick performance metrics for a given time-frame for a given sport name.
 *
 * "sportName" is the name of the sport to get the performance metrics for.
 *
 * "global" means to gather picks performance metrics from the beginning of time to the end of time.
 * This means requesting pick performance metrics for every pick ever made.
 *
 * If global is false or undefined or null, then fromTimestamp and toTimestamp must be provided for this component
 * to function properly. These are timestamps which indicate the span of time to obtain site metrics for.
 *
 * TODO: Add the userEditable property WIP
 * If the userEditable property is true, then this component will render with calendars to allow the user to change the
 * fromTimestamp and toTimestamp. If userEditable is set, then when the user can change the to and from timestamps.
 * If userEditable is true and global is true, then the global site performance metrics will be shown until the user
 * changes the time range for picks performance.
 * If userEditable is true and a toTimestamp and/or fromTimestamp is provided, then those timestamps will be overridden
 * when the user changes the time scope.
 */
class SitePerformanceCard extends React.Component {
  constructor(props) {
    super(props);
    const {
      global,
      fromTimestamp,
      toTimestamp,
      userEditable,
      sportName
    } = this.props;

    this.global = global === true; //using === true helps filter and normalizes null/wrong type/undefined cases
    this.fromTimestamp = this.global ? 0 : fromTimestamp;
    this.toTimestamp = this.global ? -1 : toTimestamp;
    this.userEditable = userEditable === true;
    this.sportName = sportName;

    this.state = {
      performanceData: null
    };

    this.loadSitePerformance();
  }

  loadSitePerformance() {
    PublicPicksController.performance(this.fromTimestamp, this.toTimestamp, this.sportName)
      .then(response => this.setState({performanceData: response.data}))
      .catch(error => this.setState({performanceData: null}));
  }

  static formatDate(timestamp){
    return Moment(timestamp).format("LL");
  }

  render() {
    const { classes } = this.props;

    //TODO: Implement the property for allowing users to set and change the time span for the performance metrics

    if(this.state.performanceData === null) {
      return (
        <Table className={classes.table}>
          <TableBody>
            {/* This row spans the entire top of the table and has the table name */}
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell} colSpan={2}>
                {this.sportName} Pick Statistics
              </TableCell>
            </TableRow>

            {/* This row spans the entire top of the table and has the from and to dates */}
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell} colSpan={2}>Loading Performance Statistics...</TableCell>
            </TableRow>

            {/* This row shows the total number of picks created in one cell, and the number of upcoming picks in another cell */}
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell}>Total Picks: Loading...</TableCell>
              <TableCell className={classes.tableCell}>Upcoming Picks: Loading...</TableCell>
            </TableRow>

            {/* This row shows the number of successful picks and the success percentage. IF the success percentage is "NaN" then the number of unsuccessful picks is displayed instead */}
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell}>Successful Picks: Loading...</TableCell>
              <TableCell className={classes.tableCell}>Success Rate: Loading...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    }

    let performanceData = this.state.performanceData;

    return (
      <Table className={classes.table}>
        <TableBody>
          {/* This row spans the entire top of the table and has the table name */}
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableCell} colSpan={2}>
              {this.sportName} Pick Statistics
            </TableCell>
          </TableRow>

          {/* This row spans the entire top of the table and has the from and to dates */}
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableCell} colSpan={2}>
              {SitePerformanceCard.formatDate(performanceData.fromDate)} To {SitePerformanceCard.formatDate(performanceData.toDate)}
            </TableCell>
          </TableRow>

          {/* This row shows the total number of picks created in one cell, and the number of upcoming picks in another cell */}
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableCell}>
              Total Picks: {performanceData.totalNumPicks}
            </TableCell>
            <TableCell className={classes.tableCell}>
              Upcoming Picks: {performanceData.numUndecidedPicks}
            </TableCell>
          </TableRow>

          {/* This row shows the number of successful picks and the success percentage. IF the success percentage is "NaN" then the number of unsuccessful picks is displayed instead */}
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableCell}>
              Successful Picks: {performanceData.numWinPicks}
            </TableCell>
            <TableCell className={classes.tableCell}>
              {performanceData.successRatio === "NaN" ? "Unsuccessful Picks: " + performanceData.numLosePicks : "Success Rate: " + performanceData.successRatio}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(sitePerformanceCardStyle)(SitePerformanceCard);
