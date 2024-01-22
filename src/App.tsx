import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import HomePage from "./page/homePage";
import RootPage from "./page/RootPage";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import DetailPageMovie from "./page/DetailPageMovie";
import DetailPageActor from "./page/DetailPageActor";
import TestPage from "./page/testPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/detail/movie/:id", element: <DetailPageMovie /> },
      { path: "/detail/actor/:id", element:<DetailPageActor/>},
      { path: "/test/:id", element: <TestPage/> },
    ],
  },
]);
const textStyle = {
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  /* Add other styles as needed */
};
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

function App() {
  return (
    <>
    <div style={textStyle}>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <RouterProvider router={routers} />
        </CssBaseline>
      </ThemeProvider>
    </div>
    </>
  );
}

export default App;
