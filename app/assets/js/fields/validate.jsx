const validate = values => {
  const errors = {};

  // validate email
  if (!values.email) {
    errors.email = "is required";
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "is invalid";
  }

  // validate password
  if (!values.password) {
    errors.password = "is required";
  }
  else if (values.password.length < 6) {
    errors.password = "is too short";
  }

  // validate password_match
  if (!values.password_match) {
    errors.password_match = "is required";
  }
  else if (values.password_match !== values.password) {
    errors.password_match = "doesn't match";
  }

  // validate date
  if (!values.date) {
    errors.date = "is required";
  }
  else if (values.date < 1 || values.date > 31) {
    errors.date = "is invalid";
  }

  // validate month
  if (!values.month) {
    errors.date = "is required";
  }
  else if (values.month < 1 || values.month > 12) {
    errors.date = "is invalid";
  }

  // validate year
  if (!values.year) {
    errors.date = "is required";
  }
  else if (values.year.length != 4) {
    errors.date = "is invalid";
  }

  // validate the whole date
  if (values.date && values.month && values.year && !errors.date) {
    const today = Date.now();
    const birth = new Date(values.year, values.month - 1, values.date);
    const diff  = Math.floor((today - birth.getTime()) / (1000 * 60 * 60 * 24 * 365));

    if (!birth || (birth.getMonth() + 1) != values.month) {
      errors.date = "is invalid";
    }
    else if (diff < 18) {
      errors.year = "You should be older than 18 Years";
    }
  }

  return errors;
}

export default validate;
