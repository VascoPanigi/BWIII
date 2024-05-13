import { Card } from "react-bootstrap";
import SuggestionCard from "./SuggestionCard";

const MySuggestions = () => {
  return (
    <Card className="suggestions-container">
      <p className="suggestion-title">Other similar profiles</p>
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
    </Card>
  );
};

export default MySuggestions;
