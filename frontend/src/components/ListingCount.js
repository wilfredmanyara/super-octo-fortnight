   
import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(data) {

  let today = new Date();

  return (
    <React.Fragment>
      <Title>Number Of Listings</Title>
      <Typography component="p" variant="h4">
        {data.data.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        as of {today.toLocaleDateString()}
      </Typography>
      <div>
        <Link color="primary" href="https://www.redfin.com/city/17151/CA/San-Francisco" onClick={preventDefault}>
          View More Houses
        </Link>
      </div>
    </React.Fragment>
  );
}