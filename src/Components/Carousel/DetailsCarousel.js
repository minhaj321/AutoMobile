import React from 'react'
import {Grid} from '@mui/material';
import LoginBg from './../../Assets/loginBg.jpg'
import './Carousel.css'
import CardComponent from './../Card/Card';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const DetailsCarousel = () => {
  return (
    <div>

      <Grid container justifyContent={'space-evenly'}>
        
      <Grid item md={1}>
      <div className='prev_div'>
        <ArrowCircleLeftOutlinedIcon fontSize='large' style={{fontSize:100,color:'red'}}  />
</div>
      </Grid>
      <Grid item md={2}>
    <CardComponent hideLike={true} />
      </Grid>
      <Grid item md={2} >
    <CardComponent hideLike={true}/>
    </Grid>
    <Grid item md={2}>
    <CardComponent hideLike={true} />
      </Grid>
      <Grid item md={2} >
    <CardComponent hideLike={true}/>
    </Grid>      
      <Grid item md={1}>
        <div className='next_div'>
        <ArrowCircleRightOutlinedIcon fontSize='large' style={{fontSize:100,color:'red'}}  />
        </div>
      </Grid>

      </Grid>
</div>

    )
}

export default DetailsCarousel