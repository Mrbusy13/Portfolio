import { projects } from "../data/data"
const Projects = () => {
  return (
    <div id="projects" className='h-screen w-full bg-blue-300'>
        {projects.map((project)=>(
          <div className="" key={project.title}>
            <ProjectCard 
              image={project.image}
              summary={project.summary}/>
          </div>
        ))}
    </div>
  )
}

export default Projects