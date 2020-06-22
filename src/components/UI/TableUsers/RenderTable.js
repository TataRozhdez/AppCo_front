import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Pagination from '@material-ui/lab/Pagination'
import Paper from '@material-ui/core/Paper'
import './RenderTable.scss'

const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'first_name', label: 'First name' },
  { id: 'last_name', label: 'Last Name' },
  { id: 'email', label: 'Email' },
  { id: 'gender', label: 'Gender' },
  { id: 'ip_address', label: 'IP address' },
  { id: 'total_clicks', label: 'Total clicks' },
  { id: 'total_views', label: 'Total page views' }
]

function EnhancedTableHead(props) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
          >
              {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function RenderTable(props) {
  const [selected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage] = React.useState(50)
  const users = props.users

  function TablePaginationActions(props) {
    const handleChangePage = (event, value) => {
      setPage(value);
    }; 
  
    return (
      <div className="pagination">
        <Pagination 
          count={Math.floor(users.length / rowsPerPage)}
          variant="outlined" 
          shape="rounded" 
          rowsperpage={rowsPerPage}
          page={page}
          onChange={handleChangePage}
        />
      </div>
    )
  }
  
  const isSelected = (name) => selected.indexOf(name) !== -1

  return (  
    <div className="table-users">
      <Paper className="paper">
        <TableContainer>
          <Table
            aria-label="table"
          >
            <EnhancedTableHead />
            <TableBody>
              {users 
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.user.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={props.onRowSelect.bind(null, row)}
                      tabIndex={-1}
                      key={row.user.id}
                      selected={isItemSelected}
                    >
                      <TableCell component="th" id={labelId} scope="row">
                        {row.user.id}
                      </TableCell>
                      <TableCell align="center">{row.user.first_name}</TableCell>
                      <TableCell align="center">{row.user.last_name}</TableCell>
                      <TableCell align="center">{row.user.email}</TableCell>
                      <TableCell align="center">{row.user.gender}</TableCell>
                      <TableCell align="center">{row.user.ip_address}</TableCell>
                      
                      <TableCell align="center">{row.total.clicksTotal}</TableCell>
                      <TableCell align="center">{row.total.pageViewTotal}</TableCell>
                    </TableRow>
                  );
                })}
                  
            </TableBody>
          </Table>
        </TableContainer>
        {TablePaginationActions()}
      </Paper>
    </div>         
  )
}
