import React,{useState} from 'react'
import './Header.css';
import {Grid,Modal,Box,Typography} from '@mui/material';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import {useNavigate} from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '4%',
    left: '2%',
    width:'96%',
    // transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    pl:0,
    pt:1,
  };

const windowWidth = window.outerWidth;

const Header = () => {

    const [open,setOpen] =useState(false);
    var navigate = useNavigate();

    const handleOpen = ()=>{
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false);
    }

  return (
    <div className='header_main'>

{/* modal code */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <ul className='header_list_modal'>
                    <li>Dubai</li>
                    <li  onClick={()=>navigate('/Home')}>Home</li>
                    <li onClick={()=>navigate('/SparePartCategory')}
                    >{`Spare Parts`}</li>
                    <li onClick={()=>navigate('/TireDisk')} 
                    >{`Tire & Disk`}</li>
                    <li className='car_scrap'
                     onClick={()=>navigate('/CarForScrab')}
                    >Car For Scrap</li>
                </ul>
  </Box>
</Modal>

        <Grid container>

            <Grid item md={2} mt={1} sm={2} xs={10} textAlign='left'>
                <h1>LOGO</h1>    
            </Grid>
            {
    windowWidth<430 &&
    <Grid item xs={2} pt={1.5}>
        <MenuSharpIcon  onClick={handleOpen} />
    </Grid>
}
            {
                windowWidth>430 &&
            <Grid item md={10} container sm={10} xs={12} >
                <ul className='header_list'>
                    <li style={{color:'#949598'}}><LocationOnTwoToneIcon style={{position:'relative',top:0,color:'#949598'}}/>Dubai</li>
                    <li className='under'  onClick={()=>navigate('/Home')}>Home</li>
                    <li onClick={()=>navigate('/SparePartCategory')}
                    >{`Spare Parts`}</li>
                    <li onClick={()=>navigate('/TireDisk')} 
                    >{`Tire & Disk`}</li>
                    <li className='car_scrap'
                     onClick={()=>navigate('/CarForScrab')}
                    >Car For Scrap</li>
                </ul>
            </Grid>
            }

</Grid>

    </div>
  )
}

export default Header