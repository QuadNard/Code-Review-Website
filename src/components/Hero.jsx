import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import review2 from "../media/review2.jpg"



const Hero = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
      border: "3px solid transparent",
      backgroundColor: '#00C7FF',
      color: "white",
      width: "20%",
      borderRadius: "25px",
      "&:hover": {
        border: "3px solid white",
        backgroundColor: "transparent",       
      },
      [theme.breakpoints.down("md")]: {
        width: "35",
      },
      [theme.breakpoints.down("md")]: {
        width: "35",
      },
      [theme.breakpoints.down("sm")]: {
        width: "50",
      } 
  }));

    const CustomTitle = styled(Typography)(({ theme }) => ({
     color: "white",
     textAlign: "center",
      [theme.breakpoints.down("md")]: {
       fontSize: "3.5rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem",
      } 
  }));


  return (  
<Box sx={{ mt: 8, mb: 12, p: 2, maxWidth: "1200px", mx: "auto" }}
id="home"
>        Hey  
        <Typography sx={{ color: "white", textAlign: "center", mb: 2}} variant="h6">
      
          </Typography>

             <CustomTitle variant="h1">
               Dedicated in  <span style={{ color: "rgba(0,199, 255,255)" }}>providing </span>{" "}
               constructive code <span style={{ color: "rgba(0,199,255,255)"}}>review feedback </span>to
                beginner coders!
             </CustomTitle> 

               <Link to="contactme" className="link" smooth>     
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem"}}>    
                  <Box component="img"
                  sx={{ height: 270, width: 270, mt: 4, mb: 4 }}
                  src={review2} />  
                    <CustomButton>Submit a Request</CustomButton>
            </Box>
            </Link>     
 </Box>
  )
};

export default Hero;