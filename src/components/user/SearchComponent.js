import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Modal} from 'react-bootstrap';
import ReactTable from "react-table";  
import "react-table/react-table.css";  
import { registerAction } from '../../actions/userActions';
import { setLoading } from '../../actions/loaderAction';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      result: [],
      modelState: false,
      info: []
    }
    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.getInfoButton = this.getInfoButton.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  getInfoButton (data) {
    console.log("Button", data);
    return (
      <button type="button" className="btn btn-info btn-sm" onClick={() => {this.handleOpen(data)}}>
        <span className="infoButtonText" >
          More Info&nbsp;&nbsp;&nbsp;
        </span>
      </button>
    );

  }
  componentDidMount() {
    this.props.dispatch(setLoading(false));
  }
  handleClose() {
    this.setState({ modelState: false});
  }
  handleOpen(data) {
    console.log("click", data);
    this.setState({ 
      modelState: true,
      info: data
    });
    // console.log(this.state.modelState);
  }
  handleOnSearch(string, cached) {
    const { users } = this.props;
    const{ List } = users;

    console.log("List", string);
    const data = [];
    List.forEach(user => {
      const patt = new RegExp(string);

      const name = user.userData.name;
      const nameMatch = patt.test(name);

      const locality = user.userData.locality;
      const localityMatch = patt.test(locality);

      if(nameMatch || localityMatch) {
        data.push(user.userData);
      }
    }); 
    this.setState({result: data});
  }
  handleOnSelect = item => {
    // the item selected
    // console.log("item", item);

  }
  render (){
   const { result, info } = this.state;
   const columns = [{  
     Header: 'Name',  
     accessor: 'name'  
     },{  
     Header: 'locality',  
     accessor: 'locality'  
     }, {
      id: "info",
      Header: "Info",
      accessor: (data) => {
        return this.getInfoButton(data);
      }
    }
    ];  
    return (
      <div className="container" style={{marginTop: "20px"}}>
          <div className="col-md-8">
            <div style={{width: "100%"}}>
              <ReactSearchAutocomplete
                items={this.state.data}
                onSearch={this.handleOnSearch}
                onSelect={this.handleOnSelect}
                autoFocus
              />
            </div>
            <div className="card">

              {/* <div className="card-title">Register</div> */}
              <div className="card-body">
                <ReactTable  
                  data={result}  
                  columns={columns}  
                  defaultPageSize = {10}  
              />  
              </div>
            </div>
          </div>
          <Modal
            show={this.state.modelState}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-md-6">Name: {info.name} </div><div className="col-md-6">Age: {info.age} </div>
                <div className="col-md-6">D.O.B: {info.dob} </div><div className="col-md-6">No. of guest: {info.guest} </div>
                <div className="col-md-6">Profession: {info.profession} </div><div className="col-md-6">Locality: {info.locality} </div>
                <div className="col-md-12">Address: {info.address} </div>
              </div>
            </Modal.Body>
            {/* <Modal.Footer>
              
            </Modal.Footer> */}
          </Modal>    
        </div>        
    );

  }
}

export default SearchComponent;
