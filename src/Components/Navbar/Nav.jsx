import { useState } from "react";
import { AiOutlineMenu,AiOutlineCloseCircle} from 'react-icons/ai'
import Link from "../Link/Link";
const Nav = () => {
    const [open,SetOpen] = useState(true);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Portfolio', path: '/portfolio' },
        { id: 5, name: 'Contact', path: '/contact' },
      ];
      

    return (
        <nav className="">
            <div className="md:hidden text-2xl px-5" onClick={() => SetOpen(!open)}>
                {
                    open === true ? <AiOutlineMenu className="mt-5"></AiOutlineMenu>:<AiOutlineCloseCircle  className="mt-5"></AiOutlineCloseCircle>
                }
                
            </div>
            
            <ul className={`md:flex md:px-10 md:mx-0 md:py-0 py-1 mx-10 rounded-xl md:rounded-none duration-1000  absolute md:static
            ${open ? '-top-60': 'top-8'} md:bg-none
            bg-slate-600  text-white md:text-yellow-300`}>
                {
                    
                    routes.map( route => (
                        <Link key={route.id} route={route}></Link>                        
                    ))
                }
            </ul>
        </nav>
    );
};

export default Nav;