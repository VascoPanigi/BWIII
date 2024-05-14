import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import img from '../assets/img/img1.jpg'
import { Image } from 'react-bootstrap'
import EditModal from './EditModal'
import PicModal from './PicModal'
import { setModalType, showModal } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const ProfileHero = ({ userData }) => {
  console.log(userData.user_info.name)
  const loginStatus = useSelector((state) => state.login)

  const params = useParams()
  const id = params.dynamicValue

  const dispatch = useDispatch()

  const modalType = useSelector((state) => state.modal.modalType)
  console.log(modalType)

  const handleShowEditModal = () => {
    dispatch(setModalType('edit'))
    dispatch(showModal())
  }

  const handleShowPicModal = () => {
    dispatch(setModalType('pic'))
    dispatch(showModal())
  }

  return (
    <>
      <Card className="hero-section">
        <Card.Img variant="top" src={img} />
        {/* <button className="edit-icon">
          <i className=" bi bi-pen"></i>
        </button> */}
        {modalType === 'edit' && <EditModal userData={userData} />}
        {modalType === 'pic' && <PicModal userData={userData} />}
        <div className="invisible-slider">
          <Link onClick={handleShowPicModal}>
            <Image src={userData.user_info.image} className="propic" />
          </Link>
          {loginStatus.isLogged && id === '6642750c55621a0015c15faa' && (
            <div className="edit-wrapper">
              <i className="edit bi bi-pen" onClick={handleShowEditModal}></i>
            </div>
          )}
        </div>
        <Card.Body>
          <div className="d-flex align-items-start">
            <div>
              <div className="d-flex gap-2">
                <h5>
                  {userData.user_info.name} {userData.user_info.surname}
                </h5>
                {loginStatus.isLogged && id === '6642750c55621a0015c15faa' && (
                  <Button className="verify-btn">
                    <i className="bi bi-shield-check"></i>
                    Verify now
                  </Button>
                )}
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
            {loginStatus.isLogged && id === '6642750c55621a0015c15faa' ? (
              <>
                <Button>Open to</Button>
                <Button>Add profile section</Button>
                <Button>More</Button>
              </>
            ) : (
              <>
                <Button>
                  <i className="bi bi-person-plus-fill me-1"></i>Connect
                </Button>
                <Button>Message</Button>
                <Button>More</Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
export default ProfileHero
