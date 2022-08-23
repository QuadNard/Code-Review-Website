import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import {Testimonial, Test, } from "./Testimonial"



const About = () => {
   const CustomBox = styled(Box)(({ theme}) => ({
       display: "flex",
       justifyContent: "space-around",
       [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
       },
  }));     
  
    const CustomTitleBox = styled(Box)(({ theme}) => ({
      width: "100%", 
      display: "flex",
      alignItems: "center",
       justifyContent: "space-around",
       [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
       },
  }));     

     const CustomButton = styled(Box)(({ theme}) => ({
       border: "3px-soild white", 
       borderRadius: "25px",
       color: "white",
       width: "15%",
       display: "block",
       "&:hover": {
        border: "3px solid #00C7FF",
       },
       justifyContent: "space-around",
       [theme.breakpoints.down("md")]: {
          width: "50%",         
       },
       [theme.breakpoints.down("sm")]: {
        width: "75%",
       },
  }));  

  return (
    <Box sx={{ maxWidth: "1300px", my: 10, padding: 3, mx: "auto" }} id="about">
        <CustomTitleBox>
              <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
                      FAQ  !
              </Typography>
              <div 
               style={{
                height: "5px",
                backgroundColor: "#00C7FF",
                width: "50%",
                border: 0,
                borderRadius: "25px",
               }}
               ></div>
        </CustomTitleBox>

           <CustomBox sx={{ my: 7 }}>
            <Testimonial /> 
                   <Test/>
           </CustomBox>
            
            <div style={{
              height: "5px",
              backgroundColor: "#00C7FF",
              width: "100%",
              border: 0,
              borderRadius: "25px",
            }}
       ></div>

       <Typography 
          variant="h4"
          sx={{ color: "white", mt:12, textAlign: "center" }} 
          >
                             [ how request works] : Send a request down below by submitting the form, you"ll then get a respose back via email that we give you further instructions involving payment, Documents, and guidelines. 
            </Typography>

                <Typography 
          variant="h5"
          sx={{ color: "red", mt:12, textAlign: "center" }} 
          >
                             (Template for Request Form ) -  Box 1:[Full Name]   Box 2.[ Email]  Box 3:[ List Selected Package, List Programming Language, Describe What You Are Submitting Such As; DESCRIPTION OF PROJECT/DESCRIPTION OF HOMEWORK]
                             
            </Typography>

            <CustomButton variant="outlined" sx={{ mx: "auto", mt: 3, mb: 8}}>
                      Send Below 
              </CustomButton>



    </Box>
  )
};

export default About;