import { AiOutlineGithub } from "react-icons/ai";
import {GoLinkExternal} from "react-icons/go";


const ProjectCard = ({
  title,
  image,
  summary,
  github,
  url,
  techstack,
}: any) => {
const openInNewTab = (url:any) => {
  window.open(url, "_blank", "noreferrer")
};

  return (
    <div className="border-2 rounded-xl border-gray-100 shadow-xl flex">
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-2xl shadow-md shadow-slate-600"
        />
      </div>
      <div className="relative flex flex-col h-full gap-5 p-5 ">
        <div className="p-2 border-2 rounded-xl border-gray-100">
          <h2 className="text-xl underline text-gray-100">{title}</h2>
          <div className="w-80 text-gray-100">{summary}</div>
        </div>
        <div className="p-2 border-2 rounded-xl border-gray-100 text-gray-100 ">
          <h2 className="text-xl underline">Techstack</h2>
          <ul className="">
            {techstack.map((tech: string) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="p-2 border-2 rounded-xl border-gray-100 text-gray-100 absolute bottom-0 flex space-x-2 justify-end">
          <AiOutlineGithub onClick={()=> openInNewTab(github)} className="text-gray-100 cursor-pointer hover:scale-110" size={50} />
          <GoLinkExternal onClick={()=> openInNewTab(url)}
            className="text-gray-100 cursor-pointer hover:scale-110"
            size={50}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
