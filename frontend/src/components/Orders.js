import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';
import Title from './Title';
import HouseIcon from '@mui/icons-material/House'


function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(data) {

  function handleChangePage() {
    console.log('handle change page invoked')
  }

  function handleChangeRowsPerPage() {
    console.log("rows per change page clicked")
  }


  return (
    <React.Fragment>
      <Title>Recent Listings</Title>
      {/* <Table size="small"> */}
      <TablePagination
        component="div"
        count={10}
        page={0} 
        onPageChange={handleChangePage}
        rowsPerPage={15}
        onRowsPerPageChange={handleChangeRowsPerPage}
      >
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell># Beds</TableCell>
            <TableCell># Baths</TableCell>
            <TableCell>Square Feet</TableCell>
            <TableCell>Listing</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((house) => (
            <TableRow key={house.id}>
              <TableCell>{house.address}</TableCell>
              <TableCell>{house.beds}</TableCell>
              <TableCell>{house.baths}</TableCell>
              <TableCell>{house.squareFeet}</TableCell>
              <TableCell>
                <Link color="primary" href={house.url}> 
                  <HouseIcon />
                </Link>
              </TableCell>
              <TableCell align="right">{`$${house.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TablePagination>
      {/* </Table> */}
      <Link color="primary" href="https://www.redfin.com/city/17151/CA/San-Francisco" onClick={preventDefault} sx={{ mt: 3 }}>
        View More Homes On Redfin
      </Link>
    </React.Fragment>
  );
}