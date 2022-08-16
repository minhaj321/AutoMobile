import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/footer'
import CardComponent from './../../Components/Card/Card';
import CarouselComponent from './../../Components/Carousel/Carousel.js';
import {Grid} from '@mui/material';
import './Favourite.css';

const windowWidth = window.outerWidth;

const Favourite = () => {
  return (
    <div>
        <Header/>

        <div className='favourite_title_div'>
            <h1>FAVOURITE</h1>
        </div>

        <div className='favourite_cards_div'>
            <Grid container  mt={2}>
                <Grid item md={3.8} sm={3.8} pl={1} xs={12}>
        <CardComponent/>
                    </Grid> 
                    <Grid item md={3.8} sm={3.8} pl={1} xs={12}>
        <CardComponent/>
                    </Grid> 
                    <Grid item md={3.8} sm={3.8} pl={1} xs={12}>
        <CardComponent/>
                    </Grid> 
            </Grid>
            <Grid container  mt={2}>
                <Grid item md={3.8} sm={3.8} pl={1} xs={12}>
        <CardComponent/>
                    </Grid> 
                    <Grid item md={3.8} sm={3.8} pl={1} xs={12}>
        <CardComponent/>
                    </Grid> 
                    <Grid item md={3.8} sm={3.8} pl={1} xs={12}>
        <CardComponent/>
                    </Grid> 
            </Grid>
            
        </div>
        <br/>
            <br/>
            <CarouselComponent/>
<br/><br/><br/>
        <Footer/>
    </div>
  )
}

export default Favourite