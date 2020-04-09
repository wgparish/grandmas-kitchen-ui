import ReactGA from "react-ga";

export function initializeGA() {
    ReactGA.initialize('UA-163264264-1', {
        debug: true
    });
}

export const GoogleAnalytics = ReactGA;
