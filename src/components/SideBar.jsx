import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { Button } from "@mui/material";

function SideBar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack 
      direction={{ xs: "row", md: "column" }}
      sx={{
        overflowY: "auto",
        haight: { xs: "auto", md: "100%" }
      }}>
      {categories.map((category) => (
        <Button
         onClick={() => {
          setSelectedCategory(category.name)
         }}
          variant="text"
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#fc1503",
          }}
          key={category.name}>
          <span style={{ color: category.name === selectedCategory ? "white" : "red" }}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
        </Button>
      ))}
    </Stack>
  );
}

export default SideBar;
