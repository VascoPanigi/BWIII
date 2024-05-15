import { Card } from 'react-bootstrap'
import SuggestionCard from './SuggestionCard'
import { useSelector } from 'react-redux'

const MySuggestions = () => {
  // console.log(usersList.users_list);
  const usersList = useSelector((state) => state.users_list)

  return (
    <Card className="suggestions-container">
      <p className="suggestion-title">Other similar profiles</p>

      {usersList.users_list.slice(4, 9).map((singleUser) => {
        return <SuggestionCard key={singleUser._id} singleUser={singleUser} />
      })}
      {/* <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard /> */}
    </Card>
  )
}

export default MySuggestions
