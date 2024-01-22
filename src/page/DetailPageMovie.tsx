import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Movie from "../interface/Movie";
import { getMovies } from "../api/Movie_Api";

import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormatPhoto, FormatRating, FormatUserReview, FormatVideo } from "../format/formatAmount";


export default function DetailPageMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const [movie, setMovie] = useState<Movie>();
  const [amountRating , setAmountRating] = useState<string>();
  const [amountVideo , setAmountVideo]  = useState<string>();
  const [amountPhoto , setAmountPhoto] = useState<string>();
  const [amountReview , setAmountReview] = useState<string>();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      const selectedMovie = data.find((movie) => movie.id === Number(id));
      setMovie(selectedMovie);
      
      const formatRating = ()=>{
        if(selectedMovie){
          setAmountRating(FormatRating(selectedMovie.amountRating));
        }else{
          setAmountRating("Unknow");
        }
      }
      const formatVideo = ()=>{
        if(selectedMovie){
          setAmountVideo(FormatVideo(selectedMovie.videoAmount));
        }else{
          setAmountVideo("Unknow");
        }
      }
      const formatPhoto=()=>{
        if(selectedMovie){
          setAmountPhoto(FormatPhoto(selectedMovie.photoAmount));
        }else{
          setAmountPhoto("Unknow");
        }
      }
      const formatUserReview=()=>{
        if(selectedMovie){
          setAmountReview(FormatUserReview(selectedMovie.userReviews));
        }else{
          setAmountReview("Unknow");
        }
      }
      formatRating();
      formatVideo();
      formatPhoto();
      formatUserReview();
    };
    fetchMovies();

    
      
    
  }, [id]);

  return (
    <>
      <Container style={{ padding: 30 }}>
        <Box>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ArrowBackIosNewIcon
              sx={{ marginTop: "15px" }}
            ></ArrowBackIosNewIcon>
            <Link
              onClick={goBack}
              style={{ cursor: "default" }}
              underline="none"
            >
              <Typography
                sx={{
                  fontSize: "35px",
                  borderColor: "yellow",
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "yellow",
                }}
              >
                Back
              </Typography>
            </Link>
          </div>
        </Box>

        <Box style={{ background: "rgba(255, 255, 255, 0.12)", padding: 15 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {movie && <Typography variant="h5">{movie.title}</Typography>}
              <div style={{ display: "flex", flexDirection: "row" ,fontSize:"13px" }}>
                {movie &&
                  movie.detailMovie.map((detail, index) => (
                    <div style={{display:"flex" , flexDirection:"row", alignItems:"center"}}>
                      <div style={{color:"darkgrey"}}>
                        {detail}
                        </div>
                      {index !== movie.detailMovie.length - 1 && (
                        <div
                          style={{
                            width: "2px",
                            height: "2px",
                            backgroundColor: "darkgrey",
                            borderRadius: "50%",
                            margin: "0 4px",
                          }}
                        ></div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "350px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "darkgrey" }}>IMDb RATING</span>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <StarIcon
                    sx={{ color: "yellow", marginTop: "10px" }}
                  ></StarIcon>

                  {movie && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "5px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          marginBottom: "20px",
                        }}
                      >
                        <div style={{ fontSize: "20px" }}>{movie.rating}</div>
                        <div style={{ color: "grey" }}>/10</div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "23px",
                          fontSize: "13px",
                          color: "darkgrey",
                        }}
                      >
                        {amountRating}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "darkgrey" }}>YOUR RATING</span>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Button sx={{ textTransform: "none" }}>
                    <StarBorderOutlinedIcon
                      sx={{ width: "30px", height: "30px" }}
                    ></StarBorderOutlinedIcon>
                    <span style={{ fontSize: "20px", marginLeft: "5px" }}>
                      Rate
                    </span>
                  </Button>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "darkgrey" }}>POPULARITY</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "5px",
                  }}
                >
                  <ArrowCircleRightOutlinedIcon
                    sx={{ width: "40px", height: "40px", color: "darkgrey" }}
                  ></ArrowCircleRightOutlinedIcon>
                  <span
                    style={{
                      fontSize: "20px",
                      marginTop: "4px",
                      marginLeft: "4px",
                    }}
                  >
                    {movie && (
                      <div style={{ fontWeight: "bold" }}>
                        {movie.popularity}
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "370px",
              marginTop: "15px",
            }}
          >
            {movie && (
              <div style={{ width: "400px" }}>
                <img
                  src={"/" + movie.poster}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            )}
            <div style={{ width: "100%", height: "100%" }}>
              {movie && (
                <iframe
                  src={movie.youtube_link}
                  width="100%"
                  height="100%"
                ></iframe>
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "350px",
              }}
            >
              <Button
                sx={{
                  height: "100%",
                  textTransform: "uppercase",
                  backgroundColor: "#434343",
                  marginLeft: "5px",
                  marginBottom: "5px",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "11px",
                }}
              >
                <VideoLibraryIcon
                  style={{
                    marginBottom: "10px",
                    height: "30px",
                    width: "30px",
                  }}
                ></VideoLibraryIcon>
                {movie && <div>{amountVideo} Videos</div>}
              </Button>
              <Button
                sx={{
                  height: "100%",
                  textTransform: "uppercase",
                  backgroundColor: "#434343",
                  marginLeft: "5px",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "11px",
                }}
              >
                <CollectionsIcon
                  style={{
                    marginBottom: "10px",
                    height: "30px",
                    width: "30px",
                  }}
                ></CollectionsIcon>
                {movie && <div>{amountPhoto} photos</div>}
              </Button>
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            {movie && (
              <div>
                {movie.movieType.map((type) => (
                  <Button
                    variant="outlined"
                    style={{ marginRight: "10px" }}
                    sx={{
                      borderRadius: "20px",
                      height: "30px",
                      textTransform: "none",
                      color: "white",
                      borderColor: "darkgrey",
                      fontSize: "14px",
                    }}
                  >
                    {type.name}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            <div
              style={{ width: "65%", display: "flex", flexDirection: "column" }}
            >
              {movie && <div>{movie.detail}</div>}
              <hr style={{ width: "100%", marginTop: "15px" }} />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ fontWeight: "bold", marginRight: "20px" }}>
                  Director
                </div>
                {movie && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {movie.director.map((director, index) => (
                      <React.Fragment key={index}>
                        <Link underline="none" style={{ cursor: "pointer" }}>
                          {director}
                        </Link>
                        {index !== movie.director.length - 1 && (
                          <div
                            style={{
                              width: "2px",
                              height: "2px",
                              backgroundColor: "darkgrey",
                              borderRadius: "50%",
                              margin: "0 4px",
                            }}
                          ></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
              <hr style={{ width: "100%", marginTop: "15px" }} />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ fontWeight: "bold", marginRight: "20px" }}>
                  Writers
                </div>
                {movie && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {movie.writers.map((writer, index) => (
                      <React.Fragment key={index}>
                        <Link underline="none" style={{ cursor: "pointer" }}>
                          {writer}
                        </Link>
                        {index !== movie.writers.length - 1 && (
                          <div
                            style={{
                              width: "3px",
                              height: "3px",
                              backgroundColor: "darkgrey",
                              borderRadius: "50%",
                              margin: "0 4px",
                            }}
                          ></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
              <hr style={{ width: "100%", marginTop: "15px" }} />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ fontWeight: "bold", marginRight: "20px" }}>
                  Stars
                </div>
                {movie && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {movie.star.map((star, index) => (
                      <React.Fragment key={index}>
                        <Link underline="none" style={{ cursor: "pointer" }}>
                          {star}
                        </Link>
                        {index !== movie.star.length - 1 && (
                          <div
                            style={{
                              width: "3px",
                              height: "3px",
                              backgroundColor: "darkgrey",
                              borderRadius: "50%",
                              margin: "0 4px",
                            }}
                          ></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
              <hr style={{ width: "100%", marginTop: "15px" }} />
            </div>

            <div
              style={{
                width: "35%",
                marginLeft: "40px",
                marginRight: "40px",
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  height: "60px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ width: "89%", height: "100%" }}>
                  <Button
                    sx={{
                      backgroundColor: "yellow",
                      color: "black",
                      width: "100%",
                      height: "100%",
                      justifyContent: "flex-start",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <AddIcon></AddIcon>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "10px",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          Add to Watchlist
                        </span>
                        <span style={{ marginLeft: "2px", fontSize: "12px" }}>
                          Added by 145K users
                        </span>
                      </div>
                    </div>
                  </Button>
                </div>
                <div
                  style={{
                    width: "0.3%",
                    height: "100%",
                    backgroundColor: "#333333",
                  }}
                ></div>
                <div style={{ width: "10%", height: "100%" }}>
                  <Button
                    sx={{
                      backgroundColor: "yellow",
                      color: "black",
                      width: "100%",
                      height: "100%",
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  >
                    <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                  </Button>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Link style={{ textTransform: "none" }} underline="none">
                    {movie && <div>{amountReview} User reviews</div>}
                  </Link>
                  <Link
                    style={{ textTransform: "none", marginLeft: "30px" }}
                    underline="none"
                  >
                    {movie && <div>{movie.criticReviews} Critic reviews</div>}
                  </Link>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Link style={{ textTransform: "none" }} underline="none">
                    {movie && <div>{movie.metascore} Metascore</div>}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}
