import React from 'react'
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookImg from './../../Assets/Facebook.png';
import Insta from './../../Assets/Insta.png';
import Twitter from './../../Assets/Twitter.png';
import './footer.css';

const verticalLineStyle={border:'1px solid white',marginLeft:2,marginRight:2};

const windowWidth = window.outerWidth;

const Footer = () => {

    // const user = useSelector(state=>state.username)

    return (
    <div className='footer_main'>
        <div className='footer_content'>
                <br/>
                <br/>
                <br/>
            <Grid container>
                <Grid container>
                <Grid item md={5} sm={5}>
                <h2 className='logo_txt'>LOGO</h2><br/>   
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                </Grid>
                <Grid ml={windowWidth>430 ? 0 : -3} item sm={4} pl={windowWidth>768 ? 8 : 3} mt={windowWidth>430 ? 0 : 3}>
                <p className='footer_about_us'>About Us</p>    
                    <p>{`>Spare parts`}</p>
                    <p>{`>about`}</p>
                    <p>{`>contact`}</p>
                </Grid>
                <Grid ml={windowWidth>430 ? 0 : -1} item sm={3} pt={1} mt={windowWidth>430 ? 0 : 3} container justifyContent={windowWidth>430 ? 'flex-end' : 'flex-start'}>
                <p>
                <img src={FacebookImg} style={{width:23,height:23,cursor:'pointer',marginLeft:'10px'}} />
                {/* <FacebookRoundedIcon style={{marginLeft:'10px',cursor:'pointer'}}/> */}
                <img src={Insta} style={{width:23,height:23,cursor:'pointer',marginLeft:'10px'}} />
                {/* <TwitterIcon style={{marginLeft:'10px',cursor:'pointer'}}/> */}
                <img src={Twitter} style={{width:23,height:23,cursor:'pointer',marginLeft:'10px'}} />
                </p>
                </Grid>
                </Grid>

                <Grid container>
                <Grid item sm={12}>
                <hr/>  
                <p style={{textAlign:'center',fontSize:12}}>&copy; 2022 Company <span style={verticalLineStyle}></span> All Rights Reserved  <span style={verticalLineStyle}></span> Terms {`&`} conditions  <span style={verticalLineStyle}></span> Privacy Policy</p>  
                </Grid>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer