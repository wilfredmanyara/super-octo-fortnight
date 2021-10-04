import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../common/LoadingSpinner';
import HomesApi from "../../api/api";
import HomeCard from './homeCard';

function HomesList() {

    const [homes, setHomes] = useState(null);

    useEffect(() => {
        async function getHomes() {
            console.log("Getting Companies Now...");
            let homesToAdd = await HomesApi.getAllHomes();
            setHomes(homesToAdd);
        }
        getHomes()
    }, []);

    if (!homes) return <LoadingSpinner />

    return(
        <div>
            <h1>Home List Below</h1>
            {
                homes.map(home => (
                    <HomeCard home={home} />
                ))
            }
        </div>
    )
}

export default HomesList;