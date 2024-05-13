import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'
import './style/App.scss'
import MyProfilePage from './components/MyProfilePage'
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <>
      <MyNavbar />
      <MyProfilePage />
    </>
  )
}

export default App
