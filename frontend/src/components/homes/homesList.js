import React, { useState } from 'react';
import HomeCard from './HomeCard';
import { Grid, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import Title from '../../common/Title';
import Input from '@mui/material/Input';
import Link from '@mui/material/Link';

function HomesList(data) {

    const [startData] = useState(data.data)
    const [filteredData, setFilteredData] = useState([]);
    const [curAddressSearch, setCurAddressSearch] = useState("");

    function handleSearchInput(evt) {
        let search = evt.target.value;
        setCurAddressSearch(search);
        let tempFilteredData = startData.filter(
            house => house.address.toLowerCase().startsWith(search.toLowerCase())
        )
        setFilteredData(tempFilteredData);
    }

    return(
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
                <Paper
                    sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                    }}
                >
                    <Title
                        style={{
                            justifyContent: 'center'
                        }}
                    >
                        Search By Address
                    </Title>
                    <Input 
                        style={{
                            textAlign: "left",
                            border: 0,
                            outline: 0,
                            background: 'transparent',
                            width: "100%"
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                    }}
                >
                    <Title
                        style={{
                            justifyContent: 'center'
                        }}
                    >Filtered Homes By Address
                    </Title>
                    {filteredData.length === 0 || curAddressSearch === ""
                        ?
                        <Typography> 
                            No Homes To Show. Please Modify Your Search.
                        </Typography>
                        :
                        filteredData.map((home, idx) => (
                            <Link 
                                href={home.url} 
                                underline='none'
                                style={{
                                    width: '100%'
                                }}
                                key={home.id}
                            >
                                <HomeCard key={idx} home={home} />
                            </Link>
                        ))
                    }
                </Paper>
            </Grid>
        </Grid>
    )
};

export default HomesList;