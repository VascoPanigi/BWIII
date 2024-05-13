import { Button, Card } from "react-bootstrap";

const SuggestionCard = () => {
  return (
    <Card className="suggestion-card-container my-auto">
      <div className="d-flex align-items-start">
        <Card.Img
          src={
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="suggestion-profile-image"
        />
        <div className="d-flex flex-column">
          <Card.Body>
            <Card.Title className="suggestion-name ">
              nome cognome<span className="last-seen-suggestion"> • 3rd</span>
            </Card.Title>
            <Card.Text className="suggestion-occupation ">studente presso Epicode</Card.Text>
            <Button className="suggestion-button" variant="outline-dark">
              View profile
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default SuggestionCard;
