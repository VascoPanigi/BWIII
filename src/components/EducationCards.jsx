import { Card } from "react-bootstrap";

const EducationCard = () => {
  return (
    <Card className="card-container education-card my-auto">
      <div className="d-flex align-items-start">
        <Card.Img
          src="https://media.licdn.com/dms/image/C510BAQF5OJVPD2RZjA/company-logo_100_100/0/1631329806779?e=1723680000&amp;v=beta&amp;t=upxQJFA3e2Dccg58oJvGGECbA7Pq_8wzUAY_rdEjDrs"
          className="education-image"
        />
        <div className="d-flex flex-column">
          <Card.Body>
            <Card.Title className="education-name text-white">Sapienza università di Roma</Card.Title>
            <Card.Text className="education-info text-white">PhD Computer Science</Card.Text>
            <Card.Text className="education-period text-white">2024 - 2024</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;
