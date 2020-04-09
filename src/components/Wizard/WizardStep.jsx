import * as React from "react";

class WizardStep extends React.Component {
  constructor(props) {
    super(props);
    let { stepId, account, apiKey, subscription } = props;
    this.stepId = stepId;
    this.account = account;
    this.apiKey = apiKey;
    this.subscription = subscription;
  }
}

export default WizardStep;