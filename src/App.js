// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';  
import Alert from './components/Alert';
import About from './components/About'; 
import Navbar from './components/Navbar'; 
import TextForms from './components/TextForms'; 
// import {value} from './components/TextForms';
// let name="Dhruv"; 
function App() {  
  const [mode,Setmode] = useState('light');  
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })  
  }    
  const ToggleMode=()=>{ 
    if(mode==='light'){
      Setmode('dark');
      document.body.style.backgroundColor="grey"; 
      showAlert("dark mode has been activated","success");
    }                 
    else{   
      Setmode('light'); 
      document.body.style.backgroundColor="white";
      showAlert("light mode has been activated","danger");
     } 
  }  
  return (        
    <>         
      <Navbar title="TextUtils" AboutText="About Text" mode={mode} ToggleMode={ToggleMode}/>  
      <Alert alert={alert}/>      
       <nav className="container my-3 py-3" >     
        <TextForms TextForm="Enter the Space Area to analize" mode={mode}/> 
      </nav>        
      <About/>   
    </>    
  ); 
}    
 
export default App;
