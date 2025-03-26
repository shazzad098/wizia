import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

function NavbarArea() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
  ];

  return (
    <Navbar className="bg-[#002228] relative">
      <NavbarContent className="flex justify-between items-center">
        <NavbarBrand>
          <img src="Logo.png" alt="Wizia" />
        </NavbarBrand>

        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="focus:outline-none"
          >
            <img
              src="/hamburger.png"
              alt="Menu"
              className="h-6 w-6"
            />
          </button>
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 justify-center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link className="text-white hover:text-main" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button
            className="text-black rounded-full bg-main mr-2"
            as={Link}
            href="#"
            variant="flat"
          >
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white rounded-full bg-transparent border"
            as={Link}
            href="#"
            variant="flat"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className={`${isMenuOpen ? "block" : "hidden"
          } sm:hidden absolute top-full left-0 right-0 bg-[#002228] py-4 z-50`}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full text-white hover:text-main py-2 block px-4"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          <Button
            className="text-black rounded-full bg-main w-full my-2 mx-4"
            as={Link}
            href="#"
            variant="flat"
          >
            Book a Demo
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            className="text-white rounded-full bg-transparent border w-full mx-4"
            as={Link}
            href="#"
            variant="flat"
          >
            Contact Us
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarArea;