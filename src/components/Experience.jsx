import { Card } from 'react-bootstrap'
import ExperienceCard from './ExperienceCard'

const Experience = ({ experiencesList }) => {
  console.log('experiencestest2', experiencesList)
  return (
    <Card className="section-container">
      <div className="inner-section-container">
        <div className="edit-wrapper">
          <i className="edit bi bi-pen"></i>
        </div>
        <p className=" section-title">Experience</p>
        {experiencesList.experiences_list.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </Card>
  )
}

export default Experience
