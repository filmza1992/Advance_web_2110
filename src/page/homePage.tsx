import {
  Container,
  Box,
  Typography,
  
} from "@mui/material";
import SlideCard from "../component/SlideCard";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SlideActor from "../component/SlideActor";
export default function HomePage() {
  
  return (
    <>
      <Container style={{ padding: 100 }}>
        <Box>
          <div style={{ display: "flex" }}>
            <div
              style={{
                background: "yellow",
                marginRight: "10px",
                width: "2px",
              }}
            />
            <Typography component="div" style={{ fontWeight: "bold" }}>
              Top 10 on IMDb this week
            </Typography>
          </div>
        </Box >
        <Box style={{ display: "flex" , justifyContent: "space-between" , position: "relative" , marginTop:"20px"}}>
              <SlideCard></SlideCard>
        </Box>
        <Box>
        <div style={{ display: "flex" ,marginTop:"40px"}}>
            <div
              style={{
                background: "yellow",
                marginRight: "10px",
                width: "2px",
              }}
            />
            <Typography component="div" style={{ fontWeight: "bold" , display:"flex" , flexDirection:"row"}}>
              Actor
              <ArrowForwardIosIcon style={{width:"20px"}}/>
            </Typography>
            
          </div>
            <div style={{marginTop:"5px" , fontSize:"13px" , color:"darkgrey"}}>Character</div>
        </Box>
        <Box style={{display:"flex" , justifyContent:"space-between" , position: "relative" , marginTop:"20px"}}>
          <SlideActor></SlideActor>
        </Box>
      </Container>
    </>
  );
}
