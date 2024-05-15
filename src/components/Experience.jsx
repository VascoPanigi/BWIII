import { Card } from 'react-bootstrap'
import ExperienceCard from './ExperienceCard'
import { useDispatch, useSelector } from 'react-redux'
import { setModalType, showModal } from '../redux/actions'
import ExpModal from './ExpModal'

const Experience = ({ experiencesList }) => {
  console.log('experiencestest2', experiencesList)

  const dispatch = useDispatch()
  const modalType = useSelector((state) => state.modal.modalType)
  console.log(modalType)

  const handleShowExpModal = () => {
    dispatch(setModalType('exp'))
    dispatch(showModal())
  }

  return (
    <Card className="section-container">
      <div className="inner-section-container">
        <div className="edit-wrapper">
          <i className="edit bi bi-pen" onClick={handleShowExpModal}></i>
          {modalType === 'exp' && <ExpModal userData={userData} />}
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
