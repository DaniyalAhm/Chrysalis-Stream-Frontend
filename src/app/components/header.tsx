"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './header.module.css'; // Assuming you will use a CSS module
import Link from 'next/link';
import Grow from '@mui/material/Grow';
import { FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Signup from './signUp';
import SignIn from './signIn';
import Forgot_Id from './forgot_id' ;
export default function BasicButtons() {

  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }



  function handleClick() {
    
    setChecked((prev) => !prev);

    }
    
  
  function handleClick2() { 
    setChecked2((prev) => !prev);
  }


  function handleClick3() { 
    setchecked3((prev) => !prev);
  }


  return (

    <div>
    <div className={styles.container}>


       <Button variant="contained"
       sx={{display: 'flex', transition: 'margin-top 0.3s ease',

    

        marginBottom: checked ? "20%": "5%"}}
       
       data-id="signIn" className={styles.button} onClick={handleClick} >Sign in</Button>

        <Grow in={checked}>
        <Box sx={{ display: 'flex', transition: 'margin-top 0.5s ease', // Smooth transitiontop: "5%",
      
        }}>
          <SignIn />

        </Box>
        </Grow>

        <Button variant="contained" 
          sx={{display: 'flex', transition: 'margin-top 0.5s ease',
            marginTop: checked ? "50px": "-250px",
            marginBottom: checked2  ? "20px": "20px"}}
        
        data-id="signUp" className={styles.button} onClick={handleClick2} >Sign up</Button>

        <Grow in={checked2} >
        <Box sx={{ display: 'flex', transition: 'margin-top 0.5s ease', // Smooth transitiontop: "5%",
      

        }}>
          <Signup />

        </Box>
        </Grow>

        <Button variant="contained" 
          sx={{display: 'flex', transition: 'margin-top 0.5s ease',
            marginTop: checked2? "50px": "-300px",
            marginBottom: checked2  ? "20px": "20px"}}
            data-id="forgot" className={styles.button} onClick={handleClick3} >Forgot Username/Password</Button>
      
      <Grow in={checked3} >
        <Box sx={{ display: 'flex', transition: 'margin-top 0.5s ease', // Smooth transitiontop: "5%",
      

        }}>
          <Forgot_Id />

        </Box>

        </Grow>
      </div>


      </div>
  );
}
