import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  Id: number,
  Grade: number,

) {
  return { name, Id, Grade};
}

const rows = [
  createData('Daniyal', 159, 6.0),
  createData('Tiger', 237, 9.0),
  createData('Rafay', 262, 16.0),

];

export default function BasicTable() {
  return (
    <TableContainer 
    
    sx={{backgroundColor:'#383838'}}
    component={Paper}>
      <Table sx={{ minWidth: 650, color:'white' }} aria-label="simple table">
        <TableHead
        
        
        >
          <TableRow
          >
            <TableCell
                    sx={{color:'white'}}
>Student </TableCell>
            <TableCell 
                    sx={{color:'white'}}

            align="right">Id</TableCell>
            <TableCell
                    sx={{color:'white'}}

            align="right">Grade&nbsp;</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody
        >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } , }}
            >
              <TableCell component="th" scope="row"        sx={{color:'white'}}

              >
                {row.name}
              </TableCell>

              <TableCell         sx={{color:'white'}}
align="right">{row.Id}</TableCell>
              <TableCell        sx={{color:'white'}}
 align="right">{row.Grade}</TableCell>

            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
