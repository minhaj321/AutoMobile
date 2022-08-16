import React from 'react'
import './AfterHeader.css';
import {Grid,Button} from '@mui/material';
import Email from './../../Assets/email.png'
import Avatar from './../../Assets/avatar.png'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Logout from './../../Assets/logout.png'
import LoveIcon from './../../Assets/loveIcon.png'
import Mic from './../../Assets/mic.png'
import Chat from './../../Assets/chat.png'
import Setting from './../../Assets/setting.png'
import {useNavigate} from 'react-router-dom';


const submitBtn={borderRadius:20,fontSize:17,paddingLeft:20,paddingRight:20,backgroundColor:'red',textTransform:'capitalize'}

const windowWidth = window.outerWidth;

const AfterHeader = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  var navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


  return (
<div className='after_header'>

{/* popover */}

<Popper id={id} open={open} anchorEl={anchorEl}>
        <Box style={{fontSize:15,fontWeight:600,width:windowWidth>430 ? 300 : 250,background:'#fff',borderRadius:2}}>
          <br/>
            <p style={{padding:8,marginBottom:0,borderLeft:'5px solid black',backgroundColor:'#F1F1F1',width:'85%',borderTopRightRadius:10,borderBottomRightRadius:10}}><img style={{paddingLeft:10,marginRight:5}} src={Mic} height={20} /> My Ads</p>
            <p style={{padding:8,marginBottom:0,width:'85%',cursor:'pointer'}}
            onClick={()=>navigate('/ChatPage')}
            ><img src={Chat} height={18} style={{paddingLeft:10,marginRight:5}} /> Chats</p>
            <p style={{padding:8,marginBottom:0,width:'85%',cursor:'pointer'}}
            onClick={()=>navigate('/Favourite')}>
            <img src={LoveIcon} height={18} style={{paddingLeft:10,marginRight:5}} /> Favourite Ads</p>
            <p style={{padding:8,marginBottom:0,width:'85%',cursor:'pointer'}}
            onClick={()=>navigate('/Settings')}>
            <img src={Setting} height={18} style={{paddingLeft:10,marginRight:5}}/> Setting</p>
            <p style={{padding:8,marginBottom:0,width:'85%',cursor:'pointer'}}
            onClick={()=>navigate('/')}>
            <img src={Logout} height={18} style={{paddingLeft:10,marginRight:5}}/> Logout</p>
        </Box>
      </Popper>


{/* end of popover */}

<Grid container textAlign={windowWidth>430 ?  'right' : 'center'} >
    <Grid item lg={9} md={8}  mt={4} sm={8} xs={6}>
    <Button style={windowWidth > 330  ? submitBtn : {...submitBtn,fontSize:13}}  variant="contained"
    onClick={()=>navigate('/AdSubmission')}
    >+ Submit an Ad</Button>
    </Grid>
    <Grid item md={1} mt={4} sm={1} ml={windowWidth > 1030 ? -6 : 0}  xs={1}>
    {/* <span style={{marginTop:20}}><MailIcon  fontSize='large'/></span> */}
    <img src={Email} style={{width:30,height:25,marginTop:7}} />
    </Grid>
    <Grid item md={1} mt={4} sm={1}  xs={2}>
    {/* <span style={windowWidth > 330 ? {float:'left',marginLeft:10} : {}}><AccountCircleIcon fontSize='large'/></span> */}
    <img onClick={handleClick} src={Avatar} style={windowWidth > 330 ? {width:38,height:38,float:'left',marginLeft:10} : {width:38,height:38}} />

    </Grid>
    <Grid item md={1} mt={4.7} sm={1} ml={windowWidth > 1030 ? -7 : windowWidth > 770 ?-5 :windowWidth > 430 ? -2 :windowWidth > 380 ? -3 : -2}  xs={2}>
    <span className='hi' style={{cursor:'pointer'}}
    onClick={()=>navigate("/")}
    >Login/SignUp</span>
    </Grid>
    

</Grid>
</div>
    )
}

export default AfterHeader