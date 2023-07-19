import React from "react";
import { useState, useEffect } from "react";
import{Box, Stack, Typography} from "@mui/material";
import {SideBar, Videos} from "./";
import {fetchFromApi} from "../utils/fetchFromApi";

function Feed() {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos , setVideos] = useState([]);

    useEffect(() =>{
        fetchFromApi(`/search?part=snippet,id&q=${selectedCategory}`).then((data) => {
            setVideos(data.items);
            // console.log(data.items);

        })
    },[selectedCategory]);
    
    return ( 

    
        <Stack direction = {{xs : 'column' , md: 'row'}} sx={{overflow: "clip", height: "88.7vh"}}>
            <Box sx ={{height: {xs: "auto", md: '94%'} , 
            borderRight: '1px solid #d3d3d3', 
            px: {xs: 0, md: 2},
            mt: "22px",
            overflow: "auto"
            }}>
            <SideBar 
                selectedCategory=  {selectedCategory}
                setSelectedCategory = {setSelectedCategory}
            />
            <Typography className="copyright" variant ='body2' sx ={{color: '#fff', mt: 1.5}}>
                CopyRight 2023 MahdiFeyzi
            </Typography>

            </Box>

            <Box p = {2} sx={{height : "88vh",
            overflowY: "auto" ,flex: 2}}>

                <Typography variant="h4" fontWeight="bold" color="white" mb ={2}>
                   {selectedCategory} <span style={{color: "#fc1503"}}>
                        Videos
                    </span>
                </Typography>

                <Videos videos = {videos}/>

            </Box>
        </Stack>
     );
}

export default Feed;