import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-scroll";
import { styled } from "@mui/system";


const Navbar = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justiftyContent: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
   }));
  
  const CustomToolbar = styled(Box)(({ theme}) => ({
   display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
         flexDirection: "column"
    },
  }));
  
  return <Box sx={{flexGrow: 1, px:5, py: 2, maxWidth: "1200px", mx: "auto"}} >
          <AppBar position="static" style={ { background: "transparent", boxShadow: "none"}} >
              <CustomToolbar>
                      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem"}} >
                           <Box components="img" sx={{maxHeight: "45px", maxWidth: "45px", objectFit: "cover" }} />
                           <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                                CODE | REVIEW
                           </Typography>
                      </Box>

                      <CustomBox>
                          <Link to="home" className="link" smooth>
                            Home
                          </Link>

                            <Link to="experience" className="link" smooth>
                             Prices
                            </Link>

                            <Link to="contactme" className="link" smooth>
                               Form
                            </Link>
                            <Link to="about" className="link" smooth>
                               FAQ
                            </Link>
                      </CustomBox>
              </CustomToolbar>
            </AppBar> 
  </Box>
};

export default Navbar;
