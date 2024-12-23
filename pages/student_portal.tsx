"use client";

import * as React from 'react';
import { useState } from 'react';
import Video_cards from "@/app/components/video_cards";
import styles from './header.module.css'; // Importing the CSS module
import Grow from '@mui/material/Grow';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';



export default function Student_portal(){
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);

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
                <div className= {styles.container}>

              
              <Box sx={{ display: 'flex', transition: 'margin-top 0.5s ease',}}> // Smooth transitiontop: "5%",

              </Box>

              
          <Button variant="contained" 
          sx={{display: 'flex', transition: 'margin-top 0.5s ease',
            marginTop: checked2? "50px": "-300px",
            marginBottom: checked2  ? "20px": "20px"}}
            data-id="forgot" className={styles.button} onClick={handleClick3} >Assigned Videos</Button>

          <Button variant="contained" 
          sx={{display: 'flex', transition: 'margin-top 0.5s ease',
            marginTop: checked2? "50px": "-300px",
            marginBottom: checked2  ? "20px": "20px"}}
            data-id="forgot" className={styles.button} onClick={handleClick3} >Grades</Button>


              
          <Button variant="contained" 
          sx={{display: 'flex', transition: 'margin-top 0.5s ease',
            marginTop: checked2? "50px": "-300px",
            marginBottom: checked2  ? "20px": "20px"}}
            data-id="forgot" className={styles.button} onClick={handleClick3} >Message Teacher</Button>
            </div>

            <img src="/images/temp_photo.jpg" className={styles.homepage_photo}  ></img>
            </div>     
                );
}
