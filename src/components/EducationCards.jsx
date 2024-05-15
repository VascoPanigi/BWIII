import { Card } from 'react-bootstrap'

const EducationCard = () => {
  return (
    <div className="education-card-inner-container">
      <Card className="card-container education-card my-auto">
        <div className="single-edu d-flex">
          <Card.Img
            src="https://media.licdn.com/dms/image/C510BAQF5OJVPD2RZjA/company-logo_100_100/0/1631329806779?e=1723680000&amp;v=beta&amp;t=upxQJFA3e2Dccg58oJvGGECbA7Pq_8wzUAY_rdEjDrs"
            className="education-image"
          />
          <div className="d-flex flex-column">
            <Card.Body>
              <Card.Title className="education-name ">Sapienza università di Roma</Card.Title>
              <Card.Text className="education-info ">PhD Computer Science</Card.Text>
              <Card.Text className="education-period ">2024 - 2024</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default EducationCard
