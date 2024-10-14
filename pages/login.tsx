"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css'; // Importing the CSS module
export default function TeacherLogin() {
  const router = useRouter();
  const { id } = router.query; // Accessing the query parameters
  let T = 'Hello'
  const age = ['School1', 'School2' ]; // Static list of values
  switch(id){
    case('Teacherlogin'):
         T = "Hola Teacher!";
        break;
    case('Studentlogin'):
         T = "Hola Student!";
        break;

  }



  function handleSubmit() {
    event.preventDefault();  // Prevent the default form submit behavior
    (id === "Teacherlogin") ? router.push("/profile") : router.push("/student_portal");
  }

  function handleChange(){

    console.log("Hawk Tuah, Spit on that thang")
  }

  console.log(id);
  return (
    <div className={styles.container}>
      {/* This will be our container */}

      <form onSubmit={handleSubmit} className={styles.form}>
      <h1>{T} </h1>
      <FormControl sx={{ m: 1, minWidth: 200, backgroundColor: 'white', position: 'relative' , borderRadius: '5px'}}>
      <InputLabel sx={{margin:"30px", fontSize: "20px"}}> Select School </InputLabel>


        <Select

          value={age}
          label="Age"
          onChange={handleChange}
        >
                   {age.map((num) => 
            <MenuItem value={num}>       {num}
            
            </MenuItem>
          )
          }
        </Select>
      </FormControl>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>Email:</label>
          <input
            type="text"
            name="Username"
            id="username"
            value={id}
            className={styles.input}
          />
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={id}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
