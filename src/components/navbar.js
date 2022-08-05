import logo from "../images/logo.png";
import { Menu } from '@headlessui/react'

function Navbar () {

    function MyDropdown() {
      return (
        <Menu>
            <div className="absolute md:hidden">
                <Menu.Button><i class="fa-solid fa-2xl fa-bars flex-col px-3 py-6 ml-5 mt-2 rounded-full myHover"></i></Menu.Button>
                <Menu.Items className="list-none raleway bg-[#0E1F27] text-sm text-[#EBCCA4] tracking-widest flex flex-col">
                    <Menu.Item className="py-4 navItem">
                    {({ active }) => (
                        <a
                        className={`${active}`}
                        href="/#lashextensions"
                        >
                        LASH EXTENSIONS
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item className="py-4 navItem">
                    {({ active }) => (
                        <a
                        className={`${active}`}
                        target="_blank"
                        href="https://squareup.com/appointments/book/zoaydukjzatyuh/LJKRK6Q7FWDB7/start"
                        >
                        BOOKING
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item className="py-4 navItem">
                    {({ active }) => (
                        <a
                        className={`${active}`}
                        href="/contact"
                        >
                        CONTACT
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item className="py-4 navItem">
                    {({ active }) => (
                        <a
                        className={`${active}`}
                        href="/map"
                        >
                        LOCATION
                        </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </div>
        </Menu>
      )
    }

    return (
        <div className="pb-5 bg-[#16313D]">
            <div className="mx-auto pt-6 items-center">
                <MyDropdown/>
                <a href="/">
                    <img 
                        src={logo} 
                        alt="logo" 
                        className="w-48 md:w-60 object-contain mx-auto"
                    />
                </a>
            </div>

            <div class="hidden md:flex items-center justify-center pt-7 sticky">
                <div class="w-16 border-t border-[#EBCCA4]"></div>
                <span 
                    className="myNav flex-shrink mx-4 flex list-none raleway 
                    text-sm tracking-widest lg:tracking-[0.3em] text-[#EBCCA4]">
                    <a href="/#lashExtensions">
                        <li className="navItem">
                            LASH EXTENSIONS
                        </li>
                    </a>
                    <a href="https://squareup.com/appointments/book/zoaydukjzatyuh/LJKRK6Q7FWDB7/start" target="_blank">
                        <li className="navItem">
                            BOOKING
                        </li>
                    </a>
                    <a href="/contact">
                        <li className="navItem">
                            CONTACT
                        </li>
                    </a>
                    <a href="/map">
                        <li className="navItem">
                            LOCATION
                        </li>
                    </a>
                </span>
                <div class="w-16 border-t border-[#EBCCA4]"></div>
            </div>
        </div>
    );
}

export default Navbar;