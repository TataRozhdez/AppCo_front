import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination';
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
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const users = props.users
  
  console.log('users', users)

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    console.log('selectedIndexDEF', selectedIndex)

    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
      console.log('selectedIndex-1', selectedIndex)
    } else if (selectedIndex === 0) {
      console.log('selectedIndex0', selectedIndex)
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      console.log('selectedIndex>0', selectedIndex)
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  

  const isSelected = (name) => selected.indexOf(name) !== -1;

  
  return (
    
    <div className="table-users">
      <Paper className="paper">
        <TableContainer>
          <Table
            // className={classes.table}
            aria-label="table"
          >
            <EnhancedTableHead />
            <TableBody>
              {users 
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.user.id)}
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
                      
                      <TableCell align="center">{row.total_clicks}</TableCell>
                      <TableCell align="center">{row.total_page_views}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={50}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>         
  )
}
