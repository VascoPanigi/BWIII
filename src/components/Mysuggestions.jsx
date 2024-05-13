import SuggestionCard from "./SuggestionCard";

const MySuggestions = () => {
  return (
    <div className="suggestions-container">
      <p className="text-white suggestion-title">Other similar profiles</p>
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
    </div>
  );
};

export default MySuggestions;
