import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const AccountGridView = ({rows})=>{

    return (
        <TableContainer component={Paper}>        
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Account</TableCell>
            <TableCell align="center">Expire</TableCell>
            <TableCell align="center">Login&nbsp;Status</TableCell>
            <TableCell align="center">Live&nbsp;Status</TableCell>
            <TableCell align="center">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.account}</TableCell>
              <TableCell align="center">{row.expire}</TableCell>
              <TableCell align="center"><i class="bi bi-check-circle h4 text-success" aria-hidden="true"></i></TableCell>
              <TableCell align="center">{row.liveStatus}</TableCell>
              <TableCell align="center">    
              <ButtonGroup>

      <DropdownButton as={ButtonGroup} id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1" className='text-primary'><i class="bi bi-camera-reels h6 text-primary" aria-hidden="true"></i> Live</Dropdown.Item>
        <Dropdown.Item eventKey="2" className='text-primary'><i class="bi bi-clock-history h6 text-primary" aria-hidden="true"></i> Live History</Dropdown.Item>
        <Dropdown.Item eventKey="3" className='text-primary'><i class="bi bi-person-circle h6 text-primary" aria-hidden="true"></i> Login/Logout</Dropdown.Item>
        <Dropdown.Item eventKey="4" className='text-primary'><i class="bi bi-currency-dollar h6 text-primary" aria-hidden="true"></i> Extend Service</Dropdown.Item>
        <Dropdown.Item eventKey="5" className='text-danger'><i class="bi bi-trash h6 text-danger" aria-hidden="true"></i> Delete</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}