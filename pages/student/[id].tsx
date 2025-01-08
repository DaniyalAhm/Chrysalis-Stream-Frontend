"use-client";

import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import axios from 'axios'
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';

export default function Student(){
  const router = useRouter();
  const id = router.query;
  const [profile, setProfile] = useState(null);
  const [assignments, setAssignments] = useState([])
  const [grade, setGrade]= useState("N/A");

  useEffect(() => {
    
     axios.get(`http://localhost:5000/student/${id.id}`).then( (response) =>{
  
    setProfile(response.data)
    console.log(response.data)
    setAssignments(response.data.assignments);
    setGrade(response.data.grade);
    }).catch(error =>
    {
      console.error(error);
      
    }

    )


    

  },[id]) 



  return (
  <Box sx={{ marginTop:"20%", marginLeft:"10%"}}>
        <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}
        
        >
        <h1> Your assignments: </h1>
        <Stack >
        {assignments.map((a, index) =>
        
        <Button variant="outlined" id={index}>{a}</Button>
  

        )}

        </Stack>
        </Grid>

        <Grid size={{ xs: 4, md: 2 }} offset={{ md: 'auto' }}>
        <h1>
        {`Grade: ${grade}`}
        </h1>

        </Grid>

        </Grid>




  </Box>


  )

}
