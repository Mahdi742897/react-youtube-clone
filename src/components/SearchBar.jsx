import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
          
        if(searchTerm){
            navigate(`/search/${searchTerm}`);

            setsearchTerm('');
        }

    }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        mr: { sm: 5 },
        boxShadow: "none",
        
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
        style={{
          // padding: "10px 200px 10px 5px",
          padding: "20px",
          border: "none",
          outline: "none",
          borderRadius: 20,
          width: "400px",
          height: "40px"
        }}
      />
      <IconButton
        color="error"
        type="submit"
        sx={{
          padding: "10px",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
