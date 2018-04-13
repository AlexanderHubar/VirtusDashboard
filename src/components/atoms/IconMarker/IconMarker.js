import React from 'react';
import './IconMarker.css'

class IconMarker extends React.Component {

  constructor() {
    super();
    this.state = {
      marker: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        marker: true
      })
    }, 3000)
  }

  render() {
    return (
      this.state.marker &&
      <div className="IconMarker">
      </div>

    )
  }
}

export default IconMarker;