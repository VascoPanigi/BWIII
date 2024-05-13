import { Card } from "react-bootstrap";
import ExperienceTimeline from "./ExperienceTimeline";

const ExperienceCard = () => {
  return (
    <div className="experience-card-inner-container">
      <Card className="card-container experience-card my-auto">
        <div className="d-flex align-items-start">
          <Card.Img
            src="https://media.licdn.com/dms/image/C510BAQF5OJVPD2RZjA/company-logo_100_100/0/1631329806779?e=1723680000&amp;v=beta&amp;t=upxQJFA3e2Dccg58oJvGGECbA7Pq_8wzUAY_rdEjDrs"
            className="experience-image"
          />
          <div className="d-flex flex-column">
            <Card.Body>
              <Card.Title className="experience-name ">Sapienza università di Roma</Card.Title>
              <Card.Text className="experience-period ">21 yrs 1 mo</Card.Text>
            </Card.Body>
          </div>
        </div>
        <div className="experience-timeline-outer-container">
          <ExperienceTimeline />
          <ExperienceTimeline />
          <ExperienceTimeline />
        </div>

        {/* <Card className="education-card my-auto">
          <div className="d-flex align-items-start experience-continuity">
            <div className="circular-continuity"></div>
            <div className="linear-continuity"></div>
            <div className="d-flex flex-column">
              <Card.Body>
                <Card.Title className="education-name ">Sapienza università di Roma</Card.Title>
                <Card.Text className="education-info ">PhD Computer Science</Card.Text>
                <Card.Text className="education-period ">2024 - 2024</Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card> */}
      </Card>
    </div>
  );
};

export default ExperienceCard;
