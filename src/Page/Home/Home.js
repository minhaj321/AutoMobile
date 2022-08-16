import React,{useState} from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/footer';
import {Grid,Button,Box} from '@mui/material';
import CarouselComponent from '../../Components/Carousel/Carousel';
import AfterHeader from '../../Components/AfterHeader/AfterHeader';
import FirstImg from './../../Assets/carouselImg.png';
import SecondImg from './../../Assets/secondImg.png';
import ThirdImg from './../../Assets/thirdImg.png';
import FourthImg from './../../Assets/fourthImg.png';
import FifthImg from './../../Assets/car-parts.png';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RedClose from './../../Assets/redClose.png';
import SearchIcon from './../../Assets/searchIcon.png'
import { InputGroup,FormControl,Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const verticalLineStyle={fontSize:20,color:'#949598',marginTop:10,marginLeft:2,marginRight:4};
const windowWidth = window.outerWidth;

const Home = () => {

const [open,setOpen] = useState(true);
    var navigate = useNavigate();
const handleClose = () =>{
    setOpen(false)
}

const handleOpen = () =>{
    setOpen(true)
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: windowWidth>430 ? '70%' : '90%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius:5
    // p: 2,
  };

    return (
    <div>

{/* modal */}

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Grid container p={2} style={{borderRadius:5,borderBottom:'1px solid black',background:'#F1F1F1'}}>
                <Grid item md={6} sm={5} xs={10}>
                    <h4>City Selection</h4>
                </Grid>

                {
                    windowWidth<430 &&
                <Grid item xs={2}>
                    <img src={RedClose} onClick={handleClose} style={{height:15,float:'right',marginTop:10}} />
                </Grid>
                }


                <Grid item md={5} sm={6} xs={11}>
                <InputGroup style={{width:'100%'}}>
    <FormControl
        style={{border:"1px solid #2B2B2B"}}
      placeholder=""
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
    <InputGroup.Text style={{border:"1px solid #2B2B2B",background:'#FD4441'}} id="basic-addon1">
    <img src={SearchIcon} width={25} height={25} />
    </InputGroup.Text>
  </InputGroup>

                </Grid>
                {
                    windowWidth>430 &&
                <Grid item md={1} sm={1}>
                    <img src={RedClose} onClick={handleClose} style={{height:15,float:'right',marginTop:10}} />
                </Grid>
                }
            </Grid>
            <Grid container >
                <Grid item md={12} sm={12}  xs={12}>
                <h4 style={{marginTop:10,marginBottom:10,marginLeft:30}}>District</h4>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                    <ul style={{listStyleType:'none'}} className='home_modal_ul'>
                        <li>Dubai</li>
                        <li>Siberia</li>
                        <li>Crimean</li>
                        <li>Dubai</li>
                        <li>Siberia</li>
                        <li>Crimean</li>
                    </ul>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                    <ul style={{listStyleType:'none'}} className='home_modal_ul'>
                        <li>Dubai</li>
                        <li>Siberia</li>
                        <li>Crimean</li>
                        <li>Dubai</li>
                        <li>Siberia</li>
                        <li>Crimean</li>
                    </ul>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                    <ul style={{listStyleType:'none'}} className='home_modal_ul'>
                        <li>Dubai</li>
                        <li>Siberia</li>
                        <li>Crimean</li>
                        <li>Dubai</li>
                        <li>Siberia</li>
                        <li>Crimean</li>
                    </ul>
                </Grid>
            </Grid>
        </Box>
      </Modal>

{/* end of modal */}

        <Header/>
        <AfterHeader/>
        <CarouselComponent/>
        <br/>
        <hr/>
        <br/>
        <h2 style={{textAlign:'left',marginLeft:30}}>Fresh Recommendation</h2>
        <div className='home_recommendation_div'>
            <hr/>
            <Grid container mt={2} textAlign={'left'} style={{border:'2px solid #949598',borderRadius:5}}>
                <Grid item md={3.5} sm={5} xs={12}>
                <img src={FirstImg} style={windowWidth>430 ? {borderTopLeftRadius:5,borderBottomLeftRadius:5} : {} } height={200} width={'100%'} />
                </Grid>
                <Grid item md={8.5} pt={windowWidth>430 ? 3 : 0} pl={windowWidth>430 ? 2 : 0}  sm={7} xs={12} textAlign={windowWidth>430 ? 'left' :'center'}>
                <p style={{fontSize:30,marginBottom:0}}>Spare Parts</p>
            <h4 style={{marginTop:10}}>100 Dirhams</h4>
            <p style={{color:'#949598',marginTop:10,fontSize:15}}>Dubai <span style={verticalLineStyle}> I</span> 3 days ago</p>

                </Grid>
            </Grid>
            <Grid container mt={2} textAlign={'left'} style={{border:'2px solid #949598',borderRadius:5}}>
                <Grid item md={3.5} sm={5} xs={12}>
                <img src={ThirdImg} style={windowWidth>430 ? {borderTopLeftRadius:5,borderBottomLeftRadius:5} : {} } height={200} width={'100%'} />
                </Grid>
                <Grid item md={8.5} pt={windowWidth>430 ? 3 : 0} pl={windowWidth>430 ? 2 : 0}  sm={7} xs={12} textAlign={windowWidth>430 ? 'left' :'center'}>
                <p style={{fontSize:30,marginBottom:0}}>Spare Parts</p>
            <h4 style={{marginTop:10}}>100 Dirhams</h4>
            <p style={{color:'#949598',marginTop:10,fontSize:15}}>Dubai <span style={verticalLineStyle}> I</span> 3 days ago</p>

                </Grid>
            </Grid>
            <Grid container mt={2} textAlign={'left'} style={{border:'2px solid #949598',borderRadius:5}}>
                <Grid item md={3.5} sm={5} xs={12}>
                <img src={SecondImg} style={windowWidth>430 ? {borderTopLeftRadius:5,borderBottomLeftRadius:5} : {} } height={200} width={'100%'} />
                </Grid>
                <Grid item md={8.5} pt={windowWidth>430 ? 3 : 0} pl={windowWidth>430 ? 2 : 0}  sm={7} xs={12} textAlign={windowWidth>430 ? 'left' :'center'}>
                <p style={{fontSize:30,marginBottom:0}}>Spare Parts</p>
            <h4 style={{marginTop:10}}>100 Dirhams</h4>
            <p style={{color:'#949598',marginTop:10,fontSize:15}}>Dubai <span style={verticalLineStyle}> I</span> 3 days ago</p>

                </Grid>
            </Grid>
            <Grid container mt={2} textAlign={'left'} style={{border:'2px solid #949598',borderRadius:5}}>
                <Grid item md={3.5} sm={5} xs={12}>
                <img src={FifthImg} style={windowWidth>430 ? {borderTopLeftRadius:5,borderBottomLeftRadius:5} : {} } height={200} width={'100%'} />
                </Grid>
                <Grid item md={8.5} pt={windowWidth>430 ? 3 : 0} pl={windowWidth>430 ? 2 : 0}  sm={7} xs={12} textAlign={windowWidth>430 ? 'left' :'center'}>
                <p style={{fontSize:30,marginBottom:0}}>Spare Parts</p>
            <h4 style={{marginTop:10}}>100 Dirhams</h4>
            <p style={{color:'#949598',marginTop:10,fontSize:15}}>Dubai <span style={verticalLineStyle}> I</span> 3 days ago</p>

                </Grid>
            </Grid>
            <Grid container mt={2} textAlign={'left'} style={{border:'2px solid #949598',borderRadius:5}}>
                <Grid item md={3.5} sm={5} xs={12}>
                <img src={FourthImg} style={windowWidth>430 ? {borderTopLeftRadius:5,borderBottomLeftRadius:5} : {} } height={200} width={'100%'} />
                </Grid>
                <Grid item md={8.5} pt={windowWidth>430 ? 3 : 0} pl={windowWidth>430 ? 2 : 0}  sm={7} xs={12} textAlign={windowWidth>430 ? 'left' :'center'}>
                <p style={{fontSize:30,marginBottom:0}}>Spare Parts</p>
            <h4 style={{marginTop:10}}>100 Dirhams</h4>
            <p style={{color:'#949598',marginTop:10,fontSize:15}}>Dubai <span style={verticalLineStyle}> I</span> 3 days ago</p>

                </Grid>
            </Grid>
            <br/><br/>
            <Button variant='contained' style={
            windowWidth>430 ?
            {
            color:'white',
            backgroundColor:'#FD4441',
            borderRadius:30,
            paddingLeft:80,
            paddingRight:80,
            paddingTop:30,
            paddingBottom:30,
            fontSize:25,
            height:25,
            textTransform:'capitalize',
        }
        :
        {
            color:'white',
            backgroundColor:'#FD4441',
            borderRadius:30,
            paddingLeft:40,
            paddingRight:40,
            paddingTop:20,
            paddingBottom:20,
            fontSize:18,
            height:25,
            textTransform:'capitalize',
        }
        }>
            Show More
        </Button>
        <br/><br/>
            <p>The ad base of spare parts store and individuals is a wide choice in order to buy auto parts for your car</p>
        <br/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home