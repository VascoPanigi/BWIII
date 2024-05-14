import { Image } from 'react-bootstrap'
import linkicon from '../assets/icons/projectlink.svg'

const ProjectCard = () => {
  return (
    <div className="project-card m-3">
      <h5 className="m-0 mb-2">Project title</h5>
      <p className="m-0 mb-2">Project date</p>
      <div className="d-flex align-items-center mb-2">
        <Image
          src="https://media.licdn.com/dms/image/C510BAQF5OJVPD2RZjA/company-logo_100_100/0/1631329806779?e=1723680000&amp;v=beta&amp;t=upxQJFA3e2Dccg58oJvGGECbA7Pq_8wzUAY_rdEjDrs"
          className="uni-logo me-2"
          width={25}
        />
        <p className="m-0">Associated with</p>
      </div>
      <span className="show-project border rounded-pill align-items-center d-inline-flex mb-3">
        Show Project<Image className="ms-2" src={linkicon}></Image>
      </span>
      <p className="m-0 pb-1 mb-2">
        Project description Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum voluptas commodi
        eveniet eum dolor natus beatae est eos dolore tempore ducimus cupiditate hic ea quaerat error sed, vero
        mollitia.
      </p>
    </div>
  )
}

export default ProjectCard
