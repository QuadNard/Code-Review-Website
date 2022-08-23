import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export const Test = () =>   {
  return(
    <Box   sx={{
        backgroundColor: "#000F2E",
        padding: 3,
        border: "1px solid #00C7FF",
        borderRadius: "10px",
        maxWidth: "315px",
        position: "relative",
        mx: 3,
       }} >
           <Typography  variant="body1" sx={{ color: "green", mb: 2 }}>
                       What Im I getting In these packages ?
                       ___________________________________________  
                       Basic Code Review Package - Documentation of procedures taken when reviewing and correction guidance+
Code Revision. 
                         ___________________________________________  
                          Extend Code Review Package - Code Review Extends over to Personal Projects.
+Unit testing 
+Bug fixes 
+Documentation of procedures taken when reviewing and correction guidance
+GitHub contributor. 
                           ___________________________________________  
                            Documentation of procedures taken when reviewing and correction guidance+
+Hints for Questions Followed with Answers.
+Corrections. 
+Full Guaranteed Refund of Given Wrong Answers Leading to negative score. 
+Study advice for furthering understanding. 
                            ___________________________________________  
                            Whats guaranteed when you purchase ? 
+Highly level code quality that puts you ahead of your peers. 
+Effective comments. 
+Bring conflicts to resolution. 
+Readable code. 
+Tips in maintaining high standards. 
          </Typography>
              <Typography variant="body2">
            <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
                Questions Answered
            </span>
            <span style={{ color: "#7B89A8"}}> - By CODE | REVIEW  </span>
</Typography>
<FormatQuoteIcon 
   style={{
    position: "absolute",
    top: "-20px",
    left: "-20px",
    color: "#00C7FF",
    height: "50px",
    width: "50px"
}} /> 
    </Box>
  )
} 

export const Testimonial = () => {
  return (
  <Box
       sx={{
        backgroundColor: "#000F2E",
        padding: 3,
        border: "1px solid #00C7FF",
        borderRadius: "10px",
        maxWidth: "315px",
        position: "relative",
        mx: 3,
       }}
  >
    <Typography variant="body1" sx={{ color: "white", mb: 2 }}>

            ~  I'm a [junior/mid-level/senior/staff/freelancer] software engineer. Is the service right for me?
                 ___________________________________________
                 This service is valuable for any software engineers looking to improve their code. However, if you are already employed or have work experience this may not be for you. As beginners, or students, requests will be prioritized first.
                  __________________________________________
             ~  Who are these services mainly for ? 
                  Services are catered to Beginners and Students but exceptions have been made after request is reviewed. 
                  __________________________________________
               .  How long does a response to a request take ?
                  Typically 24 hours after sending. 
                  __________________________________________
                  Whats the refund policy ?
                   Full refund if you receive incorrect answers or review is late. 
       </Typography>


       <Typography variant="body2">
            <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
                Questions Answered
            </span>
            <span style={{ color: "#7B89A8"}}> - By CODE | REVIEW  </span>
</Typography>

<FormatQuoteIcon 
style={{
    position: "absolute",
    top: "-20px",
    left: "-20px",
    color: "#00C7FF",
    height: "50px",
    width: "50px"
}} />      
  </Box>
  )
};






