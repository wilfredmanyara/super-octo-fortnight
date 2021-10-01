import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../common/LoadingSpinner';
import HomesApi from "../api/api";

function HomesList() {

    const [homes, setHomes] = useState(null);

    useEffect(async function getHomes() {
        console.log("Getting Companies Now...");
        let homesToAdd = await HomesApi.getAllHomes();
        setHomes(homesToAdd);
    }, []);

    if (!homes) return <LoadingSpinner />

    return(
        <h1>hello world</h1>
    )
}

export default HomesList;