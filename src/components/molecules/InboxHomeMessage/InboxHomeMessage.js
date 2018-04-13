import React from 'react';
import './InboxHomeMessage.css'

class InboxHomeMessage extends React.Component {
  render(){
    return(
      <div>
        {this.props.data.map((item, index)=>{
           return(
             <a className="InboxHomeMessage" key={index}>
               <img src={item.img} alt={item.name}/>
               <div className="inbox-message-wrap">
                 <div className={"inbox-message-header " + (item.readed || "inbox-message-header-noread")}>
                   <p>{item.name}</p>
                   <span>{item.date}</span>
                 </div>
                 <p className="inbox-message-text">{item.text}</p>
               </div>
             </a>
           )
         })}
    </div>
    )
  }
}

export default InboxHomeMessage;