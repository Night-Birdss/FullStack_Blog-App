import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";

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
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
