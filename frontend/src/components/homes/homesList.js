import React, { useState } from "react";
import HomeCard from "./homeCard";
import { Grid, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import Title from "../../common/Title";
import Input from "@mui/material/Input";
import Link from "@mui/material/Link";
import HomesApi from "../../api/api";
import LoadingSpinner from "../../common/LoadingSpinner";
import { Container } from "@mui/material";

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
        Full-Stack Template
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function HomesList() {
  const [houseData, setHouseData] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [curAddressSearch, setCurAddressSearch] = useState("");

  React.useEffect(function loadHouseData() {
    async function getHouseData() {
      try {
        let data = await HomesApi.getAllHomes();
        setHouseData(data);
      } catch (err) {
        console.log("error fetching data: ", err);
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getHouseData();
  }, []);

  function handleSearchInput(evt) {
    let search = evt.target.value;
    setCurAddressSearch(search);
    let tempFilteredData = houseData.filter((house) =>
      house.address.toLowerCase().startsWith(search.toLowerCase())
    );
    setFilteredData(tempFilteredData);
  }

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Title
              style={{
                justifyContent: "center",
              }}
            >
              Search By Address
            </Title>
            <Input
              style={{
                textAlign: "left",
                border: 0,
                outline: 0,
                background: "transparent",
                width: "100%",
              }}
              type="search"
              id="form1"
              className="form-control"
              placeholder="Search By Address - Click Item To Go To Listing"
              aria-label="Search"
              onChange={(e) => handleSearchInput(e)}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Title
              style={{
                justifyContent: "center",
              }}
            >
              Filtered Homes By Address
            </Title>
            {filteredData.length === 0 || curAddressSearch === "" ? (
              <Typography>
                No Homes To Show. Please Modify Your Search.
              </Typography>
            ) : (
              filteredData.map((home, idx) => (
                <Link
                  href={home.url}
                  underline="none"
                  style={{
                    width: "100%",
                  }}
                  key={home.id}
                >
                  <HomeCard key={idx} home={home} />
                </Link>
              ))
            )}
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
}

export default HomesList;
