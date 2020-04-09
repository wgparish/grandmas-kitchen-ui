import { container } from "../../assets/jss/material-kit-pro-react.jsx";
import { tooltip } from "../../assets/jss/material-dashboard-pro-react.jsx";
import hoverCardStyle from "../../assets/jss/material-dashboard-pro-react/hoverCardStyle.jsx";

const sitePerformanceCardStyle = theme => ({
  container,
  ...hoverCardStyle,
  tooltip,
  table: {
    border: "1px solid black",
    tableLayout: "fixed"
  },
  tableRow: {
    border: "1px solid black"
  },
  tableCell: {
    border: "1px solid black"
  }
});

export default sitePerformanceCardStyle;
