import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginBg from './../../Assets/car-parts-repair-garage.png';
import {Grid} from '@mui/material'
import './Card.css'
import {useNavigate } from 'react-router-dom'

export default function CarouselCard({hideLike}) {

  var navigate = useNavigate();
  
    const verticalLineStyle={fontSize:20,color:'gray',marginTop:10,marginLeft:2,marginRight:4};

  const windowWidth = window.outerWidth;

  return (
    <Card sx={windowWidth>1030 ? { maxWidth: 300 } : windowWidth>770 ? {maxWidth:260} : windowWidth>430 ? {maxWidth:200} : windowWidth>380 ? {maxWidth:110} :  windowWidth>330 ? {maxWidth:100} : {maxWidth:83} } style={{border:'1px solid darkgray',borderRadius:5}}
    onClick={()=>navigate('/ProductDetails')}>
      <CardMedia
        component="img"
        height={windowWidth>770 ? "194" : windowWidth>430 ? '160' : '100'}  
        image={LoginBg}
        alt="Paella dish"
      />
      <CardContent>

        <Grid container>
            <Grid item md={7} sm={hideLike ? 12 : 7} textAlign={'left'} mt={-2} xs={hideLike ? 12 : 7}>

            <p style={windowWidth>430 ? {fontSize:25,marginBottom:0} : {fontSize:13,marginBottom:0} }>Spare Parts</p>
            <h5 style={windowWidth>430 ? {} : {fontSize:12,marginTop:10} }>100 Dirhams</h5>
            <span style={windowWidth>430 ? {color:'gray',fontSize:15} : {color:'gray',fontSize:12} }>Dubai <span style={verticalLineStyle}> I</span> 3 days ago</span>
            </Grid>
{!hideLike &&
            <Grid item sm={5}>
        <IconButton aria-label="add to favorites" style={{float:'right'}} >
<FavoriteIcon className='favourite_icon'/>
        </IconButton>
            </Grid>
}
        </Grid>
            
      </CardContent>
    </Card>
  );
}
