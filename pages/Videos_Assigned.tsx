import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Video_cards from '../src/app/components/video_cards.tsx'
export default function Videos(){


  return (
    <Box  sx={{ p: 2  , marginRight:'30%' }}>
      <Stack direction = "row" spacing={2}    useFlexGap sx={{ flexWrap: 'wrap',}}>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>
      <Video_cards/>


      </Stack>
    </Box>


  )  






}
