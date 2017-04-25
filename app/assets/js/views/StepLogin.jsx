import { reduxForm, Field } from "redux-form";
import renderInput from "../fields/renderInput";
import validate from "../fields/validate";


const StepLogin = props => {
  const { handleSubmit, pristine, submitting, valid } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="panel-body">
        <Field
          autofocus={true}
          component={renderInput}
          label="Email"
          name="email"
          type="email"
        />
        <Field
          component={renderInput}
          label="Password"
          name="password"
          type="password"
        />
        <Field
          component={renderInput}
          label="Confirm Password"
          name="password_match"
          type="password"
        />
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
      </div>
    </form>
  );
};


export default reduxForm({
  destroyOnUnmount: false,
  form: "signup",
  initialValues: { sex: "male" },
  validate,
})(StepLogin);
