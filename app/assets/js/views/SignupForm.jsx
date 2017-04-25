import StepLogin from "./StepLogin";
import StepInfo from "./StepInfo";
import StepDone from "./StepDone";


export default class SignupForm extends React.Component {
  render() {
    let step = this.props.step;

    return (
      <div>
        {step === 1 && <StepLogin onSubmit={this.props.onNextStep} />}
        {step === 2 && <StepInfo onBack={this.props.onPreviousStep} onSubmit={this.props.onNextStep} />}
        {step === 3 && <StepDone onSubmit={this.props.onSubmit} />}
      </div>
    );
  }
}
