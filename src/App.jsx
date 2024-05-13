import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyProfilePage from "./components/MyProfilePage";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />;
      <MyProfilePage />
    </>
  );
}

export default App;
