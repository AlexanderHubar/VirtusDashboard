import React from 'react';
import './ProjectBlock.css'

//components
import DropdownButton from '../../atoms/buttons/DropdownButton/DropdownButton'


class ProjectBlock extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((item, index) => {
          return (
            <div className="ProjectBlock" key={index}>
              <div className="project-wrap">
                <img src={item.userImg} alt={item.name}/>
                <div>
                  <div className={"project-header"}>
                    <p>{item.type}</p>
                  </div>
                  <p className="project-text">{item.company} &middot; {item.price}</p>
                </div>
              </div>
              <DropdownButton/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ProjectBlock;