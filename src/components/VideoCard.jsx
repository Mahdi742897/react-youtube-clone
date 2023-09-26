import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle,
        demoChannelUrl, demoVideoTitle } from "../utils/constants";

function VideoCard({videos : {id : {videoId}, snippet},videos}) {
  return (
    
    <Card sx = {{ width:"394px" , justifyContent: "center",borderStartStartRadius : "14px",borderStartEndRadius:'14px',margin: "12px 7px 30px 7px" ,border:'none',backgroundColor:'black' }}>
        <Link to ={videoId ? `/react-youtube-clone/video/${videoId}` : demoVideoUrl}>
          <CardMedia 
          image={snippet?.thumbnails?.high?.url} style={{objectFit:'cover'}}  
          alt = {snippet?.title}
          sx=  {{width: 394, height: 220,borderRadius:'14px'}}
          />
        </Link>
        <CardContent sx= {{backgroundColor:'black', height: "106px"}}>
          <Link to ={videoId ? `/video/${videoId}` : demoVideoUrl} 
          style={{textDecoration: "none"}}>
            <Typography variant = "subtitle1" fontWeight="bold" color="#fff">
              {snippet?.title.slice(0 , 60) || 
              demoThumbnailUrl.slice(0,60)}
            </Typography>
          </Link>

          <Link to ={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelTitle} 
          style={{textDecoration: "none"}}>
            <Typography variant = "subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle.slice(0 , 60) || 
              demoChannelTitle.slice(0,60)}
              <CheckCircle sx={{fontSize: 12, ml: "5px", color: "gray"}} />
            </Typography>
          </Link>
        </CardContent>
    </Card>
   
  );
}

export default VideoCard;
