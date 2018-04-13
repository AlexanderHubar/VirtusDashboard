import React from 'react';
import './Raport.css'

//components
import RaportChart from "../../organisms/Charts/RaportChart/RaportChart";
import RaportTable from "../../organisms/RaportTable/RaportTable";

class Raport extends React.Component {
  render() {
    return (
      <div className="Raport">
        <RaportChart/>
        <RaportTable/>
      </div>
    )
  }
}

export default Raport;