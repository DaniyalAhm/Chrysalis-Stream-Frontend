"use client";

import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css'; // Importing the CSS module
import axios from 'axios';
import useSWR from 'swr';
export default function TeacherLogin() {
const [formData, setForm] = useState({

  withCredentials: true,
  username: '', // Initialize with an empty string
  password: '', // Initialize with an empty string
});
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null)

  const [getUrl, setGet] = useState('');
  const [msg, setMsg] = useState("Please Enter your Password");
  const [schools, setSchools] = useState([])
  const router = useRouter();
  const { id } = router.query; // Accessing the query parameters



    
    useEffect (() => {
    const getSchools = async () =>{ 
        try {
          const response = await axios.get("http://localhost:5000/schools_info");
          setSchools(response.data)
          }
        
        catch(error){
          console.error(error);}}
    
    getSchools()
  },[])



    const fetcher = ((url, args) => {console.log("Requesting Info From Backend", args); axios.post(url, args).then((res) => setData(res.data))})
  function handleSubmit(e){
    e.preventDefault()    // Update the state
    setGet("http://127.0.0.1:5000/login")
    }


  function handleChange(e){
    const {name,value}= e.target
    setForm((prev) => ({...prev, [name]:value}))
    setLoading(true)
    }
  useEffect(() => {
    const fetchData = async () => {
      if (!getUrl) return; // Do not fetch if URL is not set
      setLoading(true);
      try {
        const response = await axios.post(getUrl, formData); // Assuming `formData` is your payload
        setData(response.data);
        setMsg(response.data.message === "Login successful" ? "Success!" : "Failed");

      } catch (error) {
        console.error("Error during fetch:", error);
        setMsg("An error occurred. Please try again.");
      } finally {
        setLoading(false);

       
      }
    };

    fetchData();
  }, [getUrl]);
        if (msg === "Success!"){
         console.log(data.redirect) 
        router.push(`/${data.redirect}`);
        }

  return (
    <div className={styles.container}>
      {/* This will be our container */}

      <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Hello </h1>
      <FormControl sx={{ m: 1, minWidth: 200, backgroundColor: 'white', position: 'relative' , borderRadius: '5px'}}>
      <InputLabel sx={{margin:"30px", fontSize: "20px"}}> Select School </InputLabel>


        <Select

          value={schools}
          label="schools"
        >
                   {schools.map((num) => 
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
            name="username"
            id="username"
            value={formData.username}
            onChange= {handleChange}
            className={styles.input}

            sx={{fontColor:"black"}}
          />
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            sx={{color:"black"}}
          />
        </div>
        <button type="submit" className={styles.button}>Submit</button>

        <div>
        {msg}
        </div>
      </form>

    </div>
  );
}
