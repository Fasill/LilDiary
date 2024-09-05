'use client'

import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import asset from '@/public/assets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';

const NavbarComponent: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavItemClick = (name: string, route: string) => {
    setActiveNavItem(name);
    router.push(route);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Navbar maxWidth={"full"} className="bg-white p-[0.4rem] md:pl-[5rem] md:pr-[5rem] z-[9999] shadow-md">
        <NavbarBrand className="flex gap-3 max-md:items-center max-md:justify-center cursor-pointer">
          <Image src={asset.logo} alt="logo" width={100} height={100} />
          <h1 className="text-[1.7rem] font-bold max-md:hidden">LilDiary</h1>
        </NavbarBrand>
        
        {/* Burger Icon for mobile view */}
        <div className="sm:hidden ml-auto cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="text-2xl"/> : <FaBars className="text-2xl"/>}
        </div>

        {/* Full menu for larger screens */}
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem
            className={`text-xl cursor-pointer ${activeNavItem === 'home' ? 'font-bold text-primary' : ''}`}
            onClick={() => handleNavItemClick('home', '/')}
          >
            Home
          </NavbarItem>
          <NavbarItem
            className={`text-xl cursor-pointer ${activeNavItem === 'aboutUs' ? 'font-bold text-primary' : ''}`}
            onClick={() => handleNavItemClick('aboutUs', '/about')}
          >
            About Us
          </NavbarItem>

          <NavbarItem
            className={`text-xl cursor-pointer ${activeNavItem === 'ourStory' ? 'font-bold text-primary' : ''}`}
            onClick={() => handleNavItemClick('ourStory', '/story')}
          >
            Our Story
          </NavbarItem>

          {/* Dropdown for Policy */}
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <NavbarItem
                  className={` flex items-center justify-center text-xl cursor-pointer ${activeNavItem === 'privacyPolicy' || activeNavItem === 'termsAndConditions' ? 'font-bold text-primary' : ''}`}
                >
                  Policy <FaAngleDown />
                </NavbarItem>
              </DropdownTrigger>
              <DropdownMenu aria-label="Policy Menu">
                <DropdownItem key="privacy" onClick={() => handleNavItemClick('privacyPolicy', '/privacyPolicy')}>
                  Privacy Policy
                </DropdownItem>
                <DropdownItem key="terms" onClick={() => handleNavItemClick('termsAndConditions', '/termsAndConditions')}>
                  Terms & Conditions
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem>
            <Button
              color="primary"
              variant="flat"
              className={`text-xl font-bold ${activeNavItem === 'contactUs' ? 'text-[#ff49bf]' : ''}`}
              onClick={() => handleNavItemClick('contactUs', '/contactus')}
            >
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>
      <div className={`fixed top-0 right-0 h-[100lvh] w-[250px] bg-[#3a1c1cc7] shadow-lg z-[10000] transform sm:hidden text-[white] ${isMenuOpen ? ' translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col gap-6 p-6">
          <NavbarItem
            className={`text-xl cursor-pointer ${activeNavItem === 'home' ? 'font-bold text-primary' : ''}`}
            onClick={() => handleNavItemClick('home', '/')}
          >
            Home
          </NavbarItem>
          <NavbarItem
            className={`text-xl cursor-pointer ${activeNavItem === 'aboutUs' ? 'font-bold text-primary' : ''}`}
            onClick={() => handleNavItemClick('aboutUs', '/about')}
          >
            About Us
          </NavbarItem>
          <NavbarItem
            className={`text-xl cursor-pointer ${activeNavItem === 'ourStory' ? 'font-bold text-primary' : ''}`}
            onClick={() => handleNavItemClick('ourStory', '/story')}
          >
            Our Story
          </NavbarItem>
          
          {/* Dropdown for Policy */}
          <Dropdown>
            <DropdownTrigger>
              <p
                className={`self-start flex items-center justify-center text-xl cursor-pointer ${activeNavItem === 'privacyPolicy' || activeNavItem === 'termsAndConditions' ? 'font-bold text-primary' : ''}`}
              >
                Policy <FaAngleDown />
              </p>
            </DropdownTrigger>
            <DropdownMenu aria-label="Policy Menu">
              <DropdownItem key="privacy" onClick={() => handleNavItemClick('privacyPolicy', '/privacyPolicy')}>
                Privacy Policy
              </DropdownItem>
              <DropdownItem key="terms" onClick={() => handleNavItemClick('termsAndConditions', '/termsAndConditions')}>
                Terms & Conditions
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Button
            color="primary"
            variant="flat"
            className={`text-xl font-bold ${activeNavItem === 'contactUs' ? 'text-[#ff49bf]' : ''}`}
            onClick={() => handleNavItemClick('contactUs', '/contactus')}
          >
            Contact Us
          </Button>
        </div>
      </div>
      </Navbar>

      {/* Right Slider for mobile view */}
    </div>

  );
};

export default NavbarComponent;
