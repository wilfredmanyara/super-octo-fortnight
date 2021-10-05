import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import HouseIcon from '@mui/icons-material/House'


function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(data) {
  return (
    <React.Fragment>
      <Title>Recent Listings</Title>
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
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}