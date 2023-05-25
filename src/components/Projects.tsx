import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div id="projects" className="min-h-screen w-screen bg-slate-500 flex flex-col">
      <div className="text-6xl md:text-8xl font-bold text-gray-100 p-5">
        <h1>projects</h1>
      </div>
      <div className="">
        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
