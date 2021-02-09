import PropTypes from 'prop-types'
import './style.css'
import { Button } from 'react-bootstrap';


const Profile = ({fullName,bio,profession,children,handleAlert}) => {
    const styleH3= {color:'rgb(155, 43, 43)', textAlign: 'center', marginTop: '7%', fontWeight:100}
    const styleTD={color: 'grey'}
    const styleTR={ color: 'rgb(155, 43, 43)',fontWeight: 500}

    
    return(
        <div>

             
               
     {children}
                 
     <h3 style={styleH3} >{fullName}</h3>
        <table style={{marginTop:'12%'}}>
         <tr>
             <td style={styleTD}>Bio:</td>
            <td style={styleTR}> {bio}</td>
         </tr>
         <tr>
             <td style={styleTD}>Profession:</td>
            <td style={styleTR}> {profession}</td>
         </tr>
        </table>
           
  
           <Button className='button' variant="secondary" onClick ={ () =>handleAlert(fullName)}> Send</Button>
            

        </div>
        
    )
}

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


export default Profile