import React from "react";
import {Stack, Box} from "@mui/material";
import {VideoCard, ChannelCard} from "./";

function Videos({videos}){

    
    return(
        <Stack direction="row" flexWrap="wrap" 
        justifyContent="center" sx={{height: "100%"}}>
            {videos.map((item , idx) => (
                <Box key = {idx} sx={{direction: "ltr"}}>
                    {item.id.videoId && <VideoCard videos = {item}/>}
                    {item.id.channelId && <ChannelCard channelDetail = {item}/>}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;