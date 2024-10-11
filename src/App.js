import "./App.css";
// import NewBlog from "./pages/NewBlog";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import About from "./pages/About";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <NewBlog /> */}
        <About/>
      </ThemeProvider>
    </>
  );
}

export default App;
