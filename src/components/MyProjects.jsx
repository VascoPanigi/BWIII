import { Card } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import rightarrow from '../assets/icons/arrowright.svg'
import { Image } from 'react-bootstrap'
const MyProjects = () => {
  return (
    <Card className="projects-container">
      <h4>Projects</h4>
      <ProjectCard />
      <ProjectCard />
      <h6 className="show-all-projects text-center border-top m-0 p-2">
        Show all N projects <Image src={rightarrow} />
      </h6>
    </Card>
  )
}

export default MyProjects
