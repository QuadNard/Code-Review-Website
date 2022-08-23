import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-scroll";

const Project = ({ title, description, tags, img}) => {
  return <Card sx={{maxWidth: 375, margin: "1rem"}}>
           <CardActionArea>
              <CardMedia component="img" image={img} />
              
              <CardContent>
                   <Typography variant="h5" component="div">
                       {title}
                   </Typography>
                 
                <Typography variant="body2" color="text.secondary">
                       {description}
                </Typography>
              </CardContent>
           </CardActionArea>

     <CardActions sx={{display: "flex", flexDirection: "column"}}>
         <Box sx={{width: "100%", display: "flex", justifyContent: "space-around", mx: "auto", mb: -3}}>
            

         
         </Box>
    
         <Box sx={{width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", mb: 2}}>
              {
                tags.map((tag) => (
                  <Chip label={tag} key={tag} varient="outlined" />
                ))
              }

         </Box>
     </CardActions>
      <Link to="contactme" className="link" smooth>
        <Button size="small" style={{backgroundColor: "rgba(0,129,255,255)"}} variant="contained">
              Request Service
            </Button>
            </Link>
  </Card>   
};

export default Project;