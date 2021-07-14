import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "../CustomButtons/Button.jsx";
import Card from "../Card/Card.jsx";

import wizardStyle from "../../assets/jss/material-dashboard-pro-react/components/wizardStyle.jsx";

class Wizard extends React.Component {
  constructor(props) {
    super(props);

    const { defaultStepName } = props;

    let width;
    if (this.props.steps.length === 1) {
      width = "100%";
    } else {
      if (window.innerWidth < 600) {
        if (this.props.steps.length !== 3) {
          width = "50%";
        } else {
          width = 100 / 3 + "%";
        }
      } else {
        if (this.props.steps.length === 2) {
          width = "50%";
        } else {
          width = 100 / 3 + "%";
        }
      }
    }



    let stepIndex = 0;
    if(typeof defaultStepName !== "undefined" && defaultStepName !== null) {
      for(let step = 0; step < this.props.steps.length; step++) {
        if(this.props.steps[step].stepName === defaultStepName) {
          stepIndex = step;
          break;
        }
      }
    }

    if(typeof this.props.isCheckout !== 'undefined' ? this.props.isCheckout : false){
      console.log("Is Checkout Wizard");
      console.log("Account: ", this.props.account);
      this.props.steps[0].account = this.props.account;
    }

    this.state = {
      currentStep: stepIndex, //0 by default, unless a "starting page" was specified
      color: this.props.color,
      nextButton: this.props.steps.length > 1 && stepIndex < this.props.steps.length-1, //show next button if more than 1 step exists AND *not* starting on the last page
      previousButton: stepIndex > 0, //if *not* starting on the first step, show the previous button
      finishButton: this.props.steps.length === 1 || stepIndex === this.props.steps.length-1, //show "finish" button if only 1 page exists OR we are starting on the last page
      width: width,
      movingTabStyle: {
        transition: "transform 0s"
      },
      allStates: {},
      ignoreValidation: typeof this.props.ignoreValidation !== 'undefined' ? this.props.ignoreValidation : false,
      apiKey: typeof this.props.apiKey !== 'undefined' ? this.props.apiKey : null,
      account: typeof this.props.account !== 'undefined' ? this.props.account : null,
      isCheckout: typeof this.props.isCheckout !== 'undefined' ? this.props.isCheckout : false,
      subscription: typeof this.props.subscription !== 'undefined' ? this.props.subscription : null
    };

    this.navigationStepChange = this.navigationStepChange.bind(this);
    this.refreshAnimation = this.refreshAnimation.bind(this);
    this.previousButtonClick = this.previousButtonClick.bind(this);
    this.nextButtonClick = this.nextButtonClick.bind(this);
    this.previousButtonClick = this.previousButtonClick.bind(this);
    this.finishButtonClick = this.finishButtonClick.bind(this);
    this.updateWidth = this.updateWidth.bind(this)
  }
  componentDidMount() {
    this.refreshAnimation(0);
    window.addEventListener("resize", this.updateWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { defaultStepName } = nextProps;

    let stepIndex = 0;
    if(typeof defaultStepName !== "undefined" && defaultStepName !== null) {
      for(let step = 0; step < this.props.steps.length; step++) {
        if(this.props.steps[step].stepName === defaultStepName) {
          stepIndex = step;
          break;
        }
      }
    }

    this.navigationStepChange(stepIndex);
  }

  updateWidth() {
    this.refreshAnimation(this.state.currentStep);
  }
  navigationStepChange(key) {
    let nextKey = key;
    if (this.props.steps) {
      let validationState = true;
      if (key > this.state.currentStep) {
        let allStatesUpdated = this.props.steps
          .filter(step => typeof this[step.stepId] !== "undefined")
          .filter(step => typeof this[step.stepId].sendState !== "undefined")
          .map(step => {
            return {
              [step.stepId]: this[step.stepId].sendState()
            };
          });
        this.setState({
          allStates: allStatesUpdated
        });
      }
      if (validationState) {
        this.setState({
          currentStep: nextKey,
          nextButton: this.props.steps.length > nextKey + 1,
          previousButton: nextKey > 0,
          finishButton: this.props.steps.length === nextKey + 1
        });
        this.refreshAnimation(key);
      }
    }
  }
  nextButtonClick() {
    if (
      (this.props.validate &&
        ((typeof this[this.props.steps[this.state.currentStep].stepId] !== 'undefined' &&
            this[this.props.steps[this.state.currentStep].stepId].isValidated !== undefined &&
            this[this.props.steps[this.state.currentStep].stepId].isValidated()) ||
          this[this.props.steps[this.state.currentStep].stepId].isValidated === undefined
        )) ||
      this.props.validate === undefined
    ) {
      let key = this.state.currentStep + 1;
      let allStatesUpdated = this.props.steps
        .filter(step => typeof this[step.stepId] !== "undefined")
        .filter(step => typeof this[step.stepId].sendState !== "undefined")
        .map(step => {
          // if(typeof this[step.stepId].isValidated !== "undefined" && this[step.stepId].isValidated() === false) {
          //   key = this.state.currentStep;
          // }

          return {
            [step.stepId]: this[step.stepId].sendState()
          };
        });

      this.setState({
        allStates: allStatesUpdated,
        currentStep: key,
        nextButton: this.props.steps.length > key + 1,
        previousButton: key > 0,
        finishButton: this.props.steps.length === key + 1
      });
      this.refreshAnimation(key);
    }
  }
  previousButtonClick() {
    let key = this.state.currentStep - 1;
    let allStatesUpdated = this.props.steps
      .filter(step => typeof this[step.stepId] !== "undefined")
      .filter(step => typeof this[step.stepId].sendState !== "undefined")
      .map(step => {
        // if(typeof this[step.stepId].isValidated !== "undefined" && this[step.stepId].isValidated() === false) {
        //   key = this.state.currentStep;
        // }

        return {
          [step.stepId]: this[step.stepId].sendState()
        };
      });

    if (key >= 0) {
      this.setState({
        allSteps: allStatesUpdated,
        currentStep: key,
        nextButton: this.props.steps.length > key + 1,
        previousButton: key > 0,
        finishButton: this.props.steps.length === key + 1
      });
      this.refreshAnimation(key);
    }
  }
  finishButtonClick() {
    if (
      this.props.validate &&
      ((this[this.props.steps[this.state.currentStep].stepId].isValidated !==
        undefined &&
        this[this.props.steps[this.state.currentStep].stepId].isValidated()) ||
        this[this.props.steps[this.state.currentStep].stepId].isValidated ===
        undefined) &&
      this.props.finishButtonClick !== undefined
    ) {
      if(this.state.isCheckout){
        this.previousButtonClick()
      }
      this.props.finishButtonClick(this.state.allStates, this.props.steps);
    }
  }
  refreshAnimation(index) {
    var total = this.props.steps.length;
    var li_width = 100 / total;
    var total_steps = this.props.steps.length;
    var move_distance = this.refs.wizard.children[0].offsetWidth / total_steps;
    var index_temp = index;
    var vertical_level = 0;

    var mobile_device = window.innerWidth < 600 && total > 3;

    if (mobile_device) {
      move_distance = this.refs.wizard.children[0].offsetWidth / 2;
      index_temp = index % 2;
      li_width = 50;
    }

    this.setState({ width: li_width + "%" });

    var step_width = move_distance;
    move_distance = move_distance * index_temp;

    var current = index + 1;

    if (current === 1 || (mobile_device === true && index % 2 === 0)) {
      move_distance -= 8;
    } else if (
      current === total_steps ||
      (mobile_device === true && index % 2 === 1)
    ) {
      move_distance += 8;
    }

    if (mobile_device) {
      vertical_level = parseInt(index / 2, 10);
      vertical_level = vertical_level * 38;
    }
    var movingTabStyle = {
      width: step_width,
      transform:
        "translate3d(" + move_distance + "px, " + vertical_level + "px, 0)",
      transition: "all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)"
    };
    this.setState({ movingTabStyle: movingTabStyle });
  }
  render() {
    const { classes, title, subtitle, color, steps} = this.props;
    return (
      <div className={classes.wizardContainer} ref="wizard">
        <Card className={classes.card}>
          <div className={classes.wizardHeader}>
            <h3 className={classes.title}>{title}</h3>
            <h5 className={classes.subtitle}>{subtitle}</h5>
          </div>
          <div className={classes.wizardNavigation}>
            <ul className={classes.nav}>
              {typeof steps !== 'undefined' && steps.map((prop, key) => {
                return (
                  <li
                    className={classes.steps}
                    key={key}
                    style={{ width: this.state.width }}
                  >
                    <a
                      className={classes.stepsAnchor}
                      onClick={() => this.navigationStepChange(key)}
                    >
                      {prop.stepName}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div
              className={classes.movingTab + " " + classes[color]}
              style={this.state.movingTabStyle}
            >
              {typeof steps[this.state.currentStep] !== 'undefined' && steps[this.state.currentStep].stepName}
            </div>
          </div>
          <div className={classes.content}>
            {steps.map((prop, key) => {
              const stepContentClasses = cx({
                [classes.stepContentActive]: this.state.currentStep === key,
                [classes.stepContent]: this.state.currentStep !== key
              });
              return (
                <div className={stepContentClasses} key={key}>
                  <prop.stepComponent
                    innerRef={node => (this[prop.stepId] = node)}
                    allStates={this.state.allStates}
                    stepId={prop.stepId}
                    account={prop.account}
                    validationErrors={typeof this.props.validationErrors === "undefined" ? [] : this.props.validationErrors}
                    apiKey={typeof this.props.validationErrors === "undefined" ? "" : this.props.apiKey}
                    subscription={prop.subscription}
                  />
                </div>
              );
            })}
          </div>
          <div className={classes.footer}>
            <div className={classes.left}>
              {this.state.previousButton ? (
                <Button
                  className={this.props.previousButtonClasses}
                  onClick={() => this.previousButtonClick()}
                >
                  {this.props.previousButtonText}
                </Button>
              ) : null}
            </div>
            <div className={classes.right}>
              {this.state.nextButton ? (
                <Button
                  color="rose"
                  className={this.props.nextButtonClasses}
                  onClick={() => this.nextButtonClick()}
                >
                  {this.props.nextButtonText}
                </Button>
              ) : null}
              {this.state.finishButton && !this.state.ignoreValidation ? (
                <Button
                  color="rose"
                  className={this.finishButtonClasses}
                  onClick={() => this.finishButtonClick()}
                >
                  {this.props.finishButtonText}
                </Button>
              ) : null}
            </div>
            <div className={classes.clearfix} />
          </div>
        </Card>
      </div>
    );
  }
}

Wizard.defaultProps = {
  color: "rose",
  title: "Here should go your title",
  subtitle: "And this would be your subtitle",
  previousButtonText: "Previous",
  previousButtonClasses: "",
  nextButtonClasses: "",
  nextButtonText: "Next",
  finishButtonClasses: "",
  finishButtonText: "Finish"
};

Wizard.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      stepName: PropTypes.string.isRequired,
      stepComponent: PropTypes.func.isRequired,
      stepId: PropTypes.string.isRequired,
      account: PropTypes.Object
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  previousButtonClasses: PropTypes.string,
  previousButtonText: PropTypes.string,
  nextButtonClasses: PropTypes.string,
  nextButtonText: PropTypes.string,
  finishButtonClasses: PropTypes.string,
  finishButtonText: PropTypes.string,
  finishButtonClick: PropTypes.func,
  validate: PropTypes.bool,
  validationErrors: PropTypes.arrayOf(PropTypes.string),
  defaultStepName: PropTypes.string
};

export default withStyles(wizardStyle)(Wizard);
