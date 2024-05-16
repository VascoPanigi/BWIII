import { Card } from 'react-bootstrap'
import EducationCard from './EducationCards'
import { useSelector } from 'react-redux'

const Education = () => {
  const loggedIn = useSelector((state) => state.login.isLogged)

  return (
    <Card className="section-container">
      <div className="inner-section-container">
        <p className=" section-title">Education</p>
        {loggedIn && (
          <div className="edit-wrapper">
            <i className="edit bi bi-pen"></i>
          </div>
        )}

        <EducationCard />
        <EducationCard />
      </div>
    </Card>
  )
}

export default Education
