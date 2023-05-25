import { technologies } from "../data/data"
import SphereCanvas from "./Sphere"

const Techstack = () => {
  return (
    <div id="tech" className='min-h-screen w-full flex flex-col bg-slate-500'>
      <div className="text-6xl md:text-8xl font-bold text-gray-100 p-5 flex flex-col items-start">
          <h1>tech-stack</h1>
          <h2 className="text-2xl md:text-4xl pt-5">These are the technologies that I am familiar with</h2>
        </div>
      <div className="h-full px-20 grow flex flex-wrap justify-center items-center gap-10">
        {technologies.map((technology)=>(
          <div className="w-20 md:w-36 h-20 md:h-36" key={technology.name}>
            <SphereCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Techstack