import React from 'react';
import './App.css';
//import "./style.css";
import ProfileComponent from './profile/profileComponent';

import image from "./imageInSrc.png"


function App() {
  
  const [state, setState] = React.useState({
    fullName: "",
    bio: "",
    profession:""
  })

  const imageStyle = {
  width: "20%",
  backgroundColor: "white",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  display:"block" ,
}
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  
   
  function handleSubmit(profile){
    alert ('A profile was submitted: '+ profile );
  }


return (  
<div>
 <form onSubmit={()=>{handleSubmit( state.fullName)}}>
         
          <label>
            full name:
            <input name ="fullName" type="text" value={state.fullName} onChange={handleChange} />
          </label>
         
          <label>
            Bio:
            <input name="bio" type="text" value={state.bio} onChange={handleChange} />
          </label>
         
          <label>
            Profession:
            <input name="profession" type="text" value={state.profession} onChange={handleChange} />
          </label>
         
         
          <input type="submit" value="Submit" />
         
  </form>
  <div>
  <ProfileComponent profile={state}/>
  </div>

  <div class="container">
  <img style={imageStyle} src={image} alt="Avatar" class="image"/>
  </div>
</div>
 
  
 


    

)}

export default App;