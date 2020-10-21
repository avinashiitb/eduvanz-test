import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal} from 'react-bootstrap';
import { registerAction } from '../../actions/userActions';
import { setLoading } from '../../actions/loaderAction';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalVisible: false
    }
    this.submitUser = this.submitUser.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(setLoading(false));
  }
  handleClose() {
    // console.log("close modal")
    this.setState({ modalVisible: false });
  }
  submitUser(values) {
    // console.log("Values", values);
    this.setState({modalVisible: true});
    this.props.dispatch(setLoading(false));
    this.props.dispatch(registerAction(values));
  }
  render (){
    const SignupSchema = Yup.object().shape({
      name: Yup.string()
        .required('Name is required'),
      age: Yup.string()
        .required('Age is required'),
      dob: Yup.string()
        .required('DOB is required'),
      profession: Yup.string()
        .required('Profession is required'),
      locality: Yup.string()
        .required('Locality is required'),
      guest: Yup.number()
        .max(2, 'Max two guest allowed!')
        .required('OTP is Required')
        .required('No. of guest is required'),
      address: Yup.string()
        .required('Address is required'),
    });
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-items-center" style={{height: "100%"}}>
          <div className="col-md-7">
            <div className="card">

              {/* <div className="card-title">Register</div> */}
              <div className="card-body">
                <div className="d-flex justify-content-center mb-4"><h2>Meetup RSVP</h2></div>
                <Formik
                  initialValues={{}}
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
                            name="dob"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.dob}
                            className="form-control form-control-md"
                            placeholder="Enter D.O.B"
                            autoComplete="off"
                          />

                        </div>
                        {errors.dob && touched.dob && errors.dob}
                      </div>
                      <div className="col-md-6">
                        <div className="form-group label-floating" style={{marginRight: "0px"}}>
                            <Field
                              className="form-control nopadding-r"
                              component="select"
                              name="profession"
                              style={{width: "100%", border: "1px solid #9E9E9E", paddingLeft: "30px", height: "44px"}}
                              
                            >
                              <option defaultValue="">Select Profession</option>
                              <option value="student">Student</option>
                              <option value="Employed">Employed</option>

                            </Field>
                        </div>
                        {errors.profession && touched.profession && errors.profession}
                      </div>
                      <div className="col-md-6">
                        <div className="form-group" style={{marginRight: "0px"}}>
                          <Field
                            type="text"
                            name="locality"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.locality}
                            className="form-control form-control-md"
                            placeholder="Locality"
                            autoComplete="off"
                          />

                        </div>
                        {errors.locality && touched.locality && errors.locality}
                      </div>
                      <div className="col-md-6">
                        <div className="form-group" style={{marginRight: "0px"}}>
                          <Field
                            type="number"
                            name="guest"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.guest}
                            className="form-control form-control-md"
                            placeholder="Number of guest"
                            autoComplete="off"
                          />

                        </div>
                        {errors.guest && touched.guest && errors.guest}
                      </div>
                      <div className="col-md-12">
                        <div className="form-group" style={{marginRight: "0px"}}>
                          <textarea
                            multiline={true}
                            numberOfLines={10}
                            type="text"
                            name="address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                            className="form-control form-control-md"
                            placeholder="Enter your address"
                            autoComplete="off"
                          />

                        </div>
                        {errors.address && touched.address && errors.address}
                        <button type="submit" className="btn btn-lg btn-block btn-primary  text-uppercase font-weight-semibold" disabled={isSubmitting}>
                          Register
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>  
        <Modal
          show={this.state.modalVisible}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center align-items-center" style={{height: "250px"}}>
              <div>
                <FontAwesomeIcon style={{fontSize: "100px"}} icon={['far', 'check-circle']} />
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            
          </Modal.Footer> */}
        </Modal>     
      </div>
      
    );

  }
}

export default RegisterForm;
