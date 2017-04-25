import classNames from "classnames";

const renderInput = ({ input, label, type, autofocus=false, meta: { touched, error } }) => (
  <div className={classNames("form-group", "text-left", { "has-error": touched && error })}>
    <label
      className="help-block"
      htmlFor={input.name}>
      {label}
      {touched && error && <span> {error}</span>}
    </label>
    <input
      {...input}
      autoFocus={autofocus}
      className="form-control form-control-simple"
      type={type}
    />
  </div>
);

export default renderInput;
