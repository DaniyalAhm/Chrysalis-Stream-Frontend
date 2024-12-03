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


export default function Signup() {
  return (
    <Box component="section" sx={{ p: 2, backgroundColor:"#f3d4c7", display:'flex', flexDirection:'column', gap:"20px", borderRadius:"10px", height: "20%" }}>
     
     <TextField sx={{backgroundColor:'#ffffff'}}
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
        />

     <TextField sx={{backgroundColor:'#ffffff'}}
          required
          id="outlined-required"
          label="Username"
          defaultValue=""
        />
        <TextField sx={{backgroundColor:'#ffffff'}}
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
 
        <TextField sx={{backgroundColor:'#ffffff'}} required id="outlined-search" label="Search Intitution" type="search" />
        <Button variant="contained" sx={{backgroundColor:'#000000'}}>Sign Up</Button>

 
     
    </Box>
  );
}
