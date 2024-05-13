import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import img from '../assets/img/img1.jpg'
import { Image } from 'react-bootstrap'

const ProfileHero = () => {
  return (
    <>
      <Card className="hero-section">
        <Card.Img variant="top" src={img} />
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
                Some quick example text to build on the card title and make up
                the bulk of the car content. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quis ut enim numquam iste dolore
                eveniet saepe dignissimos qui culpa fugit debitis nisi error
                quibusdam itaque dolorem aspernatur, sed quod totam.
              </Card.Text>
              <p>
                Country • <span>Contact info</span>
              </p>
              <span>100 connections</span>
              <div className="button-group d-flex align-items-center justify-content-start gap-2">
                <Button>Open to</Button>
                <Button>Add profile section</Button>
                <Button>More</Button>
              </div>
            </div>
            <div
              className="d-flex align-items-center gap-2 ms-auto"
              style={{ minWidth: '250px' }}
            >
              <Image
                src="https://media.licdn.com/dms/image/C510BAQF5OJVPD2RZjA/company-logo_100_100/0/1631329806779?e=1723680000&amp;v=beta&amp;t=upxQJFA3e2Dccg58oJvGGECbA7Pq_8wzUAY_rdEjDrs"
                className="uni-logo"
              />
              <h6>University</h6>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
export default ProfileHero
