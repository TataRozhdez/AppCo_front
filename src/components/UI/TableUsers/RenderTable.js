import React from 'react'
import './TableUsers.scss'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

// const onSelectUser = (id) => {
//   console.log(id)
// }

const RenderTable = props => {
  
  return (
    <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">First name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">IP address</TableCell>
              <TableCell align="right">Total clicks</TableCell>
              <TableCell align="right">Total page views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  
            {props.trow.map((row) => (
              <TableRow key={row.id}> 
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell align="right">{row.first_name}</TableCell>
                <TableCell align="right">{row.last_name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.ip_address}</TableCell>
                
                <TableCell align="right">{row.total_clicks}</TableCell>
                <TableCell align="right">{row.total_page_views}</TableCell>
              </TableRow>
            ))}
  
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default RenderTable
