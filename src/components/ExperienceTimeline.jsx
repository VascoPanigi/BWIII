import { Card } from "react-bootstrap";

const ExperienceTimeline = () => {
  return (
    <Card className="experience-timeline-container my-auto">
      <div className="d-flex experience-continuity">
        <div className="continuity-container">
          <div className="circular-continuity">
            <p className="dot">•</p>
          </div>
          <div className="linear-continuity"></div>
        </div>
        <div className="d-flex flex-column">
          <Card.Body>
            <Card.Title className="experience-name ">Full professor</Card.Title>
            <Card.Text className="experience-duration ">Sep 2017 - Present · 6 yrs 9 mos</Card.Text>
            <Card.Text className="experience-location">Rome, Italy</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default ExperienceTimeline;
