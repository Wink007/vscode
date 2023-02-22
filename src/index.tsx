import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import App from "./App/";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const AppWithThemeCookie = () => {
  const [cookies] = useCookies();
  const { themePreference, customTheme } = cookies;
  return (
    <App initialTheme={themePreference} initialCustomTheme={customTheme} />
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <AppWithThemeCookie />
      </Provider>
    </StrictMode>
  </BrowserRouter>
);
