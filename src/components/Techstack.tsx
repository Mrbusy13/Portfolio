import { technologies } from "../constants/constants"
import SphereCanvas from "./Sphere"

const Techstack = () => {
  return (
    <div className='h-screen w-full bg-black flex justify-center'>
      <div className="h-full w-4/5 flex flex-row flex-wrap items-center justify-around gap-10">
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