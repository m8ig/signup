import ProgressBar from "./views/ProgressBar";
import SignupForm from "./views/SignupForm";


export default class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      title: "Signup",
      width: 33.33
    };

    this.checkTitle = this.checkTitle.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handlePreviousStep = this.handlePreviousStep.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  checkTitle() {
    this.setState({ title: (this.state.step == this.props.steps) ? "Thank you!" : "Signup" })
  }
  handleNextStep() {
    this.setState({ step: this.state.step + 1, width: Math.round(this.state.width + (1 / this.props.steps * 100)) }, () => {
      $(".selectpicker").selectpicker();
      this.checkTitle();
    });
  }
  handlePreviousStep() {
    this.setState({ step: this.state.step - 1, width: Math.round(this.state.width - (1 / this.props.steps * 100)) }, () => {
      $(".selectpicker").selectpicker();
      this.checkTitle();
    });
  }
  handleFormSubmit(values) {
    const output = {};
    output.user_data = {
      email             : values.email,
      password          : values.password,
      date_of_birth     : new Date(values.year, values.month - 1, values.date).getTime(),
      sex               : values.sex,
      how_hear_about_us : values.how_hear_about_us || null
    }

    console.log(JSON.stringify(output, null, 2));
  }
  render() {
    return (
      <div className="signup">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.title}</h3>
          </div>
          <ProgressBar width={this.state.width} />
          <SignupForm
            onNextStep={this.handleNextStep}
            onPreviousStep={this.handlePreviousStep}
            onSubmit={this.handleFormSubmit}
            step={this.state.step}
          />
        </div>
      </div>
    );
  }
}
