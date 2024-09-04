'use client';
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import asset from "@/public/assets";
import Image from "next/image";

const NavbarComponent = () => {
  return (
    <Navbar shouldHideOnScroll maxWidth={"full"} className="bg-white p-[0.4rem] pl-[5rem] pr-[5rem] z-[9999]">
      <NavbarBrand className="flex gap-3">
        <Image src={asset.logo} alt="logo" width={100} height={100} />
        <h1 className="text-[2.5rem] font-bold">LilDiary</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" aria-current="page" href="#" className="text-xl font-sans">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#"  className="text-xl font-sans">
            Our services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-xl font-sans">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-xl font-sans">
            Policy
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="text-xl font-sans">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarComponent;
