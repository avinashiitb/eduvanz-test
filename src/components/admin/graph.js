import React, { Component } from 'react';
import BarChart from 'react-bar-chart';
 
// const data = [
//   {text: 'Man', value: 500}, 
//   {text: 'Woman', value: 300} 
// ];
 
const margin = {top: 20, right: 20, bottom: 30, left: 40, backgroundColor: "blue"};
 
class GraphComponent extends Component {
  // getInitialState() {
  //   return { width: 500 };
  // },
  constructor(props) {
    super(props);

    this.state = {
      width: 300
    }
  }
  componentDidMount() {
    // console.log("width", this.state.width);
    window.onresize = () => {
     this.setState({width: this.refs.root.offsetWidth}); 
    };
  }
 
  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }
 
  render() {
    const { data, text, width } = this.props;
    return (
        <div ref='root'>
            <div style={{width: '50%'}}> 
                <BarChart
                  width={width}
                  height={300}
                  margin={margin}
                  data={data}
                  onBarClick={this.handleBarClick}/>
            </div>
        </div>
    );
  }
};

export default GraphComponent;