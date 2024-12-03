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
export default function BasicButtons() {

  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  function handleClick() {
    setChecked((prev) => !prev);
  }
  function handleClick2() { 
    setChecked2((prev) => !prev);
  }


  return (

    <div>
    <div className={styles.container}>

        <Button variant="contained" data-id="teacherLogin" className={styles.button} onClick={handleClick2}  >Sign In </Button>
        <Grow in={checked2}>
          <Box
            sx={{
              transformOrigin: '0 0 0',
              top: "5%",
              left: 0,
              display: 'flex',
            }}
          >
            <Signup />
          </Box>
        </Grow>


      <Button variant="contained"  data-id="signUp" className={styles.button} onClick={handleClick} >Sign up</Button>

        <Grow in={checked}>
          <Box
            sx={{
              display: 'flex',
              transition: 'margin-top 0.3s ease', // Smooth transition
              top: "5%",

              marginTop: checked2 ? '-200px' : '0px', // Move down when Grow is active

            }}
          >
            <Signup />
          </Box>
        </Grow>





    <Box sx={{ 
       display:"flex", 
       justifyContent: 'center', // Horizontal alignment
       alignItems: 'center',    // Vertical alignment    
      transition: 'margin-top 0.3s ease', // Smooth transition
      marginTop: checked ? '-30px' : '0', // Move down when Grow is active

      
      }}>
      <Link href ={{
            pathname: `/resetPassword`,
            query: {
              id: "signup", // pass the id 
            },
          }}  passHref     >

      <Button variant="contained"  data-id="studentLogin" className={styles.button}>Forgot Username/Password</Button>
      </Link>
    </Box>
  
      </div>

      <img
        className={styles.logo}
        src="/images/logo.png"
        alt="Logo"
      />
      </div>
  );
}
