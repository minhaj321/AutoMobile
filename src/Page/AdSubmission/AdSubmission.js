import React from 'react'
import './AdSubmission.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/footer';
import { Grid,Button,TextField,Avatar,MenuItem } from '@mui/material';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import AvatarImg from './../../Assets/id-photo2.png';
import PicImg from './../../Assets/PicImg.png'
import {useNavigate} from 'react-router-dom';

const selectStyle ={
  borderRadius:2,
  border:'1px solid #949598',
  width:'97%'
}

const windowWidth = window.outerWidth;

const AdSubmission = () => {

  var naviagte = useNavigate();
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <div>
    <Header/>
    <br/><br/>
          <h2>POST AD NOW</h2>
      <div className='addSubmission_center_div'>
        <div className='addSubmission_box'>
    
  <Grid container textAlign={'left'} pl={2}>

  
  <Grid item md={12}  xs={12} sm={12}>
  <p>CHOOSE PART</p>
  <p style={{fontSize:13,marginBottom:5}}>Category</p>
        <TextField
          style={selectStyle}
          id="filled-select-currency"
          select
          label="Select"
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
</Grid>

<Grid item md={12}  xs={12} sm={12}>
  <p>PRODUCT DETAILS</p>
  <p style={{fontSize:13,marginBottom:5}}>AD Title</p>
            <TextField style={{width:'97%',outline:'1px solid #949598',borderRadius:2}}
            color='secondary'
            type={'text'}
             variant="filled" />
             <p style={{color:'#949598',float:'right',marginRight:40,marginTop:0,fontSize:12}}>0/100</p>
</Grid>

<Grid item md={12}  xs={12} sm={12}>
  <p style={{fontSize:13,marginBottom:5}}>AD Description</p>
            <TextField style={{width:'97%',outline:'1px solid #949598',borderRadius:2}}
            multiline
            rows={6}
            color='secondary'
            type={'text'}
             variant="filled" />
             <p style={windowWidth>410 ? {color:'#949598',float:'left',marginTop:0,fontSize:12} : {color:'#949598',float:'left',marginTop:0,fontSize:12,width:'60%'}}>Include condition, features and reason for selling</p>
             <p style={windowWidth>410 ? {color:'#949598',float:'right',marginRight:40,marginTop:0,fontSize:12} : {color:'#949598',float:'right',marginRight:0,marginTop:0,fontSize:12,width:'20%'}}>0/100</p>

</Grid>

<Grid item md={12}  xs={12} sm={12}>
  <p style={{fontSize:13,marginBottom:5}}>Type</p>
  <TextField
          style={selectStyle}
          id="filled-select-currency"
          select
          label="Select"
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
</Grid>

<Grid item md={6}  xs={12} sm={6}>
  <p style={{fontSize:13,marginBottom:5}}>OEM number</p>
            <TextField style={{width:'95%',outline:'1px solid #949598',borderRadius:2}}
            color='secondary'
            type={'text'}
             variant="filled" />
</Grid>

<Grid item md={6}  xs={12} sm={6}>
  <p style={{fontSize:13,marginBottom:5}}>Make</p>
            <TextField style={{width:'94%',outline:'1px solid #949598',borderRadius:2}}
            color='secondary'
            type={'text'}
             variant="filled" />
</Grid>

<Grid item md={6}  xs={12} sm={6}>
  <p style={{fontSize:13,marginBottom:5}}>Model</p>
            <TextField style={{width:'95%',outline:'1px solid #949598',borderRadius:2}}
            color='secondary'
            type={'text'}
             variant="filled" />
</Grid>

<Grid item md={6}  xs={12} sm={6}>
  <p style={{fontSize:13,marginBottom:5}}>Body Number</p>
            <TextField style={{width:'94%',outline:'1px solid #949598',borderRadius:2}}
            color='secondary'
            type={'text'}
             variant="filled" />
</Grid>

<Grid item md={6}  xs={12} sm={6}>
  <p style={{fontSize:13,marginBottom:5}}>Condition</p>
  <TextField
          style={{...selectStyle,width:'95%'}}
          id="filled-select-currency"
          select
          label="Select"
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
</Grid>

<Grid item md={6}  xs={12} sm={6}>
  <p style={{fontSize:13,marginBottom:5}}>Delivery</p>
  <TextField
          style={{...selectStyle,width:'95%'}}
          id="filled-select-currency"
          select
          label="Select"
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

</Grid>

<Grid item md={12} ml={-1} mt={2} xs={12}>
  <hr/>
</Grid>

<Grid item md={12}  xs={12} sm={12}>
  <p>SET A PRICE</p>
  <p style={{fontSize:13,marginBottom:5}}>Price</p>
            <TextField style={{width:'97.5%',outline:'1px solid #949598',borderRadius:2}}
            color='secondary'
            className='price_input'
            type={'text'}
             variant="filled" />
</Grid>


<Grid item md={12} ml={-1} mt={2} xs={12}>
  <hr/>
</Grid>

<Grid item md={12} container xs={12}>
  <Grid item md={12} xs={12}>
  <p>UPLOAD UPTO 20 PHOTOS</p>
  </Grid>
  {/* image div */}
  <Grid item md={1} sm={2} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>
  {/* image div */}
  <Grid item md={1} sm={2} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>  {/* image div */}
  <Grid item md={1} sm={2} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>  {/* image div */}
  <Grid item md={1} sm={2} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />

</label>
</div>

  </Grid>  {/* image div */}
  <Grid item md={1} sm={2} xs={3} mt={windowWidth>430 ? 0 : 5}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>  {/* image div */}
  <Grid item md={1} sm={2} xs={3} mt={windowWidth>430 ? 0 : 5}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>  {/* image div */}
  <Grid item md={1} sm={2}  xs={3} mt={windowWidth>770 ? 0 : 5}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
</label>
</div>

  </Grid>  {/* image div */}
  <Grid item md={1} sm={2}  xs={3} mt={windowWidth>770 ? 0 : 5}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>  {/* image div */}
  <Grid item md={1} sm={2} xs={3} mt={windowWidth>770 ? 0 : 5}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>  {/* image div */}
  <Grid item md={1} sm={2} xs={3} mt={windowWidth>770 ? 0 : 5}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>
  <Grid item md={2}></Grid>
    {/* image div */}
    <Grid item md={1} sm={2} xs={3} mt={windowWidth>770 ? 1 : 5}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>
    {/* image div */}
    <Grid item md={1} sm={2} xs={3} mt={windowWidth>770 ? 1 : 5}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>
    {/* image div */}
    <Grid item md={1} sm={2} xs={3} mt={windowWidth>770 ? 1 : 5}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>
    {/* image div */}
    <Grid item md={1} sm={2} mt={windowWidth>770 ? 1 : 5} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>
    {/* image div */}
    <Grid item md={1} sm={2} mt={windowWidth>770 ? 1 : 5} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>

  </Grid>
    {/* image div */}
    <Grid item md={1} sm={2} mt={windowWidth>770 ? 1 : 5} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>
  </Grid>
    {/* image div */}
    <Grid item md={1} sm={2} mt={windowWidth>770 ? 1 : 5} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>
  </Grid>
    {/* image div */}
    <Grid item md={1} sm={2} mt={windowWidth>770 ? 1 : 5} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>
  </Grid>
    {/* image div */}
    <Grid item md={1} sm={2} mt={windowWidth>770 ? 1 : 5} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>
  </Grid>
    {/* image div */}
    <Grid item md={1} sm={2} mt={windowWidth>770 ? 1 : 5} xs={3}>
<div className='image_div'>
<input type="file" id="upload" hidden />
<label for="upload" id='label'>
<img src={PicImg}  className='camera_icon'  style={{width:'100%',height:'100%'}} />
{/* <CameraEnhanceOutlinedIcon fontSize='large' className='camera_icon'  /> */}
</label>
</div>
  </Grid>


<br/><br/><br/><br/><br/><br/>
</Grid>


<Grid item md={12} ml={-1} mt={2} xs={12}>
  <hr/>
</Grid>

<Grid item md={12} xs={11.6}>
  <p>LOCATION</p>
  <p style={{fontSize:13,marginBottom:5}}>State</p>
  <TextField
          style={selectStyle}
          id="filled-select-currency"
          select
          label="Select"
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
</Grid>

<Grid item md={12} xs={11.6}>
  <p style={{fontSize:13,marginBottom:5}}>City</p>
  <TextField
          style={selectStyle}
          id="filled-select-currency"
          select
          label="Select"
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
</Grid>

<Grid item md={12} xs={11.6}>
  <p style={{fontSize:13,marginBottom:5}}>Address</p>
            <TextField style={{width:'97%',outline:'1px solid #949598',borderRadius:2}}
            color='secondary'
            multiline
            rows={6}
            type={'text'}
             variant="filled" />
</Grid>

<Grid item md={12} xs={12} ml={-1} mt={2}>
  <hr/>
</Grid>

<Grid item md={12} xs={12}>
  <p>REVIEW YOUR DETAILS</p>
  <Grid container>
    <Grid item lg={1}  xs={2} sm={1} mt={2}>
    <Avatar
        alt="Remy Sharp"
        src={AvatarImg}
        sx={{ width: 76, height: 76 }}
        className='review_details_Avatar'
        // sx={{ width: 56, height: 56 }}
      />
    
    </Grid>
    
    <Grid item lg={11} md={11} sm={11} xs={9.5}>
    <p style={{fontSize:13,marginBottom:5}}>Name</p>
            <TextField style={{width:'97%',outline:'1px solid #949598',borderRadius:2}}
            color='secondary'
            type={'text'}
             variant="filled" />

    </Grid>
  
  </Grid>
            <p style={{color:'#949598',float:'left',marginTop:0,fontSize:12}}>Your Phone Number</p>
             <p style={{color:'#949598',float:'right',marginRight:40,marginTop:0,fontSize:12}}>+321 1231 123 123</p>
</Grid>



  </Grid>

      <br/><br/>
          <Button className='ad_submit_btn' style={{borderRadius:20,backgroundColor:'#FD4441',width:'15%',marginTop:5,marginBottom:5}}  variant="contained"
          onClick={()=>naviagte('/MyAds')}
          >Post Now</Button>
      <br/><br/>
        <br/><br/>
        </div>
      </div>
      <br/><br/><br/>
    <Footer/>
    </div>
  )
}

export default AdSubmission