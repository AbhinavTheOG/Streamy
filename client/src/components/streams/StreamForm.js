import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="OFF" />
        {this.renderError(meta)}
      </div>
    );

    //this is another way of doing this.

    // return (
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
    // );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  //handle submit does the prevent default automaticaly passes the event
  render() {
    return (
      //name is mandatory field here
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} // this is how we handle on submit with redux form. "this.onSubmit" is referencing the method onSubmit
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

//if we return an empty object from validate the redux form assumes that everything is okay.
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "StreamForm",
  validate
})(StreamForm);

// we can use this too.
// export default connect() (reduxForm({
//   form: "streamCreate",
//   validate
// })(StreamCreate));
