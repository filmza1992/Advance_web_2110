import { Box, Button, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { getActors } from "../api/Actor_api";
import Actor from "../interface/Actor";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

function SlideActor() {
  const [actors, setActors] = useState<Actor[]>([]);
  useEffect(() => {
    const fetchActors = async () => {
      const data = await getActors();
      setActors(data);
    };

    fetchActors();
  }, []);

  const [startIndex, setStartIndex] = useState(0);
  const showNextCards = () => {
    console.log(startIndex);
    if (startIndex + 6 < actors.length) {
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

  const visibleAcotors = actors.slice(startIndex, startIndex + 6);

  //Go to Page actor
  const navigate = useNavigate();
  const goToDetailActor = (id: number) => {
    navigate(`/detail/actor/${id}`);
  };
  return (
    <>
      <Button
        onClick={showBeforeCards}
        style={{
          position: "absolute",
          left: "-30px",
          top: "35%",
          width: "10px",
        }}
        sx={{ border: 1, color: "white" }}
      >
        <ArrowBackIosNewIcon
          style={{ width: "25px", height: "50px" }}
        ></ArrowBackIosNewIcon>
      </Button>
      {visibleAcotors.map((actor, index) => (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ borderRadius: "50%" , width: 150, height: 150   ,overflow:"hidden"}}>
            <Link href="" onClick={() => goToDetailActor(startIndex + index)}>
              <img
                src={actor.img}
                alt=""
                style={{ height:"auto" , objectFit:"cover" , width:"100%"}}
              />
            </Link>
          </Box>
          <span style={{ marginTop: "5px" }}>{actor.name}</span>
          <span
            style={{ marginTop: "3px", fontSize: "14px", color: "darkgrey" }}
          >
            {actor.age}
          </span>
        </Box>
      ))}
      <Button
        onClick={showNextCards}
        style={{
          position: "absolute",
          top: "35%",
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
}

export default SlideActor;
