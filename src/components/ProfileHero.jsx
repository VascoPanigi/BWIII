import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import img from '../assets/img/img1.jpg'
import { Image } from 'react-bootstrap'
import propic from '../assets/img/propic.jpg'

const ProfileHero = () => {
  return (
    <>
      <Card className="hero-section">
        <Card.Img variant="top" src={img} />
        <Image src={propic} className="propic" />
        <button className="edit-icon">
          <i className=" bi bi-pen"></i>
        </button>
        <Card.Body>
          <div className="d-flex align-items-start">
            <div>
              <div className="d-flex gap-2">
                <h5>Name Surname</h5>
                <Button className="verify-btn">
                  <i className="bi bi-shield-check"></i>
                  Verify now
                </Button>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the car content. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quis ut enim numquam iste dolore eveniet saepe dignissimos
                qui culpa fugit debitis nisi error quibusdam itaque dolorem aspernatur, sed quod totam.
              </Card.Text>
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
                <h6>University of Rome</h6>
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
