import React from 'react-dom';


export default function ContactCard(props){

    // const logo = require('/20180315_112449.jpg');
   // import logo from '../../images/2018/20180315_112449.jpg'; 

    return(
        <div className="contact-card">
            <img src={props.contact.imgUrl} height="80px" width="100px" alt={props.contact.imgUrl} 
            title={props.contact.displayName?props.contact.displayName:props.contact.imgUrl} />
 
        </div>
    )
}