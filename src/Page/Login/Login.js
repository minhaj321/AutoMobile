import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/footer';
import { Grid,TextField,Button } from '@mui/material';
import './login.css'
import GoogleIcon from './../../Assets/googleIcon.png';
import FacebookIcon from './../../Assets/fbIcon.png';
import {useNavigate} from 'react-router-dom';

const Login = () => {

  var navigate = useNavigate();

  return (
    <div>
      <Header/>
        <div className='login_center_div'>
          <div className='login_box'>
            <br/>
            <h2>LOGIN</h2>
            <div style={{textAlign:'left',marginLeft:20}}>

              <p>Email Address</p>
              <TextField style={{width:'90%',outline:'2px solid #2B2B2B'}}
              color='secondary'
              type={'email'}
               variant="outlined" />

              <p>Password</p>
              <TextField style={{width:'90%',outline:'2px solid #2B2B2B'}}
              color='secondary'
              type={'password'}
               variant="outlined" />

            </div>
            <p style={{marginTop:10,textDecoration:'underline',color:'#949598',cursor:'pointer'}} className='link'>forget password?</p>
            <Button style={{borderRadius:20,backgroundColor:'#FD4441',width:'40%',marginTop:5,marginBottom:5}}  variant="contained"
            onClick={()=>navigate('/Home')}
            >Login</Button>

          {/* div for google login */}
          <div className='social_link_div'>
          <p style={{marginTop:10}}>
            <img src={GoogleIcon} style={{borderRadius:50,float:'left',marginLeft:40}} height={20} width={20}  />
            <span style={{marginLeft:-20}}>Contiune With Google</span></p>  
          </div>

          {/* div for facebook login */}
          <div className='social_link_div'>
            
          <p style={{marginTop:10}}>
          <img src={FacebookIcon} style={{borderRadius:50,float:'left',marginLeft:40,color:'#2B78F2'}} height={20} width={20}  />
          <span style={{marginLeft:-20}}>Contiune With Facebook</span></p>  
          
          </div>
        <br/><br/>
          </div>
        </div>
        <div style={{marginTop:-50,marginBottom:40}} className='link'>
        <span style={{color:'#949598'}}>New Here?</span><span style={{cursor:'pointer'}}
            onClick={()=>navigate('/Register')}
            > Sign Up</span>
        </div>
      <Footer/>
    </div>
  )
}

export default Login