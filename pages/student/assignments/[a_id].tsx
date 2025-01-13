"use-client";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import MuiPlayerDesktopPlugin from 'mui-player-desktop-plugin'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export default function Assignments() {
  const [videos, setVideos] = useState('');
  const [qNa, setQnA]= useState([])
  const router = useRouter();
  const id = router.query.a_id;

  
  useEffect(() =>{
  console.log(id)
  axios.get(`http://localhost:5000/assignments/${id}`).then((response)  =>{
  console.log(response.data)
  setQnA(response.data.questions_and_answers);
  console.log(response.data.questions_and_answers)
  }
  ).catch(error =>
    router.push("/404")
  )

},[id])

  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>


      {qNa.map((current, index)=>
      {
        return (
        <div>
       <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        >


            <h1>{current.question}</h1>
            {current.options.map((option, index2) =>
            <FormControlLabel
                  key={index2}
                  value={option}
                  control={<Radio />}
                  label={option}
                />           

            )}


      </RadioGroup>
          </div>
            )})}



    </FormControl>
  );

  

}
