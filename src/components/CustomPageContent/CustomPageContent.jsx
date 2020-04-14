import React from "react";
import WebpageControllerApi from "../../api/WebpageControllerApi";
import base64 from "base-64";
import ProductSection from "../PageHtmlConverter/ProductSection";

class CustomPageContent extends React.Component {
    constructor(props) {
        super(props);

        const {pageName} = props;

        this.state = {
            pageName: typeof pageName !== "undefined" && pageName !== null ? pageName : null,
            missionContent: null
        };

        this.loadMissionContent();
    }

    componentWillMount() {
        this.loadMissionContent();
    }

    loadMissionContent() {
        let pageName = this.state.pageName;
        if (pageName === null)
            return;

        WebpageControllerApi.content(pageName)
            .then(response => {
                let page = response.data;
                let anonymousContentDecoded = base64.decode(page.anonymousContent);
                let anonymousContentJson = JSON.parse(anonymousContentDecoded);
                let missionContent = anonymousContentJson.topContent;
                this.setState({missionContent: missionContent});
            })
            .catch(error => this.setState({missionContent: null}));
    }

    render() {
        const {pageName, missionContent} = this.state;
        const {classes} = this.props;

        if (pageName === null || missionContent === null)
            return (<div/>);

        return (
            <ProductSection missionContent={missionContent}/>
        );
    }
}

export default CustomPageContent;
