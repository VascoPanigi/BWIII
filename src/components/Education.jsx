import { Card } from 'react-bootstrap'
import EducationCard from './EducationCards'

const Education = () => {
  return (
    <Card className="section-container">
      <div className="inner-section-container">
        <p className=" section-title">Education</p>
        <div className="edit-wrapper">
          <i className="edit bi bi-pen"></i>
        </div>
        <EducationCard />
        <EducationCard />
      </div>
    </Card>
  )
}

export default Education
