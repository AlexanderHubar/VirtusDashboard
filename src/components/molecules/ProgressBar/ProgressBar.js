import 'rc-progress/assets/index.css';
import React from 'react';
import { Line } from 'rc-progress';


class ProgressBar extends React.Component {

  render() {
    const containerStyle = {
      width: '200px',
    };

    let mycolor;
    if(this.props.data === 100){
      mycolor = '#4caf50'
    }
    if(this.props.data !== 100) {
      mycolor = '#2196f3';
    }

    return (

        <div style={containerStyle}>
          <Line
            percent={this.props.data}
            strokeWidth="3"
            trailWidth ="3"
            trailColor="#585c6f"
            strokeColor={mycolor}/>
        </div>
    );
  }
}

export default ProgressBar;