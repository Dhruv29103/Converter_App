import React, {useState} from "react";

export default function TextForms(props) {
    const [text, settext] = useState("");  
    // settext("used setText function");

    const handleOnChange=(event)=>{
        console.log("handleOnChange");
        settext(event.target.value);     
    }   
    
    console.log(text); 
    
    const handleUpClick=()=>{
        console.log("handleUpClick ");  
        let newText=text.toUpperCase();
        settext(newText);  
        // settext({newText});  will return [object Object]
    }  
    
    const handleLowClick=()=>{ 
        console.log("handleUpClick ");
        let newText=text.toLowerCase();
        settext(newText);  
        // settext({newText});  will return [object Object]
    }  
    
    const Case=()=>{ 
        let ans=text.split(" "); 
        let camel="";
        ans.forEach(element=>{
            camel+=element.charAt(0).toUpperCase()+element.slice(1)+" " ;   
        })   
        settext(camel);  
    }   
     
    const value=()=>{
        document.querySelector('textarea').style.backgroundColor = "red"
        document.querySelector('textarea').style.color="white"; 
    }
    
    const value1=()=>{
        document.querySelector('textarea').style.backgroundColor = "white"
        document.querySelector('textarea').style.color="black"; 
    }  
    
    const Dark=()=>{ 
        document.querySelector('body').style.backgroundColor = "black"  
        document.querySelector('body').style.color = "white"
    }

    const Light=()=>{  
        document.querySelector('body').style.backgroundColor = "white"
        document.querySelector('body').style.color = "black"    
    }  
    
    const Generate=()=>{  
        var content=document.getElementById('area');     
        // var text1=text;     
        content.select();    
        navigator.clipboard.writeText(content.value);
    } 

    let str="new string"; 
    console.log(str.slice(2));
    // var k=props.mode === 'light'?'dark':'light'; 
  return (    
    <>  
        
      <div className="container" style={{ color:props.mode === 'light'?'dark':'light' }}>
      <h1>{props.TextForm} </h1>    
      <div className="mb-3"> 
        <textarea        
          className="form-control"    
          value={text} onChange={handleOnChange}   
          style={{ backgroundColor: props.mode==='light'?'light':'grey'}}
          id="area"    
          rows="8"             
          />     
          
      </div>   
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Covert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Covert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={Case}>Covert to First</button> 
      <button className="btn btn-primary mx-3" onClick={Dark}>Covert to Dark Theme</button>
      <button className="btn btn-primary " onClick={Light}>Covert to Light Theme</button>
      <button className="btn btn-primary mx-3" onClick={value} onDoubleClick={value1}>Convert</button>   
      <button className="btn btn-primary" onClick={Generate}>Copy</button>   
      {/* <button className="btn btn-primary mx-3" >Convert back</button>     */}
      </div>  
      <div className="container my-3" style={{ color: props.mode==='dark'?'light':'dark' }}> 
        <h1>Your Text Summary</h1>         
        <p>{text.length} characters and {text.split(" ").length-1} Words</p>
        <p>{(text.split(" ").length-1)*(0.008)} <b>Minutes</b> Read</p>  
        <p>Sentences are {text.split(".").length-1} </p> 
        <h2> <b> Preview </b></h2>  
        <p>{text.length>0?text:"Enter Text in the Textbox "}</p>      
      </div>  
    </>  
  ); 
} 

 