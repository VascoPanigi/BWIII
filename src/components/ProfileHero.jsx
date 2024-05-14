import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import img from '../assets/img/img1.jpg'
import { Image } from 'react-bootstrap'
import EditModal from './EditModal'
import { showModal } from '../redux/actions'
import { useDispatch } from 'react-redux'

const ProfileHero = ({ userData }) => {
  console.log(userData)
  console.log(userData.user_info.name)

  const dispatch = useDispatch()
  const handleShow = () => dispatch(showModal())

  return (
    <>
      <Card className="hero-section">
        <Card.Img variant="top" src={img} />
        <Image src={userData.user_info.image} className="propic" />
        <button className="edit-icon">
          <i className=" bi bi-pen"></i>
        </button>
        <EditModal userData={userData} />
        <Card.Body>
          <div className="d-flex align-items-start">
            <div>
              <div className="d-flex gap-2">
                <h5>
                  {userData.user_info.name} {userData.user_info.surname}
                </h5>
                <Button className="verify-btn">
                  <i className="bi bi-shield-check"></i>
                  Verify now
                </Button>
              </div>
              <div className="edit-wrapper">
                <i className="edit bi bi-pen" onClick={handleShow}></i>
              </div>
              <Card.Text>{userData.user_info.bio} </Card.Text>
              <a href="">
                <h6 className="d-xl-none">University of Rome</h6>
              </a>

              <p>
                Country • <span>Contact info</span>
              </p>
              <span>100 connections</span>
            </div>
            <div className="d-none d-xl-flex align-items-center gap-2 ms-auto">
              <Image
                src="https://media.licdn.com/dms/image/C510BAQF5OJVPD2RZjA/company-logo_100_100/0/1631329806779?e=1723680000&amp;v=beta&amp;t=upxQJFA3e2Dccg58oJvGGECbA7Pq_8wzUAY_rdEjDrs"
                className="uni-logo"
              />
              <a href="">
                <h6>{userData.user_info.title}</h6>
              </a>
            </div>
          </div>
          <div className="button-group d-flex align-items-center justify-content-start gap-1 gap-md-2">
            <Button>Open to</Button>
            <Button>Add profile section</Button>
            <Button>More</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
export default ProfileHero
