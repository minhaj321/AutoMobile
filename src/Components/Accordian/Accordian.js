import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Grid,TextField,Button} from '@mui/material';
import { Form } from 'react-bootstrap';
import './Accordian.css';

const windowWidth = window.outerWidth;

export default function SettingsAccordion() {
  return (
    <div style={{color:'#0F0F0F'}}>
        {/* name */}
      <Accordion>
        <AccordionSummary
         style={{backgroundColor:'#F1F1F1',border:'1px solid #707070'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Last Name and First Name</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:'1px solid #707070',background:'#F1F1F1',marginBottom:-15}}>
            <Grid container>
            <Grid item md={6} sm={6} xs={10}>
    <Form.Control type="text" className='input' placeholder="First Name" />
            </Grid>
            <Grid item md={6} sm={6} xs={10} mt={windowWidth>430 ? 0 : 1}>
            <Form.Control type="text" className='input' placeholder="Last Name" />
            </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'} mt={1} pr={2}>
            <Button variant='contained' style={{
            color:'white',
            backgroundColor:'#FD4441',
            paddingLeft:30,
            paddingRight:30,
            paddingTop:20,
            paddingBottom:20,
            fontSize:12,
            height:25,
            textTransform:'capitalize',
        }}>
            Update
        </Button>
            </Grid>
        </AccordionDetails>
      </Accordion>


      {/* phone */}
      <Accordion>
        <AccordionSummary
        style={{backgroundColor:'#F1F1F1',border:'1px solid #707070'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Telephone</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:'1px solid #707070',background:'#F1F1F1',marginBottom:-15}}>
        <Grid container>
            <Grid item md={6} sm={6} xs={10} >
    <Form.Control type="number" className='input' placeholder="Telephone" />
            </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'} mt={1} pr={2}>
            <Button variant='contained' style={{
            color:'white',
            backgroundColor:'#FD4441',
            paddingLeft:30,
            paddingRight:30,
            paddingTop:20,
            paddingBottom:20,
            fontSize:12,
            height:25,
            textTransform:'capitalize',
        }}>
            Update
        </Button>
            </Grid>
        </AccordionDetails>
      </Accordion>

      {/* email */}
      <Accordion>
        <AccordionSummary
        style={{backgroundColor:'#F1F1F1',border:'1px solid #707070'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Email</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:'1px solid #707070',background:'#F1F1F1',marginBottom:-15}}>
        <Grid container>
            <Grid item md={6} sm={6} xs={10} >
    <Form.Control type="text" className='input' placeholder="Email" />
            </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'} mt={1} pr={2}>
            <Button variant='contained' style={{
            color:'white',
            backgroundColor:'#FD4441',
            paddingLeft:30,
            paddingRight:30,
            paddingTop:20,
            paddingBottom:20,
            fontSize:12,
            height:25,
            textTransform:'capitalize',
        }}>
            Update
        </Button>
            </Grid>
        </AccordionDetails>
      </Accordion>

      {/* password */}
      <Accordion>
        <AccordionSummary
        style={{backgroundColor:'#F1F1F1',border:'1px solid #707070'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Password</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:'1px solid #707070',background:'#F1F1F1',marginBottom:-15}}>
        <Grid container>
            <Grid item md={6} sm={6} xs={10} >
    <Form.Control type="password" className='input' placeholder="Password" />
            </Grid>
            <Grid item md={6} sm={6} xs={10} mt={windowWidth>430 ? 0 : 1}>
            <Form.Control type="password" className='input' placeholder="Re-enter Password" />
            </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'} mt={1} pr={2}>
            <Button variant='contained' style={{
            color:'white',
            backgroundColor:'#FD4441',
            paddingLeft:30,
            paddingRight:30,
            paddingTop:20,
            paddingBottom:20,
            fontSize:12,
            height:25,
            textTransform:'capitalize',
        }}>
            Update
        </Button>
            </Grid>
        </AccordionDetails>
      </Accordion>

      {/* address */}
      <Accordion>
        <AccordionSummary
        style={{backgroundColor:'#F1F1F1',border:'1px solid #707070'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Address</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:'1px solid #707070',background:'#F1F1F1',marginBottom:-15}}>
        <Grid container>
            <Grid item md={12} sm={12} xs={10} >
    <Form.Control type="text" className='input' placeholder="Address" />
            </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'} mt={1} pr={2}>
            <Button variant='contained' style={{
            color:'white',
            backgroundColor:'#FD4441',
            paddingLeft:30,
            paddingRight:30,
            paddingTop:20,
            paddingBottom:20,
            fontSize:12,
            height:25,
            textTransform:'capitalize',
        }}>
            Update
        </Button>
            </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        style={{backgroundColor:'#F1F1F1',border:'1px solid #707070'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Event Norification</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:'1px solid #707070',background:'#F1F1F1',marginBottom:-15}}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        style={{backgroundColor:'#F1F1F1',border:'1px solid #707070'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Social Network</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:'1px solid #707070',background:'#F1F1F1',marginBottom:-15}}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        style={{backgroundColor:'#F1F1F1',border:'1px solid #707070'}}
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Show contact details to buyer</Typography>
          <input type='checkbox' style={{position:'absolute',right:15,width:20,height:20}} />
        </AccordionSummary>
        <AccordionDetails style={{border:'1px solid #707070',background:'#F1F1F1',marginBottom:-15}}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}