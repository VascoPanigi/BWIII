import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/scss/bootstrap.scss";
import "./style/App.scss";
import MyProfilePage from "./components/MyProfilePage";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExperiencePage from "./components/ExperiencePage";
import MyHome from "./components/MyHome";
import MyJobs from "./components/MyJobs";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          {/* <Route path="/user/me" element={<MyProfilePage />} /> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/user/:dynamicValue" element={<MyProfilePage />} />
          <Route path="/experience/:userid" element={<ExperiencePage />} />
          <Route path="/user/home" element={<MyHome />} />
          <Route path="/jobs" element={<MyJobs />} />

          {/* <MyProfilePage /> */}
        </Routes>

        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
