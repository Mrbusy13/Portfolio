import { technologies } from "../data/data"
import SphereCanvas from "./Sphere"

const Techstack = () => {
  return (
    <div id="tech" className='h-screen w-full flex flex-col justify-center bg-slate-300'>
      <div className="text-6xl md:text-8xl font-bold text-slate-900 p-5 flex items-start">
          <h1>tech-stack</h1>
        </div>
      <div className="h-full w-75% p-20 flex flex-wrap justify-center gap-10">
        {technologies.map((technology)=>(
          <div className="w-28 md:w36 h-28 md:h-36" key={technology.name}>
            <SphereCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Techstack