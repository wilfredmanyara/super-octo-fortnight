import React from 'react';
import { Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";

function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Hearth
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

function TrialSearch() {

    return (
        <h1> Hello World From trial Search </h1>
    )
}

export default TrialSearch;