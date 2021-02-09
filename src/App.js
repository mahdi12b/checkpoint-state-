import React from 'react'
import './components/profile/style.css';
import Profile from './components/profile/Profile.js'
import Pdp from './assets/pdp.jpg'
const  handleAlert = (fullName) => {
  alert(`hi my name is ${fullName}`)
}

class App extends React.Component {
  render()
   {
    return (
      <div className="App">
      
      
      <Profile
        image={Pdp}
        fullName='Mahdi Hachem'
        bio='I like dogs'
        profession='developer'
        handleAlert={handleAlert}

      />
      </div>
  
    )
  }
}



export default App;

