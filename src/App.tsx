// import './App.css';
import {Routes, Route} from "react-router-dom";
import HeaderBar from "./components/Header";
import Cars from "./continers/Cars";
import Car from "./continers/Car";
import Footer from "./components/Footer";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import NotFound from "./continers/404";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#19857b",
    },
  },
  typography: {
    fontFamily: ["Roboto"].join(","),
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
        <HeaderBar />
        <Grid sx={{flexGrow: 1}}>
          <Routes>
            <Route path="/" element={<Cars />} />
            <Route path="/cars/:stockNumber" element={<Car />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
