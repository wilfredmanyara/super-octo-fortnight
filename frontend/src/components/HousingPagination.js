import * as React from 'react';
import { useState } from 'react';
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (evt, newPage) => {
    setPage(newPage)
  }

  function handleChangeRowsPerPage(evt) {
    setRowsPerPage(parseInt(evt.target.value, 10));
    setPage(1);
  }


  return (
    <React.Fragment>
      <Title>Recent Listings</Title>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.data.length}
        rowsPerPage={rowsPerPage}
        page={page} 
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Table size="small">
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
            {data.data.slice(
              page * rowsPerPage, page * rowsPerPage + rowsPerPage
            ).map((house) => (
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
      </Table>
      <Link color="primary" href="https://www.redfin.com/city/17151/CA/San-Francisco" onClick={preventDefault} sx={{ mt: 3 }}>
        View More Homes On Redfin
      </Link>
    </React.Fragment>
  );
}