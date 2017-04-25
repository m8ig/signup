import { reduxForm, Field } from "redux-form";
import validate from "../fields/validate";


const StepDone = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="panel-body">
        <div className="form-group">
          <i className="fa fa-check-circle fa-fw step-done__icon"></i>
        </div>
        <div className="form-group">
          <button
            className="btn btn-white btn-lg"
            type="submit"
          >
            Go to Dashboard
            <i className="fa fa-arrow-left fa-fw"></i>
          </button>
        </div>
      </div>
    </form>
  );
};


export default reduxForm({
  form: "signup",
  initialValues: { sex: "male" },
  validate,
})(StepDone);
