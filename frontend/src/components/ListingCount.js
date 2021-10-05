   
import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(data) {

  let today = new Date();

  return (
    <Grid item xs={12} md={4} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 500,
        }}
      >
        <React.Fragment>
          <Title>Number Of Listings</Title>
          <Typography component="p" variant="h4">
            {data.data.length}
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            as of {today.toLocaleDateString()}
          </Typography>
          <Link color="primary" href="https://www.redfin.com/city/17151/CA/San-Francisco" >
            View More Houses
          </Link>
        </React.Fragment>
      </Paper>
    </Grid>
  );
}