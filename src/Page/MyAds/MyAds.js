import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Grid,Button,Badge } from '@mui/material';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/footer';
import AfterHeader from '../../Components/AfterHeader/AfterHeader';
import bgImg from './../../Assets/myAdsCards.png';
import './MyAds.css';
import { InputGroup,FormControl,Form,Option } from 'react-bootstrap';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const taglineBtn ={
    paddingRight:17,
    paddingLeft:17,
    paddingTop:17,
    paddingBottom:17,
    marginLeft:5
}

const windowWidth = window.outerWidth;

const Btn=({bgColor,text,radius=0,style={}})=>{
    return(
        <Button variant='contained' style={{
            color:'white',
            backgroundColor:bgColor,
            borderRadius:radius,
            paddingLeft:30,
            paddingRight:30,
            // width:100,
            fontSize:14,
            height:25,
            textTransform:'capitalize',
            ...style
        }}>
            {text}
        </Button>
    )
}

const MyAds = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
  

    const verticalLineStyle={fontSize:20,color:'#949598',marginTop:10,marginLeft:2,marginRight:4};

    return (
    <div>
        <Header/>
        <AfterHeader/>
        <br/>
        <div className='myAds_main'>
            <Grid container>
                <Grid item md={3} sm={6} mb={windowWidth>770 ? 0 : 2} xs={12}>
            <InputGroup >
            <InputGroup.Text style={{backgroundColor:'white',borderTop:"1px solid #2B2B2B",borderLeft:"1px solid #2B2B2B",borderBottom:"1px solid #2B2B2B"}} id="basic-addon1">
        <SearchTwoToneIcon  style={{fontSize:25,color:'#949598'}} />
    </InputGroup.Text>

    <FormControl
        style={{border:"1px solid #2B2B2B",borderLeftWidth:0}}
      placeholder="Search by ad title"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  </Grid>
  <Grid item md={9} container textAlign='right' justifyContent={windowWidth>430 ? 'end' : 'start'} sm={9} xs={12} >
      <Btn radius={30} bgColor='#FD4441' text='View All' style={taglineBtn}/>
      <Btn radius={30} bgColor='#2B2B2B' text='Active Ads (1)'  style={taglineBtn}/>
      <Btn radius={30} bgColor='#2B2B2B' text='Inactive Ads (1)'   style={windowWidth>380 ? taglineBtn : {...taglineBtn,marginTop:5}}/>
      <Btn radius={30} bgColor='#2B2B2B' text='Pending Ads (1)'  style={windowWidth>430 ? taglineBtn : {...taglineBtn,marginTop:5}}/>
  </Grid>
            </Grid>
            <Grid mt={2} container style={{border:'2px solid #949598',borderRadius:5}}>
                <Grid item md={1.3} sm={2} xs={12}>                 
                    <img src={bgImg} style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}} height={windowWidth>430 ? 130 : 180} width={'100%'} />
                </Grid>

                <Grid item md={10.7} sm={10} container mt={windowWidth>1024 ? 5 : windowWidth>430 ? 4 : 0}>
                    {/* <Grid container mt={5}> */}
                        <Grid item md={2} sm={2} xs={12}>
                            <h3>Spare Parts</h3>
                        </Grid>
                        <Grid item md={2} xs={12} mt={windowWidth>770 ? 0.5 : windowWidth>430 ? 2 : 0} pl={windowWidth>770 ? 6 : 0} sm={2}>
                            <p style={{fontSize:17,color:'#949598'}}>100 Dirhams</p>
                        </Grid>
                        <Grid item md={2} xs={12} mt={windowWidth>770 ? 0.5 : windowWidth>430 ? 2 : -1} pl={windowWidth>770 ? 6 : 0} sm={2}>
                            {/*  */}
                            <Btn text={'Active'} bgColor={'#0E6661'} style={windowWidth>770 ? {width:100} : {width:80}} />
                        </Grid>
                        <Grid item md={3} xs={12} mt={0.5} pl={windowWidth>770 ? 6 : 0} sm={3.5}>
                            {/*  */}
                        <p style={{fontSize:17,color:'#949598'}}>This ad is currently live</p>
                        </Grid>
                        <Grid item md={3} xs={12} sm={2.5} mt={windowWidth>430 ? 0 : -2} style={{position:'relative'}}>
                        <p style={{color:'#949598',fontSize:15}}>Dubai <span style={verticalLineStyle}> I</span> 3 days ago</p>
                        <MoreHorizIcon onClick={handleClick} fontSize='medium' style={windowWidth>430  ? {position:'absolute',top:-30,right:10} : {position:'absolute',top:0,right:10}} />


                        {/* popover */}

                        <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box style={windowWidth>430 ? {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:70,borderRadius:2} : {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:30,borderRadius:2}}>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Edit Now</p>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Remove</p>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Deactivate</p>
            <p style={{padding:8,marginBottom:0}}>Mark as sold</p>
        </Box>
      </Popper>


                        </Grid>

                    {/* </Grid> */}
                </Grid>
            </Grid>
            <Grid mt={2} container style={{border:'2px solid #949598',borderRadius:5}}>
                <Grid item md={1.3} sm={2} xs={12}>                 
                    <img src={bgImg} style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}} height={windowWidth>430 ? 130 : 180} width={'100%'} />
                </Grid>

                <Grid item md={10.7} sm={10} container mt={windowWidth>1024 ? 5 : windowWidth>430 ? 4 : 0}>
                    {/* <Grid container mt={5}> */}
                        <Grid item md={2} sm={2} xs={12}>
                            <h3>Spare Parts</h3>
                        </Grid>
                        <Grid item md={2} xs={12} mt={windowWidth>770 ? 0.5 : windowWidth>430 ? 2 : 0} pl={windowWidth>770 ? 6 : 0} sm={2}>
                            <p style={{fontSize:17,color:'#949598'}}>100 Dirhams</p>
                        </Grid>
                        <Grid item md={2} xs={12} mt={windowWidth>770 ? 0.5 : windowWidth>430 ? 2 : -1} pl={windowWidth>770 ? 6 : 0} sm={2}>
                            {/*  */}
                            <Btn text={'Active'} bgColor={'#0E6661'} style={windowWidth>770 ? {width:100} : {width:80}} />
                        </Grid>
                        <Grid item md={3} xs={12} mt={0.5} pl={windowWidth>770 ? 6 : 0} sm={3.5}>
                            {/*  */}
                        <p style={{fontSize:17,color:'#949598'}}>This ad is currently live</p>
                        </Grid>
                        <Grid item md={3} xs={12} sm={2.5} mt={windowWidth>430 ? 0 : -2} style={{position:'relative'}}>
                        <p style={{color:'#949598',fontSize:15}}>Dubai <span style={verticalLineStyle}> I</span> 3 days ago</p>
                        <MoreHorizIcon onClick={handleClick} fontSize='medium' style={windowWidth>430  ? {position:'absolute',top:-30,right:10} : {position:'absolute',top:0,right:10}} />


                        {/* popover */}

                        <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box style={windowWidth>430 ? {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:70,borderRadius:2} : {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:30,borderRadius:2}}>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Edit Now</p>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Remove</p>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Deactivate</p>
            <p style={{padding:8,marginBottom:0}}>Mark as sold</p>
        </Box>
      </Popper>


                        </Grid>

                    {/* </Grid> */}
                </Grid>
            </Grid>
            <Grid mt={2} container style={{border:'2px solid #949598',borderRadius:5}}>
                <Grid item md={1.3} sm={2} xs={12}>                 
                    <img src={bgImg} style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}} height={windowWidth>430 ? 130 : 180} width={'100%'} />
                </Grid>

                <Grid item md={10.7} sm={10} container mt={windowWidth>1024 ? 5 : windowWidth>430 ? 4 : 0}>
                    {/* <Grid container mt={5}> */}
                        <Grid item md={2} sm={2} xs={12}>
                            <h3>Spare Parts</h3>
                        </Grid>
                        <Grid item md={2} xs={12} mt={windowWidth>770 ? 0.5 : windowWidth>430 ? 2 : 0} pl={windowWidth>770 ? 6 : 0} sm={2}>
                            <p style={{fontSize:17,color:'#949598'}}>100 Dirhams</p>
                        </Grid>
                        <Grid item md={2} xs={12} mt={windowWidth>770 ? 0.5 : windowWidth>430 ? 2 : -1} pl={windowWidth>770 ? 6 : 0} sm={2}>
                            {/*  */}
                            <Btn text={'Active'} bgColor={'#0E6661'} style={windowWidth>770 ? {width:100} : {width:80}} />
                        </Grid>
                        <Grid item md={3} xs={12} mt={0.5} pl={windowWidth>770 ? 6 : 0} sm={3.5}>
                            {/*  */}
                        <p style={{fontSize:17,color:'#949598'}}>This ad is currently live</p>
                        </Grid>
                        <Grid item md={3} xs={12} sm={2.5} mt={windowWidth>430 ? 0 : -2} style={{position:'relative'}}>
                        <p style={{color:'#949598',fontSize:15}}>Dubai <span style={verticalLineStyle}> I</span> 3 days ago</p>
                        <MoreHorizIcon onClick={handleClick} fontSize='medium' style={windowWidth>430  ? {position:'absolute',top:-30,right:10} : {position:'absolute',top:0,right:10}} />


                        {/* popover */}

                        <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box style={windowWidth>430 ? {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:70,borderRadius:2} : {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:30,borderRadius:2}}>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Edit Now</p>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Remove</p>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Deactivate</p>
            <p style={{padding:8,marginBottom:0}}>Mark as sold</p>
        </Box>
      </Popper>


                        </Grid>

                    {/* </Grid> */}
                </Grid>
            </Grid>
            <Grid mt={2} container style={{border:'2px solid #949598',borderRadius:5}}>
                <Grid item md={1.3} sm={2} xs={12}>                 
                    <img src={bgImg} style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}} height={windowWidth>430 ? 130 : 180} width={'100%'} />
                </Grid>

                <Grid item md={10.7} sm={10} container mt={windowWidth>1024 ? 5 : windowWidth>430 ? 4 : 0}>
                    {/* <Grid container mt={5}> */}
                        <Grid item md={2} sm={2} xs={12}>
                            <h3>Spare Parts</h3>
                        </Grid>
                        <Grid item md={2} xs={12} mt={windowWidth>770 ? 0.5 : windowWidth>430 ? 2 : 0} pl={windowWidth>770 ? 6 : 0} sm={2}>
                            <p style={{fontSize:17,color:'#949598'}}>100 Dirhams</p>
                        </Grid>
                        <Grid item md={2} xs={12} mt={windowWidth>770 ? 0.5 : windowWidth>430 ? 2 : -1} pl={windowWidth>770 ? 6 : 0} sm={2}>
                            {/*  */}
                            <Btn text={'Active'} bgColor={'#0E6661'} style={windowWidth>770 ? {width:100} : {width:80}} />
                        </Grid>
                        <Grid item md={3} xs={12} mt={0.5} pl={windowWidth>770 ? 6 : 0} sm={3.5}>
                            {/*  */}
                        <p style={{fontSize:17,color:'#949598'}}>This ad is currently live</p>
                        </Grid>
                        <Grid item md={3} xs={12} sm={2.5} mt={windowWidth>430 ? 0 : -2} style={{position:'relative'}}>
                        <p style={{color:'#949598',fontSize:15}}>Dubai <span style={verticalLineStyle}> I</span> 3 days ago</p>
                        <MoreHorizIcon onClick={handleClick} fontSize='medium' style={windowWidth>430  ? {position:'absolute',top:-30,right:10} : {position:'absolute',top:0,right:10}} />


                        {/* popover */}

                        <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box style={windowWidth>430 ? {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:70,borderRadius:2} : {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:30,borderRadius:2}}>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Edit Now</p>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Remove</p>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Deactivate</p>
            <p style={{padding:8,marginBottom:0}}>Mark as sold</p>
        </Box>
      </Popper>


                        </Grid>

                    {/* </Grid> */}
                </Grid>
            </Grid>
            </div>
            <br/>
        <Footer/>
        </div>
  )
}

export default MyAds