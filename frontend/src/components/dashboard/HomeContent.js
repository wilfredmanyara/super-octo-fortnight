import React, { useState } from "react";
import HouseCount from "./HouseCount";
import HousingPagination from "./HousingPagination";
import Chart from "./Chart";
import HomesApi from "../../api/api";
import LoadingSpinner from "../../common/LoadingSpinner";
import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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

function HomeContent() {
  const [houseData, setHouseData] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);

  React.useEffect(function loadHouseData() {
    async function getHouseData() {
      try {
        let data = await HomesApi.getAllHomes();
        setHouseData(data);
        console.log("DATA FROM SERVER");
        console.log(data);
      } catch (err) {
        console.log("error fetching data: ", err);
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getHouseData();
  }, []);

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Chart data={houseData} />
        {/* # Listings */}
        <HouseCount data={houseData} />
        {/* Recent Listings */}
        <HousingPagination data={houseData} />
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
}

export default HomeContent;
