import {BsGlobe2} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {RiUserFill} from 'react-icons/ri'
// import girisyap from './girisyap'


export default function Header() {
  return (
    <div className="bg-brand-color">
      <div className="container mx-auto h-11 flex items-center justify-between ">
        <a href="#" className="text-yellow-500">
         
        
        Götür
        </a>

        <nav className="flex gap-x-8 text-sm font-semibold ">
          <a href="#" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
            
          <BsGlobe2 size={20}/>
            Türkçe (TR)</a>
          <a href="#" className=" flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
            <RiUserFill size={20}/>
            Giriş yap</a>
          <a href="#" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
             <FaUserAlt size={20}/>
            Kayıt Ol</a>
        </nav>
      </div>
    </div>
  );
}
