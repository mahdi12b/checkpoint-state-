import React from 'react'
import './components/profile/style.css';
import Profile from './components/profile/Profile.js'
import Pdp from './assets/pdp.jpg'



class App extends React.Component {
  state={
    visible:false
  }
  handleShow = () =>{
     this.setState({
       visible: !this.state.visible
     })
  }
  render()
   {
    return (
      <div className="App">
       <button onClick={()=>{this.handleShow()}}>
         {this.state.visible? 'Hide':'Show'}
         </button>
      {this.state.visible && <Profile
      image={Pdp}
      fullName='Mahdi Hachem'
      bio='I like dogs'
      profession='developer'/>
      }
      </div>
  
    )
  }
}



export default App;

