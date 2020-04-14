import {
    container,
} from "./material-kit-pro-react.jsx";
import {
    successColor,
    tooltip,
    cardTitle
} from "./material-dashboard-pro-react.jsx";
import hoverCardStyle from "./material-dashboard-pro-react/hoverCardStyle.jsx";

const drawerWidth = 200;

const userPageStyle = theme => ({
    container,
    ...hoverCardStyle,
    tooltip,
    selectedTableRow: {
        opacity: "0.85",
        backfaceVisibility: "hidden",
        color: "limegreen",
        '&:hover': {
            color: "darkgreen",
            opacity: "0.4"
        }
    },
    hoverableTableRow: {
        opacity: "1",
        backfaceVisibility: "hidden",
        '&:hover': {
            color: "#000000",
            opacity: "0.4"
        }
    },
    imageModalBody: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },
    cardTitle: {
        ...cardTitle,
        marginTop: "0px",
        marginBottom: "3px",
        color: "#FFFFFF"
    },
    cardIconTitle: {
        ...cardTitle,
        marginTop: "15px",
        marginBottom: "0px"
    },
    cardProductTitle: {
        ...cardTitle,
        marginTop: "0px",
        marginBottom: "3px",
        textAlign: "center"
    },
    cardCategory: {
        color: "#999999",
        fontSize: "14px",
        paddingTop: "10px",
        marginBottom: "0",
        marginTop: "0",
        margin: "0"
    },
    cardProductDesciprion: {
        textAlign: "center",
        color: "#999999"
    },
    successText: {
        color: successColor
    },
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: "#444"
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center"
    },
    textCenter: {
        textAlign: "center"
    },
    iconButtons: {
        marginRight: "3px !important",
        marginLeft: "3px !important"
    }
});

export default userPageStyle;
