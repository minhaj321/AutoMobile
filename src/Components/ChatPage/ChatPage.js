import React,{useState} from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/Header'
import AfterHeader from '../AfterHeader/AfterHeader'
import {Grid,Button} from '@mui/material';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FirstImg from './../../Assets/carouselImg.png'
import SecondImg from './../../Assets/secondImg.png'
import ThirdImg from './../../Assets/mechanic-preparing-check-list.png'
import FourthImg from './../../Assets/fourthImg.png'
import FifthImg from './../../Assets/carouselImg.png'
import AvatarImg from './../../Assets/id-photo2.png';
import SendImg from './../../Assets/sendImg.png';
import TelegramIcon from '@mui/icons-material/Telegram';
import {InputGroup,FormControl} from 'react-bootstrap'
import AttachFileSharpIcon from '@mui/icons-material/AttachFileSharp';
import PhoneImg from './../../Assets/PhoneImg.png';
import CloseImg from './../../Assets/CloseImg.png'
import AttachIcon from './../../Assets/attachClip.svg'
import './ChatPage.css'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

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

const windowWidth = window.outerWidth;

const taglineBtn ={
    paddingRight:17,
    paddingLeft:17,
    paddingTop:17,
    paddingBottom:17,
    marginLeft:5
}


const ChatPage = () => {

  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(anchorEl1 ? null : event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };

  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? 'simple-popper' : undefined;


  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? 'simple-popper' : undefined;




  return (
    <div>

    {/* popover 1 */}


    <Popper id={id1} open={open1} anchorEl={anchorEl1}>
        <Box style={windowWidth>770 ? {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:140,marginTop:-20,borderRadius:2} : 
      windowWidth>430 ? 
      {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:100,marginTop:-20,borderRadius:2}
      :
      {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:70,marginTop:-20,borderRadius:2}
      }>
            <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Delete Chat</p>
            <p style={{padding:8,marginBottom:0}}>Block User</p>
        </Box>
      </Popper>

    {/* end of popover 1 */}

    {/* popover 2 */}

    
    <Popper id={id2} open={open2} anchorEl={anchorEl2}>
        <Box style={windowWidth>430 ? {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:220,marginTop:-20,borderRadius:2}:
      {fontSize:13,width:200,background:'#fff',border:'1px solid black',marginRight:40,marginTop:-20,borderRadius:2}
      }>
        <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Delete Chat</p>
        <p style={{borderBottom:'1px solid black',padding:8,marginBottom:0}}>Mark as read</p>
        <p style={{padding:8,marginBottom:0}}>Block User</p>
        </Box>
      </Popper>

    {/* end of popover 2 */}

        <Header/>
        <AfterHeader/>
        <br/>
        <Grid container>

            <Grid textAlign={'left'} className='scrollBar_DIV' sm={4.7} container ml={1} item md={4.7} >
            <Grid item md={12} xs={12} style={{background:'#F1F1F1'}}>
                <p style={{marginLeft:10,marginTop:10,fontWeight:'bold'}}>INBOX</p>
            <hr/>
            </Grid>
            <Grid item md={12} xs={12} mt={-1} style={{background:'#F1F1F1'}}>
                <p style={{marginLeft:10,fontWeight:500}}>QUICK FILTER</p>
  <Grid item container ml={1} mb={1} mt={-1}>
      <Btn radius={30} bgColor='#FD4441' text='All' style={taglineBtn}/>
      <Btn radius={30} bgColor='#2B2B2B' text='Unread Chats'  style={taglineBtn}/>
      <Btn radius={30} bgColor='#2B2B2B' text='Read Chats'  style={windowWidth>770 ? taglineBtn : windowWidth>430 ? {...taglineBtn,marginTop:10} : windowWidth>330 ? taglineBtn : {...taglineBtn,marginTop:10} }/>
  </Grid>
  {/* <br/> */}
            </Grid>
{/* 1st */}
            <Grid item container style={{borderTop:'1px solid #2B2B2B',background:'#444444',color:'#fff',paddingTop:5}}>
                <Grid item md={2} sm={3} xs={windowWidth>370 ? 2 : 2.5}>
                <AccountCircleIcon  style={{fontSize:60,color:'#2B2B2B',marginTop:8}} />
                </Grid>
                <Grid item md={8} sm={7} xs={windowWidth>370 ? 8 : 7.5}>
                <h5 style={{ marginBottom: 0 }}>John</h5>
                  <p style={{ marginBottom: 0,fontSize:14 }}>Part Description</p>
                  <p style={{ marginTop: 0,fontSize:14  }}>Last Message</p>
                </Grid>
                <Grid item md={2} xs={2} textAlign='right' pr={1}>
                  <p style={{ marginBottom: 0,fontSize:14,color:'#fff' }}>22:40</p>
                  <p style={{ marginTop: 25 }}>
                      <MoreVertTwoToneIcon onClick={handleClick2} />
                  </p>

                </Grid>
            </Grid>
{/* 2nd */}
<Grid item container style={{borderTop:'1px solid #2B2B2B',paddingTop:5}}>
                <Grid item md={2} sm={3} xs={windowWidth>370 ? 2 : 2.5}>
                <AccountCircleIcon  style={{fontSize:60,color:'#2B2B2B',marginTop:8}} />
                </Grid>
                <Grid item md={8} sm={7} xs={windowWidth>370 ? 8 : 7.5}>
                <h5 style={{ marginBottom: 0 }}>John</h5>
                  <p style={{ marginBottom: 0,fontSize:14 }}>Part Description</p>
                  <p style={{ marginTop: 0,fontSize:14  }}>Last Message</p>
                </Grid>
                <Grid item md={2} xs={2} textAlign='right' pr={1}>
                  <p style={{ marginBottom: 0,fontSize:14,color:'#949598' }}>22:40</p>
                  <p style={{ marginTop: 25 }}>
                      <MoreVertTwoToneIcon/>
                  </p>

                </Grid>
            </Grid>
{/* 3rd */}
<Grid item container style={{borderTop:'1px solid #2B2B2B',paddingTop:5}}>
                <Grid item md={2} sm={3} xs={windowWidth>370 ? 2 : 2.5}>
                <AccountCircleIcon  style={{fontSize:60,color:'#2B2B2B',marginTop:8}} />
                </Grid>
                <Grid item md={8} sm={7} xs={windowWidth>370 ? 8 : 7.5}>
                <h5 style={{ marginBottom: 0 }}>John</h5>
                  <p style={{ marginBottom: 0,fontSize:14 }}>Part Description</p>
                  <p style={{ marginTop: 0,fontSize:14  }}>Last Message</p>
                </Grid>
                <Grid item md={2} xs={2} textAlign='right' pr={1}>
                  <p style={{ marginBottom: 0,fontSize:14,color:'#949598' }}>22:40</p>
                  <p style={{ marginTop: 25 }}>
                      <MoreVertTwoToneIcon/>
                  </p>

                </Grid>
            </Grid>
{/* 4th */}
<Grid item container style={{borderTop:'1px solid #2B2B2B',paddingTop:5}}>
                <Grid item md={2} sm={3} xs={windowWidth>370 ? 2 : 2.5}>
                <AccountCircleIcon  style={{fontSize:60,color:'#2B2B2B',marginTop:8}} />
                </Grid>
                <Grid item md={8} sm={7} xs={windowWidth>370 ? 8 : 7.5}>
                <h5 style={{ marginBottom: 0 }}>John</h5>
                  <p style={{ marginBottom: 0,fontSize:14 }}>Part Description</p>
                  <p style={{ marginTop: 0,fontSize:14  }}>Last Message</p>
                </Grid>
                <Grid item md={2} xs={2} textAlign='right' pr={1}>
                  <p style={{ marginBottom: 0,fontSize:14,color:'#949598' }}>22:40</p>
                  <p style={{ marginTop: 25 }}>
                      <MoreVertTwoToneIcon/>
                  </p>

                </Grid>
            </Grid>
{/* 5th */}
<Grid item container style={{borderTop:'1px solid #2B2B2B',paddingTop:5}}>
                <Grid item md={2} sm={3} xs={windowWidth>370 ? 2 : 2.5}>
                <AccountCircleIcon  style={{fontSize:60,color:'#2B2B2B',marginTop:8}} />
                </Grid>
                <Grid item md={8} sm={7} xs={windowWidth>370 ? 8 : 7.5}>
                <h5 style={{ marginBottom: 0 }}>John</h5>
                  <p style={{ marginBottom: 0,fontSize:14 }}>Part Description</p>
                  <p style={{ marginTop: 0,fontSize:14  }}>Last Message</p>
                </Grid>
                <Grid item md={2} xs={2} textAlign='right' pr={1}>
                  <p style={{ marginBottom: 0,fontSize:14,color:'#949598' }}>22:40</p>
                  <p style={{ marginTop: 25 }}>
                      <MoreVertTwoToneIcon/>
                  </p>

                </Grid>
            </Grid>

            </Grid>

            <Grid item mt={windowWidth>430 ? 0 : 2}  xs={12} md={7} sm={7} ml={windowWidth>430 ? 0 : 1} style={{border:'1px solid #2B2B2B'}} container>
                <Grid md={12} item textAlign='left'>


                    <Grid item xs={12} md={12} style={{backgroundColor:'#2B2B2B',height:60,borderBottom:'1px solid #2B2B2B'}} pt={1} pl={2}>
                        <Grid container>
                        <Grid md={6} sm={6} xs={6} item>
                          <img src={AvatarImg} height={40} width={40} />
                          <span style={{color:'#fff',fontSize:20,fontWeight:600,marginLeft:20}}>John</span>
                        </Grid>
                        <Grid md={6} sm={6} xs={6} item  textAlign='right' >
                          <img src={PhoneImg} style={{marginRight:10,marginTop:10}} height={20} width={20} />
                          <MoreVertTwoToneIcon onClick={handleClick1} style={{fontSize:25,marginRight:10,marginTop:10,color:'#fff'}} />


{/* popover */}

                          {/* <img src={MenuImg} height={30} width={30} /> */}
                          <img src={CloseImg} style={{marginRight:10,marginTop:10}} height={20} width={20} />
                        </Grid>
                        </Grid>

                    </Grid>
                    <Grid item md={12} xs={12} style={{backgroundColor:'#F1F1F1',height:40,borderBottom:'1px solid #2B2B2B'}} pt={1} pl={2}>
                    <span style={{fontWeight:600}}>100 Dirhams</span>
                    <span style={{marginLeft:30}}>Parts Description</span>
                    </Grid>
                <Grid container mt={1} style={{borderBottom:'1px solid #2B2B2B'}} pb={1}>
                <Grid item md={2.4} pl={1} sm={4} xs={4}>
                  <img src={FirstImg} height={80} width={'90%'} />
                </Grid>
                <Grid item md={2.4} pl={1} sm={4} xs={4}>
                <img src={SecondImg} height={80} width={'90%'} />
                </Grid>
                <Grid item md={2.4} pl={1} sm={4} xs={4}>
                <img src={ThirdImg} height={80} width={'90%'} />
                </Grid>
                <Grid item md={2.4} pl={1} sm={6} xs={6} mt={windowWidth > 770 ? 0 : 1}>
                <img src={FourthImg} height={80} width={'90%'} />
                </Grid>
                <Grid item md={2.4} pl={1} sm={6} xs={6} mt={windowWidth > 770 ? 0 : 1}>
                <img src={FifthImg} height={80} width={'90%'} />
                </Grid>


                </Grid>

                <Grid container >
                <div style={{height:310,width:'100%',textAlign:'center'}}>
                  <br/>
                    <span style={{border:'1px solid #949598',borderRadius:5,padding:7,paddingLeft:20,paddingRight:20,fontSize:14,fontWeight:600}}>TODAY</span>
                    <p style={{fontSize:14,fontWeight:600,marginTop:10}}>SMS at 10:50 pm</p>
                    </div>
                </Grid>

                <Grid container>
                <div style={{background:'#2B2B2B',color:'white',width:'100%',textAlign:'left'}}>
                    <p style={{paddingLeft:10,marginTop:8}}>Chat to know more!</p>
                    </div>
                </Grid>
                <Grid item container ml={1} mb={1} mt={1}>
                    <Btn radius={30} bgColor='#FD4441' text='Hello' style={taglineBtn}/>
                    <Btn radius={30} bgColor='#FD4441' text='Is it available?'  style={taglineBtn}/>
                    <Btn radius={30} bgColor='#FD4441' text='Ok'  style={taglineBtn}/>
                    <Btn radius={30} bgColor='#FD4441' text='No problem'  style={windowWidth>380 ? taglineBtn : {...taglineBtn,marginTop:10}}/>
                    <Btn radius={30} bgColor='#FD4441' text='Interested '  style={windowWidth>770 ? taglineBtn : {...taglineBtn,marginTop:10}}/>
                 </Grid>
                <Grid container style={{borderTop:'1px solid #2B2B2B'}} pb={1}>
                    <Grid item md={11} pt={1} sm={11} xs={10.5}>
            <InputGroup >
            <InputGroup.Text style={{backgroundColor:'white',border:'none'}} id="basic-addon1">
        {/* <AttachFileSharpIcon style={{color:'#949598',transform: 'rotate(45deg)'}} /> */}
        <img src={AttachIcon} style={{width:25,height:25,color:'#949598'}} />
        
    </InputGroup.Text>

    <FormControl
    className='msg_input'
        style={{border:"none"}}
      placeholder="Type a message"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

                    </Grid>
                    <Grid item md={1} pt={1} sm={1} xs={1.5}>
                        <TelegramIcon style={{borderRadius:50,color:'white',fontSize:35,padding:5,background:'#2B2B2B'}} />
                    </Grid>
                </Grid>

                </Grid>
                <Grid container>

                </Grid>
            </Grid>

        </Grid>
        <br/>

        <Footer/>
    </div>
  )
}

export default ChatPage