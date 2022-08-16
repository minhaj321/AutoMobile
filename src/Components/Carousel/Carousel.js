import React from 'react'
import {Grid} from '@mui/material';
import LoginBg from './../../Assets/car-parts-repair-garage.png'
import './Carousel.css'
import CarouselCard from './../Card/CarouselCard';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Forward from './../../Assets/forward.png'
import Backward from './../../Assets/backward.png'
const windowWidth = window.outerWidth;


const CarouselComponent = () => {
  return (
    <div>
            <Grid conatiner textAlign='left' pl={5} mt={5}>
                <p style={{fontSize:28,fontWeight:'bold'}}>Most Sale Parts</p>
            </Grid>

      <Grid container>
        
      <Grid item md={1} sm={1} xs={1}>
      <div className='prev_div'>
        {/* <ArrowCircleLeftOutlinedIcon fontSize='large' style={windowWidth>1030 ? {fontSize:100,color:'red'} : windowWidth>770 ?  {fontSize:80,color:'red'} :  windowWidth>430 ? {fontSize:60,color:'red'} : {fontSize:28,color:'red'} }  /> */}
        <img src={Backward}  style={windowWidth>1030 ? {height:50,marginTop:100,width:50,color:'red'} : windowWidth>770 ?  {height:50,width:50,color:'red'} :  windowWidth>430 ? {height:35,width:35,color:'red'} : {height:20,width:20,color:'red'} }  />
      </div>

      </Grid>
      <Grid item container md={10}  sm={10} xs={10} justifyContent={'space-evenly'}>

    <CarouselCard hideLike={true} />
    <CarouselCard hideLike={true}/>
    <CarouselCard hideLike={true}/>
      
      </Grid>
      <Grid item md={1} sm={1} xs={1}>
        <div className='next_div'>
        <img src={Forward}  style={windowWidth>1030 ? {height:50,marginTop:100,width:50,color:'red'} : windowWidth>770 ?  {height:50,width:50,color:'red'} :  windowWidth>430 ? {height:35,width:35,color:'red'} : {height:20,width:20,color:'red'} }  />
        {/* <ArrowCircleRightOutlinedIcon fontSize='large' style={windowWidth>1030 ? {fontSize:100,color:'red'} : windowWidth>770 ?  {fontSize:80,color:'red'} :  windowWidth>430 ? {fontSize:60,color:'red'} : {fontSize:28,color:'red'} }  /> */}

        </div>
      </Grid>

      </Grid>
</div>
  )
}

export default CarouselComponent