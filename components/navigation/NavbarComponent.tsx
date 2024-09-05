'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import asset from "@/public/assets";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
// import Link from "next/link";
// import NextLink from "next/link"; 

const NavbarComponent: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  const handleNavItemClick = (name: string) => {
    setActiveNavItem(name);
  };

  return (
    <Navbar maxWidth={"full"} className="bg-white p-[0.4rem] md:pl-[5rem] md:pr-[5rem] z-[9999]">
        <NavbarBrand className="flex gap-3 max-md:items-center max-md:justify-center cursor-pointer">
          <Image src={asset.logo} alt="logo" width={100} height={100} />
          <h1 className="text-[1.7rem] font-bold max-md:hidden">LilDiary</h1>
        </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70} 
            onSetActive={() => handleNavItemClick("home")}
            className={`text-xl cursor-pointer ${activeNavItem === "home" ? "font-bold text-primary" : ""}`}
          >
            Home
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={() => handleNavItemClick("features")}
            className={`text-xl cursor-pointer ${activeNavItem === "features" ? "font-bold text-primary" : ""}`}
          >
            Our Features
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink
            to="whyUs"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={() => handleNavItemClick("whyUs")}
            className={`text-xl cursor-pointer ${activeNavItem === "whyUs" ? "font-bold text-primary" : ""}`}
          >
            Why Us
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink
            to="aboutUs"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={() => handleNavItemClick("aboutUs")}
            className={`text-xl cursor-pointer ${activeNavItem === "aboutUs" ? "font-bold text-primary" : ""}`}
          >
            About Us
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink
            to="ourStory"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={() => handleNavItemClick("ourStory")}
            className={`text-xl cursor-pointer ${activeNavItem === "ourStory" ? "font-bold text-primary" : ""}`}
          >
            Our Story
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
            <Button color="primary" variant="flat" className="text-xl text-[#ff49bf] font-bold">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="cursor-pointer"
          >
              Contact Us
          </ScrollLink>
            </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
