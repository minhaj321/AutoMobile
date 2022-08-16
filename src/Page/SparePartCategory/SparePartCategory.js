import React from 'react'
import {Grid,Button} from '@mui/material';
import Footer from '../../Components/Footer/footer';
import Header from '../../Components/Header/Header';
import './SparePartCategory.css';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { InputGroup,FormControl,Form,Option } from 'react-bootstrap';
import CarouselComponent from '../../Components/Carousel/Carousel';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AfterHeader from '../../Components/AfterHeader/AfterHeader';
import SearchIcon from './../../Assets/searchIcon.png'
const windowWidth = window.outerWidth;

const SparePartCategory = () => {
  return (
    <div>
        <Header/>

        <AfterHeader/>

            <div className='spare_parts_bgimg_div'>
                <p className='spare_parts_div_txt'>Spare Parts</p>
            </div>
            <div className='spare_part_details'>
                <br/><br/>
                <Grid container>
                    <Grid item md={12} textAlign={'left'} ml={windowWidth>430 ? 10 : 2}>
                        <span style={ windowWidth>375 ? {fontSize:18,paddingRight:10,borderRight:'1px solid #2B2B2B'} : {fontSize:16,paddingRight:5,borderRight:'1px solid #2B2B2B'}}>Spare Parts</span>
                        <span style={ windowWidth>375 ? {fontSize:18,paddingLeft:10,paddingRight:10,borderRight:'1px solid #2B2B2B'} : {fontSize:16,paddingLeft:5,paddingRight:5,borderRight:'1px solid #2B2B2B'}}>Additionally</span>
                        <span style={windowWidth>375 ? {fontSize:18,paddingLeft:10} : {fontSize:16,paddingLeft:5}}>Price</span>
                        
                    </Grid>
                    
                    <Grid item md={7} sm={8} textAlign={'left'} xs={12} ml={windowWidth>430 ? 10 : 2}>
                    <br/>
                    <InputGroup style={{width:'80%'}}>
    <FormControl
        style={{border:"1px solid #2B2B2B"}}
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
    <InputGroup.Text style={{backgroundColor:'#2B2B2B',border:"1px solid #2B2B2B"}} id="basic-addon1">
        <img src={SearchIcon} width={25} height={25} />
    </InputGroup.Text>
  </InputGroup>
                    </Grid>
                    <Grid item md={4} sm={8} xs={12} ml={windowWidth>770 ? -10 : windowWidth>430 ? 10 : 2} mt={-2}>
                    <br/>
                    <Form.Select aria-label="Default select example"
                     style={{width:'80%',border:'1px solid #2B2B2B'}}>
  <option>Make and Model of car</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
                    </Grid>
                </Grid>
                <br/>
                <Grid container ml={windowWidth>430 ? 6 : 0}>
                    <Grid item md={4}>
                        <ul className='spare_part_category_list' style={{listStyleType:'none',textAlign:'left'}}>
                            <li>Exhaust System</li>
                            <li>Engine and engine elements</li>
                            <li>Optional equipment</li>
                            <li>Interior</li>
                            <li>Optics</li>
                        </ul>
                    </Grid>
                    <Grid item md={4}>
                    <ul className='spare_part_category_list' style={{listStyleType:'none',textAlign:'left'}}>
                            <li>Exhaust System</li>
                            <li>Engine and engine elements</li>
                            <li>Optional equipment</li>
                            <li>Interior</li>
                            <li>Optics</li>
                        </ul>
                    <br/>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>
            <CarouselComponent/>
            <br/><br/>

        <Footer/>
    </div>
  )
}

export default SparePartCategory