import {FaLinkedin} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"

function FrontendCard() {
  return (
    <div className='bg-white shadow-lg md:w-[413px] rounded-xl flex flex-col py-4 px-6 gap-4'>
        <img src="./img/profile.jpg" alt="Aron profile" className='w-[230px] md:w-[366px] rounded-xl' />
        <div>
            <h1 className='text-xl md:text-2xl font-semibold'>Aron Gómez</h1>
            <h2 className='text-[#828282] text-sm md:text-lg'>Front-end developer</h2>
        </div>
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <FaLinkedin className="md:w-[25px] md:h-[25px]" />
                <p className="md:text-lg text-sm"><a href="https://www.linkedin.com/in/brian-ar%C3%B3n-g%C3%B3mez-sequeiros/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 hover:underline transition">Aron Gómez</a></p>
            </div>
            <div className="flex items-center gap-2">
                <FaGithubSquare className="md:w-[25px] md:h-[25px]" />
                <p className="text-sm md:text-lg"><a href="https://github.com/Bagse" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 hover:underline transition">Bagse</a></p>
            </div>
        </div>
        <div>
            <p className="w-[300px] text-[#828282] text-sm md:text-lg">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
        </div>
    </div>
  )
}

export default FrontendCard