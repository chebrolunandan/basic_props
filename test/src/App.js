import React, { Component } from 'react';  
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {  
         name: "KLU",         
      }  
   }  
   render() {  
      return (  
         <div>  
            <JTP jtpProp = {this.state.name}/>             
         </div>  
      );  
   }  
}  
class JTP extends React.Component {  
   render() {  
      return (  
          <div>  
              <h1>State & Props Example</h1>  
              <h3>Welcome to {this.props.jtpProp}</h3>  
              <p>K L Uniersity is among top Universities in Inida</p>  
         </div>    
      );  
   }  
}  
export default App; 