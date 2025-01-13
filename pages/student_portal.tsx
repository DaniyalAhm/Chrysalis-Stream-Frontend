"use client";

import * as React from 'react';
import { useState } from 'react';
import Video_cards from "@/app/components/video_cards";
import styles from './header.module.css'; // Importing the CSS module
import Grow from '@mui/material/Grow';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Videos from './/Videos_Assigned';
import Stack from '@mui/material/Stack';

export default function Student_portal(){
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);

  const buttonStyle = {backgroundColor:"black"};

  function handleClick() {
    setChecked((prev) => !prev);
    
  }
  function handleClick2() { 
    setChecked2((prev) => !prev);
  }


  function handleClick3() { 
    setchecked3((prev) => !prev);
  }

    return(
       <div> 

      <img
        className={styles.logo}
        src="/images/logo.png"
        alt="Logo"
      />



          

        <Box
        sx={{
            backgroundColor:"pink",
            height:'20%',
            width:'20%',
            display:'flex',
            marginTop:'10%',
            marginLeft:'5%',
            paddingTop: '5%',
            borderRadius:'8px',
            paddingBottom: '5%',
            alignItems:'center',
            flexDirection:'column'}}>




      <Stack  spacing={1}>
       <Button sx={buttonStyle} variant="contained">DashBoard</Button>
       <Button sx={buttonStyle} variant="contained">Courses</Button>
       <Button sx={buttonStyle} variant="contained">Groups</Button>
       <Button sx={buttonStyle} variant="contained">Calender</Button>
       <Button sx={buttonStyle} variant="contained">Inbox</Button>
       <Button sx={buttonStyle} variant="contained">History</Button>
       <Button sx={buttonStyle} variant="contained">Help</Button>

      </Stack>









        </Box>

     
          <img src="/images/temp_photo.jpg" className={styles.homepage_photo}  ></img>

            </div>     
                );
}
