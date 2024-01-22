import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Header() {
  // Go to Home page
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate(`/test/1`);
  };
  // const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#191919" }}>
          <Toolbar>
            <a
              href=""
              onClick={goToHomePage}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ fontWeight: "bold", color: "yellow" }}
              >
                IMDB
              </Typography>
            </a>
            {/* <button onClick={() => {
            navigate('/detail');
          }}>detail</button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
