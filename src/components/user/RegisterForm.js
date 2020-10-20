import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { userLogin } from '../../actions/userActions';
import { setLoading } from '../../actions/loaderAction';

class RegisterForm extends Component {

  submitUser(mobile) {
    this.props.dispatch(setLoading(true));
    // sendOTP(mobile).then(
    //   storeObj => {
    //     console.log(storeObj);
    //     this.props.dispatch(userLogin(storeObj));
    //     this.props.dispatch(setLoading(false));
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }
  render (){
    // const phoneRegExp = "/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/";
    const SignupSchema = Yup.object().shape({
      mobile: Yup.string()
        .min(10, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Phone number is Required')
    });
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-4">
          <h1 className="font-weight-bold">Register</h1>
          <p className="text-dark mb-3">
            Enter your Mobile Number.
          </p>
               
        <Formik
          initialValues={{ mobile: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Formik", values);
            this.submitUser(values);
            this.props.resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form className="row">
              <div className="col-md-6">
                <div className="form-group" style={{marginRight: "0px"}}>
                  <Field
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className="form-control form-control-md"
                    placeholder="Enter Full Name"
                    autoComplete="off"
                  />

                </div>
                {errors.name && touched.name && errors.name}
              </div>
              <div className="col-md-6">
                <div className="form-group" style={{marginRight: "0px"}}>
                  <Field
                    type="text"
                    name="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    className="form-control form-control-md"
                    placeholder="Enter your age"
                    autoComplete="off"
                  />

                </div>
                {errors.age && touched.age && errors.age}
              </div>
              <div className="col-md-6">
                <div className="form-group" style={{marginRight: "0px"}}>
                  <Field
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className="form-control form-control-md"
                    placeholder="Enter Full Name"
                    autoComplete="off"
                  />

                </div>
                {errors.mobile && touched.mobile && errors.mobile}
              </div>
              <button type="submit" className="btn btn-lg btn-block btn-primary  text-uppercase font-weight-semibold" disabled={false}>
                Next Step
              </button>

            </Form>
          )}
        </Formik>
        </div>
      </div>
    );

  }
}

export default RegisterForm;
