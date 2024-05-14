import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/scss/bootstrap.scss";
import "./style/App.scss";
import MyProfilePage from "./components/MyProfilePage";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/user" element={<MyProfilePage />} />
          <Route path="/user/:dynamicValue" element={<MyProfilePage />} />

          {/* <MyProfilePage /> */}
        </Routes>

        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
