import React from 'react'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/Header'
import CarouselComponent from '../../Components/Carousel/Carousel'
import './TireDisk.css';
import {Grid,Button,TextField,MenuItem} from '@mui/material';
import AfterHeader from './../../Components/AfterHeader/AfterHeader';

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

  const selectStyle ={
    borderRadius:2,
    border:'1px solid #949598',
    width:'100%',
    backgroundColor:'white',
    borderRadius:10
  }
  
  const btnStyle={fontWeight:700,borderRadius:20,backgroundColor:'#FD4441',width:'100%',marginBottom:5}

  const windowWidth = window.outerWidth;

const TireDisk = () => {
  return (
    <div>
                <Header/>

      <AfterHeader/>

<div className='tire_disks_bgimg_div'>
    <p className='tire_disks_div_txt'>Tires/Disk</p>
</div>
<div className='tire_disk_details'>
    <Grid contianer textAlign={'left'}>
        <Grid item md={1.3} sm={3} xs={5} style={{background:'#FD4441',borderTopLeftRadius:5,padding:5,border:'0px solid #2B2B2B'}}>
            <p style={{color:'white',marginLeft:5,marginTop:2,height:12,fontWeight:700}}>Tires/disks</p>
        </Grid>
    </Grid>
    <br/>

<Grid container textAlign={'left'}>
    <Grid item md={3.6} ml={windowWidth>770 ? 3 : 1} sm={3.6} xs={11.4}>
  <p style={{fontSize:13,marginBottom:5}}>Brand</p>
        <TextField
          style={selectStyle}
          id="filled-select-currency"
          select
          label=""
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant='outlined'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Grid>
    <Grid item md={3.6} ml={windowWidth>770 ? 3 : 1} sm={3.6} xs={11.4}>
  <p style={{fontSize:13,marginBottom:5}}>Model</p>
        <TextField
          style={selectStyle}
          id="filled-select-currency"
          select
          label=""
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant='outlined'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Grid>
    <Grid item md={3.8} ml={windowWidth>770 ? 3 : 1} sm={3.6} xs={11.4}>
  <p style={{fontSize:13,marginBottom:5}}>Generation</p>
        <TextField
          style={selectStyle}
          id="filled-select-currency"
          select
          label=""
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant='outlined'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Grid>

</Grid>


{/* second row */}
<Grid container textAlign={'left'} mt={1}>
<Grid item md={1.8} sm={1.8} ml={windowWidth>770 ? 3 : 1}  xs={5.7}>
  <p style={{fontSize:13,marginBottom:5}}>Price from</p>
        <TextField
          style={{...selectStyle,borderTopRightRadius:0,borderBottomRightRadius:0}}
          id="filled-select-currency"
          label=""
          variant='outlined'
        />
    </Grid>
<Grid item md={1.8} sm={1.8}  xs={5.7}>
  <p style={{fontSize:13,marginBottom:5}}>Before</p>
        <TextField
          style={{...selectStyle,borderTopLeftRadius:0,borderBottomLeftRadius:0}}
          id="filled-select-currency"
          label=""
          variant='outlined'
        />
    </Grid>

<Grid item md={1.8}  sm={1.8} ml={windowWidth>770 ? 3 : 1}  xs={5.7}>
  <p style={{fontSize:13,marginBottom:5}}>Year from</p>
        <TextField
          style={{...selectStyle,borderTopRightRadius:0,borderBottomRightRadius:0}}
          id="filled-select-currency"
          select
          label=""
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant='outlined'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Grid>
<Grid item md={1.8} sm={1.8}  xs={5.7}>
  <p style={{fontSize:13,marginBottom:5}}>Before</p>
        <TextField
          style={{...selectStyle,borderTopLeftRadius:0,borderBottomLeftRadius:0}}
          id="filled-select-currency"
          select
          label=""
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant='outlined'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Grid>

    <Grid item md={1.8}  sm={1.7} ml={windowWidth>770 ? 3 : 1} mt={2.4}  xs={5.6}>
  <p style={{fontSize:13,marginBottom:5}}></p>
        <TextField
          style={selectStyle}
          id="filled-select-currency"
          select
          label=""
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant='outlined'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Grid>
<Grid item md={1.8} ml={windowWidth>380 ? 2 : 0.5} sm={1.7} xs={5.5}>
  <p style={{fontSize:13,marginBottom:5}}>Fuel</p>
        <TextField
          style={{...selectStyle}}
          id="filled-select-currency"
          select
          label=""
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant='outlined'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Grid>


</Grid>

{/* third row */}
<Grid container textAlign={'left'} mt={1}>

<Grid item md={1.8}  sm={1.8} ml={windowWidth>770 ? 3 : 1} xs={5.7}>
  <p style={{fontSize:13,marginBottom:5}}>Volume from</p>
        <TextField
          style={{...selectStyle,borderTopRightRadius:0,borderBottomRightRadius:0}}
          id="filled-select-currency"
          select
          label=""
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant='outlined'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Grid>
<Grid item md={1.8} sm={1.8}  xs={5.7}>
  <p style={{fontSize:13,marginBottom:5}}>Before</p>
        <TextField
          style={{...selectStyle,borderTopLeftRadius:0,borderBottomLeftRadius:0}}
          id="filled-select-currency"
          select
          label=""
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant='outlined'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Grid>
<Grid item md={3.6}  sm={3.6} ml={windowWidth>770 ? 3 : 1} xs={11.4}>
  <p style={{fontSize:13,marginBottom:5}}>Drive Unit</p>
        <TextField
          style={selectStyle}
          id="filled-select-currency"
          select
          label=""
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
          variant='outlined'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Grid>

<Grid item md={2.3} lg={1.8}  sm={3.6} ml={windowWidth>770 ? 3 : 1} mt={4} xs={12}>
  
    <input id='unsold' type='checkbox' style={{width:17,height:17}} />
    <label for='unsold' style={windowWidth>1030 ? {fontSize:13,marginLeft:4} : windowWidth>770 ? {fontSize:13,marginLeft:3} : {fontSize:13,marginLeft:10} }>Unsold</label>
    <input id='withPhotos' type='checkbox' style={{marginLeft:4,width:17,height:17,border:'none'}} />
    <label style={windowWidth>1030 ? {fontSize:13,marginLeft:4} : windowWidth>770 ? {fontSize:13,marginLeft:3} : {fontSize:13,marginLeft:10}}>With Photo</label>
    </Grid>
    <Grid item md={1.3} lg={1.8}  mt={4} textAlign='center' sm={12} ml={windowWidth>1030 ? 2 : 0}  xs={12}>
    <Button style={windowWidth>770 ? btnStyle : windowWidth > 430 ? {...btnStyle,marginTop:10,width:'30%'} : {...btnStyle,width:'50%'} }  variant="contained">Show</Button>
</Grid>

</Grid>
<br/><br/>

{/* end of third row */}
</div>
<br/>
<CarouselComponent/>
<br/><br/>

<Footer/>

    </div>
  )
}

export default TireDisk