import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../contants/project";
import Project from "../components/Package";



const Experience = () => {
  return (
   <Box  sx={{ maxWidth: "1300px", mx: "auto", my: 12 }} id="experience">
      <Typography variant="h4" sx={{ color: "white", textAlign: "center", mb: 2 }}  
      >
         Get started with a CODE | REVIEW 
        <span style={{ color: "rgba(0,199,255,255" }}> package that</span> works for you  
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap"}} >
          {
            projects.map((project) => (
              <Project 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              tags={project.tags} 
              img={project.image} />
             ))}
      </Box>
  </Box>
  );
};

export default Experience;