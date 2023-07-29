import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { Button } from "@mui/material";
import { Padding } from "@mui/icons-material";

function SideBar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack 
    
    className="category-btn-container"
      direction={{ xs: "row", md: "column" }}
      sx={{
        overflowY: "auto",
        haight: { xs: "auto", md: "100%" },
        gap: {xs:"20px",sm:"0px"},
       
        
        
      }}>
      {categories.map((category) => (
        <Button
        
        sx={{pr:{md:6}, py:{md:1}}}
        // paddingRight:{xs:"90px"},paddingLeft:{xs:"10px"}
         onClick={() => {
          setSelectedCategory(category.name)
         }}
          variant="text"
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#fc1503",
          }}
          key={category.name}>
          <span style={{ color: category.name === selectedCategory ? "white" : "red",fontSize:{xs:"8px"}}}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8",fontSize:{xs:"10px"} }}>{category.name}</span>
        </Button>
      ))}
    </Stack>
  );
}

export default SideBar;
