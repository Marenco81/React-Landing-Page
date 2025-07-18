import { useState } from 'react';
import {Menu, X} from 'lucide-react';
import logo from '../assets/logo.png';
import { NavItem } from './NavItem';
import { navItems } from '../constants';

export const Navbar = () => {

 
    
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
                    <span className='text-xl tracking-tight'>Logo</span>
                </div>
                <NavItem classname=''></NavItem>
                <div className='hidden lg:flex justify-center space-x-12 items-center ml-6 '>
                    <a href="#" className='py-2 px-3 border rounded-md hover:bg-amber-50 hover:text-black hover:rounded-md hover:font-semibold '>
                        Sign In
                    </a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 ml-2 rounded-md hover:scale-105'>
                        Create an account
                    </a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu/> }
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    {/* <NavItem classname='sm:flex flex-col justify-center items-center text-center md:ml-0 md:space-x-0 gap-6'></NavItem> */}
                    <ul>
                        {navItems.map((item, index) => (
                            <li className='py-4' key={index}>
                                <a href={item.href}> {item.label} </a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center space-x-12 items-center ml-6 mt-10'>
                    <a href="#" className='py-2 px-3 border rounded-md hover:bg-amber-50 hover:text-black hover:rounded-md hover:font-semibold '>
                        Sign In
                    </a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 ml-2 rounded-md hover:scale-105'>
                        Create an account
                    </a>
                </div>
                </div>
            )}
        </div>
    </nav>
  )
}
