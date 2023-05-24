import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"


const Contact = () => {
  const openInNewTab = (url:any) => {
    window.open(url, "_blank", "noreferrer")
  };
  return (
    <div id="contact" className='h-screen w-full bg-slate-500 text-gray-100 '>
        <div className="text-6xl md:text-8xl font-bold text-gray-100 p-5">
        <h1>contact</h1>        
        </div>
        
        <div className='min-h-full gap-10 flex flex-col items-center justify-center'>
        <AiOutlineGithub onClick={()=>openInNewTab('https://github.com/Mrbusy13')} className="cursor-pointer hover:scale-110" size={100} />
        <AiOutlineLinkedin onClick={()=>openInNewTab('https://www.linkedin.com/in/nick-hughes-7a5a428b/')} className="cursor-pointer hover:scale-110" size={100} />
        <div className='flex flex-col items-center gap-2'>
        <AiOutlineMail className="cursor-pointer" size={100}/><p>nickhughes13@googlemail.com</p>
        </div>
        </div>
       
    </div>
  )
}

export default Contact