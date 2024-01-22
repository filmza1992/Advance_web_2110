import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Link,
  CardActions,
  Box,
} from "@mui/material";

import { getMovies } from "../api/Movie_Api";
import Movie from "../interface/Movie";
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useNavigate } from "react-router-dom";

const SlideCard = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      console.log(data[0].title);
      setMovies(data);
    };

    fetchMovies();
  }, []);

  const [startIndex, setStartIndex] = useState(0);
  const showNextCards = () => {
    console.log(startIndex);
    if (startIndex + 6 < movies.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
    console.log(startIndex);
  };

  const showBeforeCards = () => {
    console.log(startIndex);
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
    console.log(startIndex);
  };
  const visibleMovies = movies.slice(startIndex, startIndex + 6);

  //route another page
  const navigate = useNavigate();
  const goToDetailMovie = (id : number)=>{
    navigate(`/detail/movie/${id}`);
  }
  return (
    <>
      <Button
        onClick={showBeforeCards}
        style={{
          position: "absolute",
          left: "-30px",
          top: "40%",
          width: "10px",
        }}
        sx={{ border: 1, color: "white" }}
      >
        <ArrowBackIosNewIcon
          style={{ width: "25px", height: "50px" }}
        ></ArrowBackIosNewIcon>
      </Button>

      {visibleMovies.map((movie, index) => (
        <Card
          key={index}
          sx={{
            width: 150,
            maxWidth: 150,
            marginRight: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={movie.poster}
            alt="Paella dish"
          />

          <CardContent sx={{ position: "relative" }}>
            <Box sx={{ height: 75 }}>
              <Box style={{ display:"flex" , flexDirection:"row" , justifyContent:"space-between"}}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <StarIcon
                    sx={{ width: 15, color: "yellow", marginRight: "2px" }}
                  ></StarIcon>
                  <span style={{ fontSize: "12px", marginTop: "4px" }}>
                    {movie.rating}
                  </span>
                </div>
                <StarBorderOutlinedIcon sx={{width:15 }} color="primary"></StarBorderOutlinedIcon>
              </Box>
              <div style={{ position: "absolute", left: 13, marginTop: "5px" }}>
                {index + startIndex + 1 + "."}
                {movie.title}
              </div>
            </Box>
          </CardContent>

          <Box></Box>

          <CardActions
            disableSpacing
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                width: "100%",
                textTransform: "none",
                backgroundColor:"#333333"
              }}
            >
              <AddIcon></AddIcon>
              Watchlist
            </Button>
            <Link
              onClick={()=>goToDetailMovie(startIndex+index)}
              href="#"
              color="inherit"
              underline="none"
              padding={"10px"}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <PlayArrowIcon></PlayArrowIcon>
              Trailer
            </Link>
          </CardActions>
        </Card>
      ))}

      <Button
        onClick={showNextCards}
        style={{
          position: "absolute",
          top: "40%",
          right: 0,
          width: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "end",
        }}
        sx={{ border: 1, color: "white" }}
      >
        <ArrowForwardIosIcon
          style={{ width: "25px", height: "50px" }}
        ></ArrowForwardIosIcon>
      </Button>
    </>
  );
};
export default SlideCard;
