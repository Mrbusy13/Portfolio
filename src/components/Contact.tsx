import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"


const Contact = () => {
  const openInNewTab = (url:string) => {
    window.open(url, "_blank", "noreferrer")
  };
  return (
    <div id="contact" className='min-h-screen w-full bg-cyan-900 text-gray-100 flex flex-col'>
        <div className="text-6xl md:text-8xl font-bold text-gray-100 p-5">
        <h1>contact</h1>        
        </div>
        
        <div className='min-h-full grow gap-10 flex flex-col items-center justify-center'>
        <AiOutlineGithub onClick={()=>openInNewTab('https://github.com/Mrbusy13')} className="cursor-pointer hover:scale-110" size={100} />
        <AiOutlineLinkedin onClick={()=>openInNewTab('https://www.linkedin.com/in/nick-hughes-7a5a428b/')} className="cursor-pointer hover:scale-110" size={100} />
        <div className='flex flex-col items-center gap-2'>
        <AiOutlineMail size={100}/><p>nickhughes13@googlemail.com</p>
        </div>
        </div>
       
    </div>
  )
}

export default Contact