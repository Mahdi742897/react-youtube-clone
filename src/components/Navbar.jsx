import {Stack} from "@mui/material";
import {Link} from "react-router-dom";
import {logo} from "../utils/constants";
import SearchBar from "./SearchBar";

function Navbar () {
   
    return ( 
        <Stack direction = "row" alignItems="center" justifyContent="space-between" 
        sx = {{positions :"sticky", background :"#000", top:0, p:'20px 0'}}>
        
        <Link to = "/react-youtube-clone" style={{display: "flex" , alignItems : "center"}}>
            <img src={logo} alt = "logo" height={45}/>
        </Link>
        <SearchBar/>
        </Stack>
    );
     
}

export default Navbar;