import React from "react";

export default function Alert(props) { 
  const capital=(text)=>{ 
     const str=text.toLowerCase();
     console.log(str.charAt(0).ToUpperCase() + str.slice(1));
  }           
  return ( 
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capital(props.alert.type)} </strong>: {props.alert.msg} :   
      <button              
        type="button"   
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> 
    </div> 
  );
} 
 