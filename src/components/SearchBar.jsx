import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, TextField ,Box,Dialog} from "@mui/material";
import { Search } from "@mui/icons-material";
import "../style.css";

function SearchBar() {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setsearchTerm("");
    }
  };
  
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    
  
      <input
      // size="small"
       
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
        style={{
          height: "40px",
          backgroundColor: "white",
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          width: "400px",
          display:"flex",
          justifyContent:"center",
          position:'relative',
          outline:'none',
          border:'none',
          padding: "10px 200px 10px 5px",
          position: "relative",
          

          
        }}
        // style={{
        //   // padding: "10px 200px 10px 5px",
        //   marginBottom:"30px",
        //   paddingLeft: "35px",
        //   border: "none",
        //   outline: "none",
        //   borderRadius: 20,
        //   // width:"30vw",
        //   // height: "40px",
        // }}
      />

      <IconButton
      
      onClick={handleSubmit}
      className="search-icon"
        color="error"
        type="submit"
        sx={{
          padding: "10px",
          position:'absolute',
          right:0,
          
          
        }}
      >
        <Search sx={{fontSize:{md:'30px', sm:'20px'}}}/>
      </IconButton>
    </Box>
  
  );
}

export default SearchBar;
// <Paper
    //   component="form"
    //   onSubmit={handleSubmit}
    //   sx={{
    //     borderRadius: 20,
    //     border: "1px solid #e3e3e3",
    //     mr: { sm: 5 },
    //     boxShadow: "none",
    //     width: { xs: "200px", md: "400px" },
    //     height: "40px",
    //     alignItems:"center",
    //     justifyContent:"center"
    //   }}
    // >