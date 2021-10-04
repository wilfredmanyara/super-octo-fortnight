import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function HomeCard({home}) {


    return (
        <Card sx={{maxWidth: 345}}>
            <Typography gutterBottom variant="h5" component="div">
                {home.address}
            </Typography>
        </Card>

    )
}

export default HomeCard;