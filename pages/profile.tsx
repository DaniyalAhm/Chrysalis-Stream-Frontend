import React from 'react'
import Button from '@mui/material/Button';
import styles from '../styles/profile.module.css'; // Importing the CSS module
import BasicTable from '../src/app/components/Table.tsx'
import { color } from 'framer-motion';
import Link from 'next/link';

export default function profile (){


    return (

        <div>



<div className ={styles.table}>
            <BasicTable></BasicTable>
            </div>

        <div className={styles.container}>
        <Link href ={{
            pathname: `/assign_videos`,
            query: {
              id: "Teacherlogin", // pass the id 
            },
          }} passHref >
      
      <Button variant="contained"  data-id="studentLogin" className={styles.button}sx={{backgroundColor:'#cf5610'}}
  
      
  >Assign Videos</Button>
      </Link>

            <Button variant="contained"  data-id="studentLogin" className={styles.button}sx={{backgroundColor:'#cf5610'}}>Add Student</Button>


      <Button variant="contained"  data-id="studentLogin" className={styles.button}sx={{backgroundColor:'#cf5610'}}>View All Videos </Button>
        </div>
        </div>
    )



}