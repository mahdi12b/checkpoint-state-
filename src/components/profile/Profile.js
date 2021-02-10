import PropTypes from 'prop-types'
import './style.css'
import React from 'react'
import Pdp from '../../assets/pdp.jpg'
class Profile extends React.Component {  
    
    
    
    state ={
       intervall:null,
       timer:0,
    }

    componentDidMount(){
        console.log('componentdidMount')
        this.setState ({
             intervall : setInterval(() => {
                 this.setState({timer:this.state.timer +1});
             }, 1000)
        })
    }
    componentDidUpdate(){
        console.log('componentdidUpdate')
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }



    
    
render (){
    console.log('render()')
    
   
return(
<div>
     
        
             <div className="container">
             <div className="card">
             <img className="card__image" src={Pdp} width='500' alt='pdp' />   
             <p className="card__name">{this.props.fullName}</p>
             <div className="grid-container">

                 <div className="grid-child-posts">
                 Bio:
                </div>

                <div className="grid-child-followers">
                 {this.props.bio}
               </div>
               <div className="grid-child-posts">
                 Profession:
                </div>

                <div className="grid-child-followers">
                 {this.props.profession}
               </div>

                </div>  
                <button className="btn draw-border">Follow</button>
                <button className="btn draw-border">Message</button>
                </div> 
                {this.state.timer}
                </div>
               
        
        
      
       </div>
)
}
}  
export default Profile

Profile.defaultProps = {
    fullName:'FullName*******',
    bio:'***bio***',
    profession:'***profession***',
}
    
Profile.propTypes ={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string,
    profession:PropTypes.string,
   
}