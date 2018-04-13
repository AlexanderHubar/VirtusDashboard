import React from 'react';
import './Select.css'
import FontAwesome from 'react-fontawesome';

class Select extends React.Component {

  render() {
    return (
      <div className='select-wrap'>
        <span className='select-label'>{this.props.data.label + ':'}</span>
        <div className="select-button">
          <select
            onChange={this.props.onChange}
            className='Select'>
            {this.props.data.list.map((item, index) => {
              return (
                <option
                  className='select-option'
                  key={index}
                  value={item}
                >{item}</option>
              )
            })}
          </select>
          <FontAwesome
            className='select-caret'
            name='angle-down'
          />
        </div>

      </div>
    )
  }
}

export default Select;