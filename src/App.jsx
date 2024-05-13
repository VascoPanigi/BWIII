import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/scss/bootstrap.scss";
import "./style/App.scss";
import MyProfilePage from "./components/MyProfilePage";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNavbar />
      <MyProfilePage />
      <MyFooter />
    </>
  );
}

export default App;
