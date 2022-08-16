import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/footer';
import { Grid,TextField,Button,Avatar } from '@mui/material';
import AvatarImg from './../../Assets/id-photo2.png';
import {useNavigate} from 'react-router-dom';
import './Register.css'

const Register = () => {

  var navigate =useNavigate();

  return (
    <div>
      <Header/>
        <div className='register_center_div'>
          <div className='register_box'>
            <br/>
            <h2>REGISTER NOW</h2>
            <Grid container flexDirection={'column'} >
            <Grid item container justifyContent={'center'}>
            <Avatar
        alt="Remy Sharp"
        src={AvatarImg}
        sx={{ width: 76, height: 76 }}
      />
      </Grid>
      <Grid item>
      <p style={{textDecoration:"underline"}}  className='link'>Upload an Image</p>
      </Grid>
      
      </Grid>
      
    <Grid container textAlign={'left'} pl={2}>

    <Grid item sm={6} xs={12}>
    <p>First Name</p>
              <TextField style={{width:'90%',outline:'2px solid #2B2B2B',borderRadius:2}}
              color='secondary'
              type={'text'}
               variant="outlined" />
    
    </Grid>
    <Grid item sm={6} xs={12}>
    <p>Last Name</p>
              <TextField style={{width:'90%',outline:'2px solid #2B2B2B',borderRadius:2}}
              color='secondary'
              type={'text'}
               variant="outlined" />
</Grid>
    <Grid item sm={6} xs={12}>
    <p style={{paddingTop:7}}>First Name</p>
              <TextField style={{width:'90%',outline:'2px solid #2B2B2B',borderRadius:2}}
              color='secondary'
              type={'text'}
               variant="outlined" />
</Grid>
    <Grid item sm={6} xs={12}>
    <p style={{paddingTop:7}}>Last Name</p>
              <TextField style={{width:'90%',outline:'2px solid #2B2B2B',borderRadius:2}}
              color='secondary'
              type={'text'}
               variant="outlined" />
</Grid>
    <Grid item sm={6} xs={12}>
    <p style={{paddingTop:7}}>Password</p>
              <TextField style={{width:'90%',outline:'2px solid #2B2B2B',borderRadius:2}}
              color='secondary'
              type={'password'}
               variant="outlined" />
</Grid>
    <Grid item sm={6} xs={12}>
    <p style={{paddingTop:7}}>Confirm Password</p>
              <TextField style={{width:'90%',outline:'2px solid #2B2B2B',borderRadius:2}}
              color='secondary'
              type={'password'}
               variant="outlined" />
</Grid>
    <Grid item sm={12} xs={11.5}>
    <p style={{paddingTop:7}}>Address <span>(Optional)</span></p>
              <TextField style={{width:'95%',outline:'2px solid #2B2B2B',borderRadius:2}}
              color='secondary'
              type={'text'}
               variant="outlined" />
</Grid>

    </Grid>

        <br/><br/>
            <Button className='register_btn' style={{borderRadius:20,backgroundColor:'#FD4441',width:'40%',marginTop:5,marginBottom:5}}  variant="contained"
            onClick={()=>navigate("/Home")}
            >Register Now</Button>
        <br/><br/>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Register