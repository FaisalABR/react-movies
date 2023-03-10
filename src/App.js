import "./App.scss";
// import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Routes from "./Config/Routes";

function App() {
  return (
    <>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </>
  );
}

export default App;
