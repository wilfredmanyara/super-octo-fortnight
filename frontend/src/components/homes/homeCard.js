import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function HomeCard({home}) {

    return (
        <Card 
            sx={{
                maxWidth: '100%'
            }} 
            style={{
                display: 'flex',
                width: '100%',
                margin: '3px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >    
            <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                style={{
                    display: 'flex',
                    width: '100%',
                    margin: '3px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >
                {home.address} - # Beds: {home.beds} - # Baths: {home.baths} 
            </Typography>
        </Card>
    )
}

export default HomeCard;