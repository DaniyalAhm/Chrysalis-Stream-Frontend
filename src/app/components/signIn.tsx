"use client";


import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const router = useRouter();
  const [formData, setForm] = useState({});
  const [response, setResponse] = useState({})
  const [msg, setMsg] = useState("Please Enter Password")
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }


  function handleSubmit(){
    console.log(formData);
    const fetch = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:5000/login", formData)
        setResponse(response.data);

        if (response.data.message === "Login successful") {
          setMsg("Success!");
          router.push(`/${response.data.redirect}`);
        } else {
          setMsg("Failed");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        setMsg("An error occurred. Please try again.");
      }
    }

    fetch()
    }
  return (
    <Box component="section" sx={{ p: 2, backgroundColor:"#f3d4c7", display:'flex', flexDirection:'column', gap:"20px", borderRadius:"10px", height: "20%", marginRight:"10%",
    }}>
  

     <TextField sx={{backgroundColor:'#ffffff'}}
          required
          id="outlined-required"
          label="Username"
          type="username"
          defaultValue=""

          name="username" // Add this attribute
          value={formData.username}
          onChange={handleChange}

        />
        <TextField sx={{backgroundColor:'#ffffff'}}
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password" // Add this attribute
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}

        />
 

 
        <Button variant="contained"
        sx={{backgroundColor:'black'}}
        onClick={handleSubmit}


        > Sign In</Button>
      <div>{msg}</div> 
    </Box>
  );
}
