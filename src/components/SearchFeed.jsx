import React from "react";
import { useState, useEffect } from "react";
import{Box, Typography} from "@mui/material";
import {Videos} from "./";
import {fetchFromApi} from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

function Feed() {

    
    const [videos , setVideos] = useState([]);
    const {searchTerm} = useParams();
    useEffect(() =>{
        fetchFromApi(`/search?part=snippet,id&q=${searchTerm}`).then((data) => {
            setVideos(data.items);
            // console.log(data.items);

        })
    },[searchTerm]);
    
    return ( 

        <Box p = {2} sx={{height : "88vh",
        overflowY: "auto" ,flex: 2}}>

            <Typography variant="h4" fontWeight="bold" color="white" mb ={4}>
              Search Results For  <span style={{color: "#fc1503"}}>
                    {searchTerm}
                </span> Videos
            </Typography>

            <Videos videos = {videos}/>

        </Box>
        
     );
}

export default Feed;