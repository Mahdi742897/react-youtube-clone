import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Box} from "@mui/material"
import {Navbar, ChannelDetail, Feed , SearchFeed, VideoDetail} from "./components";


export default function App(){
    return(
       
       <BrowserRouter>
       <Box sx = {{backgroundColor : "#000"}}>
        <Navbar/>
       
        <Routes>
            <Route path="/react-youtube-clone" exact element = {<Feed />} />
            <Route path="/react-youtube-clone/video/:id" element = {<VideoDetail/>} />
            <Route path="/channel/:id" element = {<ChannelDetail/>} />
            <Route path="/search/:searchTerm" element = {<SearchFeed/>} />
            
        </Routes>

        </Box>
       </BrowserRouter>
    );
}

