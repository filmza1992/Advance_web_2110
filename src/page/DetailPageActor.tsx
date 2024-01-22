import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";
import AddIcon from "@mui/icons-material/Add";
import Actor from "../interface/Actor";
import { getActors } from "../api/Actor_api";
import { ReactSVG } from "react-svg";
import { FormatPhoto, FormatVideo } from "../format/formatAmount";

export default function DetailPageActor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const [actor, setActor] = useState<Actor>();
  const [amountVideo, setAmountVideo] = useState<string>();
  const [amountPhoto, setAmountPhoto] = useState<string>();
  useEffect(() => {
    const fetchActors = async () => {
      const data = await getActors();
      const selectedActor = data.find((actor) => actor.id === id);
      setActor(selectedActor);

      const formatVideo = () => {
        if (selectedActor) {
          setAmountVideo(FormatVideo(selectedActor.video_amount));
        } else {
          setAmountVideo("Unknow");
        }
      };
      const formatPhoto = () => {
        if (selectedActor) {
          setAmountPhoto(FormatPhoto(selectedActor.photo_amount));
        } else {
          setAmountPhoto("Unknow");
        }
      };
      formatVideo();
      formatPhoto();
    };

    fetchActors();
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
              {actor && <Typography variant="h5">{actor.name}</Typography>}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "13px",
                }}
              >
                {actor &&
                  actor.detail_type.map((detail, index) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ color: "darkgrey" }}>{detail}</div>
                      {index !== actor.detail_type.length - 1 && (
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
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    fontSize: "12px",
                    height: "10px",
                  }}
                >
                  <div style={{ color: "grey" }}>IMDbPro</div>
                </div>
                <div style={{ color: "darkgrey", fontWeight: "bold" }}>
                  STARMETER
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "5px",
                  marginLeft: "15px",
                }}
              >
                <ReactSVG
                  src="\src\assets\circle-growth.svg"
                  style={{
                    fill: "rgba(255, 255, 255, 0.01)",
                    stroke: "green",
                    strokeWidth: "4px",
                    width: "55px",
                  }}
                  beforeInjection={(svg) => {
                    svg.classList.add("svg-class-name");
                    svg.setAttribute("style", "width: 50px");
                    svg.setAttribute("style", "height: 50px");
                  }}
                />

                <span
                  style={{
                    fontSize: "20px",
                    marginTop: "8px",
                  }}
                >
                  {actor && (
                    <div style={{ fontWeight: "bold" }}>
                      {actor.amount_populality}
                    </div>
                  )}
                </span>
                <ArrowDropDownIcon
                  sx={{ marginTop: "12px", color: "green" }}
                ></ArrowDropDownIcon>
                {actor && (
                  <div
                    style={{
                      color: "darkgrey",
                      fontWeight: "bold",
                      fontSize: "20px",
                      marginTop: "8px",
                    }}
                  >
                    {actor.amount_something}
                  </div>
                )}
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
            {actor && (
              <div style={{ width: "500px" }}>
                <img
                  src={"/" + actor.img}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            )}
            <div style={{ width: "100%", height: "100%" }}>
              {actor && (
                <iframe
                  src={actor.link_video}
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
                {actor && <div>{amountVideo} Videos</div>}
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
                {actor && <div>{amountPhoto} photos</div>}
              </Button>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            <div
              style={{ width: "65%", display: "flex", flexDirection: "column" }}
            >
              {actor && <div>{actor.detail}</div>}
              <hr style={{ width: "100%", marginTop: "15px" }} />
              <div style={{display:"flex" , flexDirection:"row"}}>
                <span style={{fontWeight:"bold",marginRight:"10px"}}>More at IMDbPro</span>
                <Link underline="none" style={{ cursor: "pointer" }}>
                  Contact info 
                 
                </Link>
                <div
                            style={{
                              width: "2px",
                              height: "2px",
                              backgroundColor: "darkgrey",
                              borderRadius: "50%",
                              margin: "0 4px",
                              marginTop:"13px"
                            }}
                          ></div>
                <Link underline="none" style={{ cursor: "pointer" }}>
                  Agent info
                  
                </Link>
                <div
                            style={{
                              width: "2px",
                              height: "2px",
                              backgroundColor: "darkgrey",
                              borderRadius: "50%",
                              margin: "0 4px",
                              marginTop:"13px"
                            }}
                          ></div>
                <Link underline="none" style={{ cursor: "pointer" }}>
                  Resume
                </Link>
            
              </div>
            </div>

            <div
              style={{
                width: "35%",
                marginLeft: "40px",
                marginRight: "40px",
                marginTop: "50px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginBottom: "10px" }}>Born</div>
                <div style={{ marginLeft: "10px" }}>
                  {actor && actor.birthDay}
                </div>
              </div>
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
                        <span style={{ fontWeight: "bold" }}>Add to list</span>
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
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}
