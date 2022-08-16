import React from 'react'
import {Grid,Button,List,Divider,ListItem,ListItemText} from '@mui/material';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/footer';
import SettingsAccordion from '../../Components/Accordian/Accordian';

const windowWidth = window.outerWidth;

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

const Settings = () => {
  return (
    <div style={{color:'#0F0F0F'}}>
        <Header/>
        <br/><br/>
        <Grid container>
            <Grid item md={3} sm={3} pl={0.5} xs={12}>

        <List sx={style} component="nav" aria-label="mailbox folders"
        style={{border:'1px solid #707070',paddingTop:0,paddingBottom:0}}
        >
  <ListItem button style={{background:'#FD4441',color:'white'}}>
    <ListItemText primary="Setting" />
  </ListItem>
  <Divider />
  <ListItem button divider style={{background:'#F1F1F1'}}>
    <ListItemText primary="My Profile" />
  </ListItem>
  <ListItem button style={{background:'#F1F1F1',fontWeight:600}}>
    <ListItemText primary="Logout"  />
  </ListItem>
  <Divider light />
  {
    windowWidth>430 &&
  <ListItem button style={ {height:300,background:'#F1F1F1'} }>
    <ListItemText primary="" />
  </ListItem>
  }
</List>
<br/><br/>
            </Grid>

            <Grid item md={8} sm={8} textAlign={'left'} pl={windowWidth>430 ? 2 : 0.5} xs={12}>
                <h2>My Profile</h2>
                <SettingsAccordion/>
            </Grid>
        </Grid>
        <Footer/>
    </div>
  )
}

export default Settings