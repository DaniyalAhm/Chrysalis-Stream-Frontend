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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Student(){
  const router = useRouter();
  const id = router.query;
  const [profile, setProfile] = useState([]);
  const [courses, setCourses] = useState([])
  const [grade, setGrade]= useState("N/A");

  useEffect(() => {
    
     axios.get(`http://localhost:5000/student/${id.id}`).then( (response) =>{
  
    setProfile(response.data)
    console.log(response.data)
    setCourses(response.data.Courses);
    console.log(response.data.Courses)
  
    }).catch(error =>
    {
      console.error(error);
      
    })},[id]) 

  function handleSubmit(e){

    router.push(`/student/assignments/${id.id}-${e}`)


  }

  return (
  <Box sx={{ marginTop:"20%", marginLeft:"10%"}}>
        <Grid container spacing={2}>
        <Grid  offset={{ xs: 3, md: 0 }}
        
        >
        <h1> Your assignments: </h1>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Assignment</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course ) => (

            course.Assignments.map((row, index) =>  

            <TableRow key={row.Assignment_id}  disabled={row.Score === "N/A"}>
            
              <TableCell align="right">
              <Button onClick={(() => handleSubmit(row._id))} disabled={row.Score != "N/A"}> {row.Title ? row.Title : row.Assignment_id}</Button>
              </TableCell>


              <TableCell align="right">{course.Course_name}</TableCell>
              <TableCell align="right">{row.Score}</TableCell>
            </TableRow>
         ) ))}
        </TableBody>
      </Table>
    </TableContainer>
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
