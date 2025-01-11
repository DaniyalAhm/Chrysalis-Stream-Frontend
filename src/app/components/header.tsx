"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './header.module.css'; // Assuming you will use a CSS module
import Link from 'next/link';
export default function BasicButtons() {


  




  return (

    <div>
    <div className={styles.container}>

      <Link href ={{
            pathname: `/login`,
            query: {
              id: "login", // pass the id 
            },
          }} passHref     >
        <Button variant="contained" data-id="teacherLogin" className={styles.teacherLogin} sx={{backgroundColor:'#cf5610'} } >Login</Button>

      </Link>



      <Link href ={{
            pathname: `/signUp`,
            query: {
              id: "signUp", // pass the id 
            },
          }}  passHref     >
      <Button variant="contained"  data-id="teacherCreate" className={styles.teacherLogin}sx={{backgroundColor:'#cf5610'}}>Sign up</Button>

      </Link>


      </div>

      <img
        className={styles.logo}
        src="/images/logo.png"
        alt="Logo"
      />
      </div>
  );
}
