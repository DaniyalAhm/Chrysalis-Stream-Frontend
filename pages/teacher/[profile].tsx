"use client";

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {useState, useEffect} from 'react';
import React from 'react'
import Button from '@mui/material/Button';
import styles from '../../styles/profile.module.css'; // Importing the CSS module
import BasicTable from '../src/app/components/Table.tsx'
import { color } from 'framer-motion';
import Link from 'next/link';
import Table_ from '../table.tsx';
import axios from 'axios';
import { useRouter } from 'next/router';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import Box from '@mui/material/Box';


export default function profile (){
    const router = useRouter();
    const id = router.query.profile;
    const [data, setData] = useState(null);  
    const [name, setName] = useState("")
    const [students, setStudents]= useState([]);
    const [selection, setSelection]= useState([]);
    const [assignments, setAssignments] = useState([]);
    const [showTable, setShowTable]= useState(false);
    const [a_selected, setA_selected]= useState([]);


const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 100 },
  { field: 'email', headerName: 'Email ', width: 400 },
  { field: 'grade', headerName: 'Grade', width: 130 },
];

const columns_assign: GridColDef[] = [
  { field: '_id', headerName: 'Name', width: 200 },

];




const paginationModel = { page: 0, pageSize: 5 };

  useEffect( () => {
    
    axios.get(`http://localhost:5000/teacher/${id}`).then( (response) =>{
  
    console.log(response.data)
    setData(response.data)
    setName(response.data._id)
    setStudents(response.data.students);
    setAssignments(response.data.assignments);
  
    }).catch(error =>
    {
      console.error(error);
      
    })
    },[id]) 
    function getRowId(row) {
      return row._id;
    }

    function handleAssign(){
      selection.map((student, index) => {
    axios.post(`http://localhost:5000/assign`, {"student":student, "assignments": a_selected, "teacher_id":id }).then(
    setShowTable(false));


    })}


    return (

        <div>

     <h1>Welcome Back {name}</h1> 

<div >
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={students}
        columns={columns}
        getRowId= {getRowId}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
  onRowSelectionModelChange={(newSelection) => {setSelection(newSelection)
  console.log(newSelection)
  }}
        sx={{ border: 0 }}
      />

      
      <Button variant="contained" onClick={() => setShowTable(true)} data-id="studentLogin" className={styles.button}sx={{backgroundColor:'#cf5610'}}>Assign Videos</Button>
      






            <Button variant="contained"  data-id="studentLogin" className={styles.button}sx={{backgroundColor:'#cf5610'}}>Add Student</Button>


      <Button variant="contained"  data-id="studentLogin" className={styles.button}sx={{backgroundColor:'#cf5610'}}>View All Videos </Button>
    </Paper>


            </div>

        <div className={styles.container}>
        <Link href ={{
            pathname: `/assign_videos`,
            query: {
              id: "Teacherlogin", // pass the id 
            },
          }} passHref >

      </Link>
      <Backdrop
        
        open={showTable}
      >
  <Paper sx={{ height: 400, width: '20%' }}>

        <DataGrid
        rows={assignments}
        columns={columns_assign}
        getRowId= {getRowId}

        pageSizeOptions={[10, 10]}
        checkboxSelection
        onRowSelectionModelChange={(newSelection) => {setA_selected(newSelection)
        console.log(newSelection)
        }}
        sx={{ border: 0 }}
      >

      </DataGrid>

      <Button variant="contained" onClick={() => handleAssign()} data-id="studentLogin" className={styles.button}sx={{backgroundColor:'#cf5610'}}>Assign Videos</Button>
      <Button variant="contained" onClick={() => setShowTable(false)} data-id="studentLogin" className={styles.button}sx={{backgroundColor:'#cf5610'}}>Close</Button>
      </Paper>
      </Backdrop>

        </div>
        </div>
    )



}

