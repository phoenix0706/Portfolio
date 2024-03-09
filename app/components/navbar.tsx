"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Button,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function CNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Timeline",
    "Projects",
    "Contact",
  ];
  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        //  css={{}}
        maxWidth="full"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        {/* <NavbarContent className="sm:hidden pr-3" justify="center"></NavbarContent> */}
        <NavbarContent justify="start">
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="responsive font-bold text-inherit">Portfolio</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="responsive hidden sm:flex " justify="end">
          <NavbarItem>
            <Link color="foreground" href="#home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#about" color="secondary">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#skills">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#timeline">
              Timeline
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#projects">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="secondary" href="#contact" variant="flat">
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher></ThemeSwitcher>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
