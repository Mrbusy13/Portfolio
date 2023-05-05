import { technologies } from "../constants/constants"
import SphereCanvas from "./Sphere"

const Techstack = () => {
  return (
    <div className='h-screen w-full bg-black flex flex-col justify-center'>
      <div className="md:text-8xl text-6xl font-bold text-stone-200 p-5 flex items-start">
          <h1>tech-stack</h1>
        </div>
      <div className="h-full p-20 flex flex-row flex-wrap items-center justify-between gap-10">
        {technologies.map((technology)=>(
          <div className="w-28 h-28" key={technology.name}>
            <SphereCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Techstack