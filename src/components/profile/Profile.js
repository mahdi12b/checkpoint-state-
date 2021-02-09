import PropTypes from 'prop-types'
import './style.css'
import React from 'react'
import Pdp from '../../assets/pdp.jpg'
class Profile extends React.Component {  
    constructor(props){
        super(props)
    
    this.state ={
       visible:false,
       intervall:null,
       timer:false
    }
}
componentDidMount(){
   this.setState({
       intervall: setInterval(()=>{
           this.setState(()=>{
              ({timer:this.state.timer +1})
           },1000)
       })
   })
}
toggleVisibility = ()=>{
    this.setState({
        visible :(!this.state.visible)
    })
}
    
    
render (){
    const handleAlert = (fullName) => {
        alert(`hi my name is ${fullName}`)
      }
    const styleH3= {color:'rgb(155, 43, 43)', textAlign: 'center', marginTop: '7%', fontWeight:100}
    const  styleTD={color: 'grey'}
   const styleTR={ color: 'rgb(155, 43, 43)',fontWeight: 500}
return(
<div>
        <button onClick={()=>{this.toggleVisibility()}}>showcard</button>
        {this.state.visible ? 
             (<div class="container">
             <div class="card">
             <img class="card__image" src={Pdp} width='500' alt='pdp' />   
             <p class="card__name">{this.props.fullName}</p>
             <div class="grid-container">

                 <div class="grid-child-posts">
                 Bio:
                </div>

                <div class="grid-child-followers">
                 {this.props.bio}
               </div>
               <div class="grid-child-posts">
                 Profession:
                </div>

                <div class="grid-child-followers">
                 {this.props.profession}
               </div>

                </div>  
                <button class="btn draw-border">Follow</button>
                <button class="btn draw-border">Message</button>
                </div> </div>
                ) : <div> rien </div>
        
        }
      
       </div>
)
}
}  
export default Profile

Profile.defaultProps = {
    fullName:'FullName*******',
    bio:'***bio***',
    profession:'***profession***',
    handleName:'***handleName***'    
}
Profile.propTypes ={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string,
    profession:PropTypes.string,
    handleName:PropTypes.func
}