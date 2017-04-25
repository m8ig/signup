import classNames from "classnames";

const renderDate = fields => (
  <div className={classNames("form-group", "step-info__date", { "has-error": fields.year.meta.touched && (fields.date.meta.error || fields.year.meta.error) })}>
    <h5 className="help-block">
      {fields.label}
      {fields.year.meta.touched && fields.date.meta.error && <span> {fields.date.meta.error}</span>}
    </h5>
    <div className="input-group">
      <input
        {...fields.date.input}
        autoFocus={true}
        className="form-control"
        placeholder="DD"
        type="number"
      />
      <input
        {...fields.month.input}
        className="form-control"
        placeholder="MM"
        type="number"
      />
      <input
        {...fields.year.input}
        className="form-control"
        placeholder="YYYY"
        type="number"
      />
    </div>
    {fields.year.meta.touched && fields.year.meta.error && <span className="help-block">{fields.year.meta.error}</span>}
  </div>
);

export default renderDate;
