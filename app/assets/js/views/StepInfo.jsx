import { reduxForm, Field, Fields } from "redux-form";
import renderDate from "../fields/renderDate";
import renderRadio from "../fields/renderRadio";
import validate from "../fields/validate";


const StepInfo = props => {
  const { handleSubmit, pristine, submitting, valid } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="panel-body">
        <Fields
          component={renderDate}
          label="Date Of Bitrth"
          names={ ["date", "month", "year"] }
        />
        <div className="form-group step-info__gender">
          <h5>Gender</h5>
          <div className="btn-group btn-group-justified" role="group" data-toggle="buttons">
            <Field name="sex" type="radio" component={renderRadio} label="Male" value="male" />
            <Field name="sex" type="radio" component={renderRadio} label="Female" value="female" />
            <Field name="sex" type="radio" component={renderRadio} label="Unspecified" value="unspecified" />
          </div>
        </div>
        <div className="form-group">
          <h5>Where did you hear about us?</h5>
          <Field
            className="selectpicker form-control"
            component="select"
            name="how_hear_about_us"
          >
            <option className="bs-title-option"></option>
            <option>College’s Course Information Unit</option>
            <option>Community Centre/Library</option>
            <option>Email from the College</option>
            <option>Text message from the College</option>
            <option>Employer</option>
            <option>Event (at school or in College)</option>
            <option>Facebook/Twitter</option>
          </Field>
        </div>
      </div>
      <div className="panel-footer">
        <button
          className="btn btn-link btn-lg"
          disabled={pristine || submitting || !valid}
          type="submit"
        >
          Next
          <i className="fa fa-arrow-left fa-fw"></i>
        </button>
        <button
          className="btn btn-back btn-lg"
          onClick={props.onBack}
          type="button"
        >
          Back
        </button>
      </div>
    </form>
  );
};


export default reduxForm({
  destroyOnUnmount: false,
  form: "signup",
  initialValues: { sex: "male" },
  validate,
})(StepInfo);

