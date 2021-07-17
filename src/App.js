import React, { Component } from 'react';
import './App.css';

class ComponentDidMountMethod extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:"This state will change in 4 sec!"
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({name:"This is a componentDidMount Method!"+
      "Click on me and I will unmount!"}) 
    }, 4000);  
  } 
 
 
  
 reset = ()=>{
  this.setState({
    name:"This state will change in 4 sec!"
  })
}


  componentWillUnmount(){     
  }
  render(){
   return(
     <div>
      
       <p className = 'myState'  onClick={() => {
                      this.setState({
                        name: !this.state.name,
                      })
                    }}>{this.state.name}</p>
       {!this.state.name ? alert("Component Will Unmount!") : null}
      
    <div className = "button">
      {!this.state.name?
    <button onClick = {this.reset}> Reset</button> :
    <button onClick = {this.name}> Current State</button>
      }
   </div>  
      
     </div> 
  
  
   )
 }
}

export default ComponentDidMountMethod;
