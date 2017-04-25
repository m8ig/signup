import classNames from "classnames";

const renderRadio = ({ input, label, type }) => (
  <label className={classNames("btn", "btn-transparent", { "active": input.checked })}>
    <input
      {...input}
      type={type}
    />
    {label}
  </label>
);

export default renderRadio;
