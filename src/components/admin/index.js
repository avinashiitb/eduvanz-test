import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GraphComponent from './graph';
import ReactTable from "react-table";  
import "react-table/react-table.css";  
import { setLoading } from '../../actions/loaderAction';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      ageMap: [],
      professionData: [],
      modelState: false,
      info: [],
      locality: [],
      groupSize: []
    }
    this.dataFilter = this.dataFilter.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch(setLoading(false));
    this.dataFilter();
  }
  dataFilter() {
    const { users } = this.props;
    const{ List } = users;
    
    let age13_18 = 0; let age18_25 = 0; let age25 = 0; let student = 0; let employed = 0;
    let avg = 0;
    const localityArray = [];
    List.forEach(user => {
      const { userData } = user;
      if( userData.age >= 13 && userData.age <= 18 ) {
        age13_18++;
      } else if( userData.age >= 18 && userData.age <= 25 ) {
        age18_25++;
      } else if( userData.age >= 25 ) {
        age25++;
      }
      // console.log("Profession", userData.profession);
      if(userData.profession === "student") {
        student++
      } else if(userData.profession === "Employed") {
        employed++;
      }
      const { locality, guest } = userData;
      localityArray.push(locality);
      avg = avg + parseInt(guest) + 1;
    }); 
    
    console.log("Locality", avg/List.length);
    const counts = {}
    localityArray.forEach((x)=> { 
      counts[x] = (counts[x] || 0)+1; 
    });

    const localityData = [];
    const group = [
      {text: 'Average', value: avg/List.length}
    ];

    Object.keys(counts).forEach((key) => {
      const obj = {
        text: key,
        value: counts[key]
      }
      localityData.push(obj);
    })
    const data = [
      {text: 'Student', value: student}, 
      {text: 'Employed', value: employed} 
    ];
    const ageData = [
      {text: '13-18 yr', value: age13_18}, 
      {text: '18-25 yr', value: age18_25},
      {text: '25+ yr', value: age25}
    ];
    
    this.setState({
      ageMap: ageData,
      professionData: data,
      locality: localityData,
      groupSize: group
    });
  }
  handleOnSelect = item => {
    // the item selected
    // console.log("item", item);

  }
  render (){
   const { ageMap, info } = this.state;
   const columns = [{  
     Header: '13-18 yr',  
     accessor: 'age13_18'  
     },{  
     Header: '18-25 yr',  
     accessor: 'age18_25'  
     },{  
      Header: '25+ yr',  
      accessor: 'age25'  
      }
    ];  
    console.log("localiti", this.state.locality, ageMap);
    return (
      <div className="container" style={{marginTop: "20px", overflowY: "scroll"}}>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <h5 class="card-title" style={{padding: '20px'}}>Age Graph</h5>
                <div className="card-body">
                  <GraphComponent 
                    data = {this.state.ageMap}
                    width="500"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <h5 class="card-title" style={{padding: '20px'}}>Profession Graph</h5>
                <div className="card-body">
                  <GraphComponent 
                    data = {this.state.professionData}
                    width="500"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <h5 class="card-title" style={{padding: '20px'}}>Locality Graph</h5>
                <div className="card-body">
                  <GraphComponent 
                    data = {this.state.locality}
                    width="500"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
              <h5 class="card-title" style={{padding: '20px'}}>Average Group Size</h5>
                <div className="card-body">
                  <GraphComponent 
                    data = {this.state.groupSize}
                    width={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>        
    );

  }
}

export default SearchComponent;
