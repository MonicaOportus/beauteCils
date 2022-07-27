import logo from "../images/logo.png";
import { Menu } from '@headlessui/react'

function Navbar () {

    function MyDropdown() {
      return (
        <Menu>
            <div className="absolute md:hidden">
                <Menu.Button><i class="fa-solid fa-2xl fa-bars flex-col px-3 py-6 ml-5 mt-2 rounded-full hover:bg-[#f6f6f6]"></i></Menu.Button>
                <Menu.Items className="list-none font-[Raleway] uppercase bg-white
                            text-sm text-black tracking-widest flex flex-col">
                    <Menu.Item className="py-4 navItem">
                    {({ active }) => (
                        <a
                        className={`${active}`}
                        href="/#lashextensions"
                        >
                        lash extensions
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item className="py-4 navItem">
                    {({ active }) => (
                        <a
                        className={`${active}`}
                        target="_blank"
                        href="https://squareup.com/appointments/book/5sv8sknhsct21f/LKPZ691GW0XM9/start"
                        >
                        Booking
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item className="py-4 navItem">
                    {({ active }) => (
                        <a
                        className={`${active}`}
                        href="/contact"
                        >
                        Contact
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item className="py-4 navItem">
                    {({ active }) => (
                        <a
                        className={`${active}`}
                        href="/map"
                        >
                        Location
                        </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </div>
        </Menu>
      )
    }

    return (
        <div className="pb-5">
            <div className="mx-auto pt-6 items-center">
                <MyDropdown/>
                <a href="/">
                    <img 
                        src={logo} 
                        alt="logo" 
                        className="w-56 md:w-72 object-contain mx-auto"
                    />
                </a>
            </div>

            <div class="hidden md:flex items-center justify-center pt-7 sticky">
                <div class="w-16 border-t border-gray-400"></div>
                <span 
                    className="myNav flex-shrink mx-4 flex list-none font-[Raleway] uppercase 
                    text-sm tracking-widest lg:tracking-[0.3em] text-black">
                    <a href="/#lashExtensions">
                        <li className="navItem">
                            lash extensions
                        </li>
                    </a>
                    <a href="https://squareup.com/appointments/book/5sv8sknhsct21f/LKPZ691GW0XM9/start" target="_blank">
                        <li className="navItem">
                            Booking
                        </li>
                    </a>
                    <a href="/contact">
                        <li className="navItem">
                            Contact
                        </li>
                    </a>
                    <a href="/map">
                        <li className="navItem">
                            Location
                        </li>
                    </a>
                </span>
                <div class="w-16 border-t border-gray-400"></div>
            </div>
        </div>
    );
}

export default Navbar;