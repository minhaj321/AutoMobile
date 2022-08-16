import GoogleMapReact from 'google-map-react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import React,{useState} from "react";
import { Grid, Button } from "@mui/material";
import "./ProductDetails.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/footer";
import AfterHeader from "../../Components/AfterHeader/AfterHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import WhatsAppLogo from './../../Assets/whatsapp_logo.jpg'
import LoginBg from './../../Assets/thirdImg.png';
import CarouselComponent from './../../Components/Carousel/Carousel';
import avatar from './../../Assets/avatar.png'
import CommentImg from './../../Assets/comment.png';
import BackWardIcon from './../../Assets/backward.png';
import ForWardIcon from './../../Assets/forward.png';
import Van from './../../Assets/van.svg'
import COD from './../../Assets/COD.svg'
import RedAvatar from './../../Assets/RedAvatar.svg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import closeImg from './../../Assets/redClose.png'
import {useNavigate } from 'react-router-dom'

const windowWidth = window.outerWidth;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: windowWidth>430 ? '40%' : '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:3,
  p: 4,
};
const AnyReactComponent = ({ text }) => (
  <LocationOnSharpIcon style={{color:'#FD4441',fontSize:30}}/>
);


const ProductDetails = () => {

  const [open,setOpen] = useState(true);
  var navigate = useNavigate();

  const handleOpen = () =>{
    setOpen(true)
  }

  const handleClose = () =>{
    setOpen(false)
  }

  return (
    <div>
{/* modal code */}

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item md={11} sm={11} xs={11}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Contact Detals:
          </Typography>
          <p style={{fontSize:13,marginLeft:30,marginBottom:3}}>
          +93 123 123 123
          </p>
          <p style={{fontSize:13,marginLeft:30}}>
          +93 123 123 123
          </p>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Email Address:
          </Typography>
          <p style={{fontSize:13,marginLeft:30,marginBottom:3}}>
          john@example.com
          </p>
          </Grid>
          <Grid item md={1} sm={1} xs={1}>
            <img onClick={handleClose} src={closeImg} style={{cursor:'pointer',float:'right',height:20,width:20}} />
          </Grid>
          </Grid>
        </Box>
      </Modal>

{/* end of modal code  */}
      <Header />
      <AfterHeader />
      <div className="product_details_main">
        <Grid container>
          <Grid item md={8} sm={8}
         pr={windowWidth>430 ? 1 : 0}>
            {/* first div */}
            {/* images div */}
 
            <Grid
              container
              style={{ border: "1px solid #707070", borderRadius: 5 }}
              textAlign={"left"}
            >
              <div className='product_Details_image_div'>
                <div className="product_details_img_count">
                  <p style={{color:'white',fontSize:18,fontWeight:600,textAlign:'center',marginTop:5}}>1/5</p>
                </div>
              </div>
              <Grid container mt={1} mb={1} pl={windowWidth>430 ? 3 : 1}>
                <Grid item md={1} mt={-3}  sm={1} xs={2} >
                <div className='prev_div'>
        {/* <ArrowCircleLeftOutlinedIcon fontSize='large' style={windowWidth>770 ? {fontSize:60,color:'#FD4441'} : windowWidth>430 ? {fontSize:35,marginTop:30,color:'#FD4441'} : {fontSize:45,marginTop:20,color:'#FD4441'}}  /> */}
        <img src={BackWardIcon} style={windowWidth>770 ? {height:50,width:50,color:'#FD4441'} : windowWidth>430 ? {height:35,width:35,marginTop:30,color:'#FD4441'} : {height:45,width:45,marginTop:20,color:'#FD4441'}}  />
      </div>
                </Grid>
                <Grid item md={2.5} sm={2.5} xs={5}>
                  <img src={LoginBg} height={80} width={'80%'} />
                </Grid>
                <Grid item md={2.5} sm={2.5} xs={5}>
                <img src={LoginBg} height={80} width={'80%'} />
                </Grid>
                <Grid item md={2.5} sm={2.5} mt={windowWidth>430 ? 0 : 1}  xs={5}>
                <img src={LoginBg} height={80} width={'80%'} />
                </Grid>
                <Grid item md={2.5} sm={2.5} mt={windowWidth>430 ? 0 : 1}  xs={5}>
                <img src={LoginBg} height={80} width={'80%'} />
                </Grid>
                <Grid item md={1} mt={-3} sm={1} xs={2}>
                <div className='prev_div'>
        <img src={ForWardIcon} style={windowWidth>770 ? {height:50,width:50,color:'#FD4441'} : windowWidth>430 ? {height:35,width:35,marginTop:30,color:'#FD4441'} : {height:45,width:45,marginTop:20,color:'#FD4441'}}  />
        {/* <ArrowCircleRightOutlinedIcon fontSize='large' style={windowWidth>770 ? {fontSize:60,color:'#FD4441'} :  windowWidth>430 ? {fontSize:35,marginTop:30,color:'#FD4441'} : {fontSize:45,marginTop:25,color:'#FD4441'}}  /> */}
      </div>

                </Grid>
              </Grid>
            </Grid>
            {/* second div */}
            {/* details div */}
            <Grid
              pt={1}
              mt={1}
              container
              style={{ border: "1px solid #707070", borderRadius: 5 }}
              textAlign={"left"}
              pl={2}
            >
                <p  style={{fontWeight:700}}>Details</p>
              <Grid container>
                <Grid item container md={6} sm={5} xs={12}>
                  <Grid item md={6} sm={5} xs={5} style={{fontWeight:600}} className='labels'>
                    <p>Price</p>
                    <p>Condition</p>
                    <p>Body</p>
                    <p>OEM Number</p>
                    <p>Model</p>
                  </Grid>
                  <Grid item md={6} sm={7} xs={7} className='values'>
                  <p>100 Dirhams</p>
                  <p>New</p>
                  <p>lorem</p>
                  <p>lorem</p>
                  <p>2002</p>
                  </Grid>
                </Grid>
                <Grid item container md={6} sm={7} xs={12}>
                <Grid item md={6} sm={5} xs={5} style={{fontWeight:600}} className='labels'>
                    <p>Type</p>
                    <p>Compatibility</p>
                    <p>Engine</p>
                    <p>Make</p>
                  </Grid>
                  <Grid item md={6} sm={7} xs={7} className='values'>
                  <p>Spare parts</p>
                  <p>Toyota, Honda , Suzuki</p>
                  <p>lorem</p>
                  <p>lorem</p>
                  </Grid>

                </Grid>
                <Grid item md={12} mt={1}>
                  <p style={{fontWeight:700}}>Description</p>
                </Grid>
                <Grid item md={12}>
                  <p style={{fontSize:14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac volutpat est. Donec id accumsan nulla. Mauris a sem quam. Ut quis mauris ut est aliquam vestibulum eget quis sapien. Proin eleifend posuere nibh. Vivamus vitae sollicitudin felis, quis tincidunt ante. Nullam nibh quam, accumsan et fermentum quis, vestibulum eget sapien. Nulla ultrices leo quis arcu venenatis egestas. In dictum venenatis nulla vehicula efficitur. Proin eu venenatis dui. Sed vestibulum sit amet massa non volutpat. Maecenas sit amet faucibus leo. Pellentesque efficitur mauris vel neque pulvinar pharetra. Curabitur eros ligula, condimentum non nunc at, elementum pulvinar tellus.</p>
                </Grid>
              </Grid>



            </Grid>
            {/* third div */}
            {/* map div */}
 
            <Grid
              container
              style={{ border: "1px solid #707070", borderRadius: 5 }}
              textAlign={"left"}
              mt={1}
            >

              <div style={{height:300,width:'100%'}}>
    <div style={{ height: '100%', width: '100%' }}>
    <GoogleMapReact
    
    //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
      defaultCenter={{
        lat: 59.955413,
        lng: 30.337844
      }}
      defaultZoom={11}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        // text="My asdas"
      />
    </GoogleMapReact>
  </div>
  </div>

            </Grid>


          </Grid>


 {/* end of first column */}
          <Grid item md={4} sm={4} xs={12} mt={windowWidth>430 ? 0 : 1}>
            {/* first 100 dirhams div */}
            <Grid
              pt={1}
              container
              style={{ border: "1px solid #707070", borderRadius: 5 }}
              textAlign={"left"}
              pl={2}
            >
              <Grid container>
                <Grid item md={8} sm={10} xs={8}>
                  <h2 style={{ marginBottom: 0 }}>100 Dirhams</h2>
                  <p style={{ marginTop: 0 }}>Parts description</p>
                </Grid>
                <Grid item md={4} sm={2} xs={4} textAlign="right" pr={2} pt={1}>
                  <div>
                    <FavoriteIcon color="error" style={{ marginRight: 10 }} />
                    <ShareOutlinedIcon color="error" />
                  </div>
                </Grid>
              </Grid>
              <Grid container>
                  <Grid item md={8} sm={7} xs={7}>
                            <p style={{color:'#949598'}}>Dubai</p>
                  </Grid>
                  <Grid sm={5} item md={4} textAlign='right' pr={2} xs={5}>
                            <p style={{color:'#949598'}}>2 days ago</p>
                  </Grid>
              </Grid>
            </Grid>
            {/* second seller info div */}
            <Grid
              pt={1}
              mt={1}
              container
              style={{ border: "1px solid #707070", borderRadius: 5 }}
              textAlign={"left"}
              pl={windowWidth>770 ? 2 : 1}
            >
                <p>Seller Information</p>
              <Grid container>
                <Grid item md={2.5} mt={-1} sm={3} xs={2}>
                <img src={RedAvatar} style={{width:70,height:70}} />
                    {/* <AccountCircleIcon color='error'  style={{fontSize:70}} /> */}
                </Grid>
                <Grid item md={9.5} pt={0.3} sm={9} xs={10} pl={windowWidth>1030 ? 0 : windowWidth>380 ? 1 : 2}>
                <h5 style={{ marginBottom: 0 }}>John</h5>
                  <p style={{ marginTop: 0 }}>Member since jun 2019</p>
 
                </Grid>
              </Grid>
              <Grid container>
                  <Grid item md={10} pl={windowWidth>770 ? 1 : 1} sm={8.5} xs={10}>
                  <Button variant='contained' style={{
            color:'white',
            backgroundColor:'#FD4441',
            // paddingLeft:80,
            // paddingRight:80,
            // paddingTop:20,
            // paddingBottom:20,
            width:'95%',
            fontSize:15,
            height:40,
            textTransform:'capitalize',
        }}
        onClick={()=>navigate('/ChatPage')}
        >
            Chat with Seller 
        </Button>
                  </Grid>
                  <Grid item md={2} textAlign='right' pr={2} sm={3.5} xs={2}>
                            <img onClick={handleOpen} src={WhatsAppLogo} height={40} style={{cursor:'pointer'}}/>
                            {/* <WhatsAppLogo/> */}
                  </Grid>
              </Grid>
              <Grid container mt={2} mb={2} sm={12} xs={12}>
                  <p style={{textDecoration:'underline'}}>
                      Show Details
                  </p>
              </Grid>
            </Grid>
{/* third and last div */}
<Grid
              pt={1}
              mt={1}
              container
              style={{ border: "1px solid #707070", borderRadius: 5 }}
              textAlign={"left"}
              pl={windowWidth>770 ? 2 : 0.5}
            >
              <Grid container>
                <Grid item md={2.5} mt={-1} sm={2.5} xs={2}>
                    <img src={CommentImg} style={{height:50,marginTop:5}} />
                    {/* <CommentSharpIcon color='error'  style={{fontSize:60}} /> */}
                </Grid>
                <Grid item md={9.5} pt={0.3} sm={9.5}  xs={10} pl={windowWidth>770 ? 0 : 0.5}>
                <h5 style={{ marginBottom: 0 }}>Leave an inquiry</h5>
 
                </Grid>
              </Grid>

{/* first info */}
              <Grid container>
                <Grid item md={2.5} mt={windowWidth>770 ? 0 : 1} sm={2.5}  xs={2}>
                    {/* <AccountCircleIcon color='disabled'  style={windowWidth>770 ? {fontSize:60} : windowWidth>430 ? {fontSize:45} : {fontSize:60} } /> */}
                    <img src={avatar}   style={windowWidth>770 ? {height:60} : windowWidth>430 ? {height:50} : {height:60} } />

                </Grid>
                <Grid item md={9.5} pt={1} sm={9.5}  xs={10} pl={windowWidth>430 ? 0 : 1}>
                  <Grid container>
                    <Grid item lg={6} md={4} sm={3}  xs={3}>
                <h5 style={{ marginBottom: 0 }}>John</h5>
                    </Grid>
                    <Grid item lg={6} md={8} textAlign='right' pr={2} sm={9}  xs={9}>
                      <span style={windowWidth>430 ? {fontSize:14,color:'#949598'} : {fontSize:13,color:'#949598'} }>November 17,2021</span>
                    </Grid>
                  </Grid>
                  <p style={{ marginTop: 0,fontSize:12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac volutpat est. Donec id accumsan nulla. Mauris a sem quam. Ut quis mauris ut est aliquam vestibulum eget quis sapien. Proin eleifend posuere nibh.</p>
 
                </Grid>
              </Grid>

{/* second info */}
<Grid container>
                <Grid item md={2.5} mt={windowWidth>770 ? 0 : 1} sm={2.5}  xs={2}>
                    {/* <AccountCircleIcon color='disabled'  style={windowWidth>770 ? {fontSize:60} : windowWidth>430 ? {fontSize:45} : {fontSize:60} } /> */}
                    <img src={avatar}   style={windowWidth>770 ? {height:60} : windowWidth>430 ? {height:50} : {height:60} } />

                </Grid>
                <Grid item md={9.5} pt={1} sm={9.5}  xs={10} pl={windowWidth>430 ? 0 : 1}>
                  <Grid container>
                    <Grid item lg={6} md={4} sm={3}  xs={3}>
                <h5 style={{ marginBottom: 0 }}>John</h5>
                    </Grid>
                    <Grid item lg={6} md={8} textAlign='right' pr={2} sm={9}  xs={9}>
                      <span style={windowWidth>430 ? {fontSize:14,color:'#949598'} : {fontSize:13,color:'#949598'} }>November 17,2021</span>
                    </Grid>
                  </Grid>
                  <p style={{ marginTop: 0,fontSize:12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac volutpat est. Donec id accumsan nulla. Mauris a sem quam. Ut quis mauris ut est aliquam vestibulum eget quis sapien. Proin eleifend posuere nibh.</p>
 
                </Grid>
              </Grid>

{/* third info */}
<Grid container>
                <Grid item md={2.5} mt={windowWidth>770 ? 0 : 1} sm={2.5}  xs={2}>
                    {/* <AccountCircleIcon color='disabled'  style={windowWidth>770 ? {fontSize:60} : windowWidth>430 ? {fontSize:45} : {fontSize:60} } /> */}
                    <img src={avatar}   style={windowWidth>770 ? {height:60} : windowWidth>430 ? {height:50} : {height:60} } />

                </Grid>
                <Grid item md={9.5} pt={1} sm={9.5}  xs={10} pl={windowWidth>430 ? 0 : 1}>
                  <Grid container>
                    <Grid item lg={6} md={4} sm={3}  xs={3}>
                <h5 style={{ marginBottom: 0 }}>John</h5>
                    </Grid>
                    <Grid item lg={6} md={8} textAlign='right' pr={2} sm={9}  xs={9}>
                      <span style={windowWidth>430 ? {fontSize:14,color:'#949598'} : {fontSize:13,color:'#949598'} }>November 17,2021</span>
                    </Grid>
                  </Grid>
                  <p style={{ marginTop: 0,fontSize:12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac volutpat est. Donec id accumsan nulla. Mauris a sem quam. Ut quis mauris ut est aliquam vestibulum eget quis sapien. Proin eleifend posuere nibh.</p>
 
                </Grid>
              </Grid>


              <Grid container mt={2} mb={2} >
                  <p style={{textDecoration:'underline',color:'#949598',margin:'auto'}}>
                      Show More
                  </p>
              </Grid>
            </Grid>
 {/* end of last div */}


{/* fourth div */}
            {/* second seller info div */}
            <Grid
              pt={1}
              mt={1}
              container
              style={{ border: "1px solid #707070", borderRadius: 5 }}
              textAlign={"left"}
              pl={2}
            >
                <p>Delivery Information</p>
              <Grid container>
                <Grid item md={2} mt={-1} sm={2}>
                  <img src={Van} style={{width:40,height:40,marginTop:5}} />
                    {/* <LocalShippingTwoToneIcon color='disabled'  style={{fontSize:40}} /> */}
                </Grid>
                <Grid item md={10} pt={windowWidth>770 ? 0.3 : 0} sm={10} pl={windowWidth>770 ? 0 : 1}>
                <h5 style={{ marginBottom: 0,fontSize:14  }}>Home Delivery</h5>
                  <p style={{ marginTop: 0,fontSize:12  }}>8-10 day(s)</p>
 
                </Grid>
              </Grid>

              <Grid container>
                <Grid item md={2} mt={-1} sm={2}>
                  <img src={COD} style={{width:40,height:40}} />
                    {/* <HandshakeSharpIcon color='disabled'  style={{fontSize:40}} /> */}
                </Grid>
                <Grid item md={10} pt={0.3} sm={10} pl={windowWidth>770 ? 0 : 1}>
                <h5 style={{ marginBottom: 0,fontSize:14 }}>Cash On Delivery</h5>
 
                </Grid>
              </Grid>


            </Grid>

          </Grid>
        </Grid>
      </div>
      <br />
      <CarouselComponent/>
      <br />

      <Footer />
    </div>
  );
};

export default ProductDetails;
