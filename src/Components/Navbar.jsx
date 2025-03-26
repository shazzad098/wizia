import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle, // Often used for the hamburger, handles state internally or needs connection
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react"; // Assuming NavbarMenuToggle exists, otherwise keep button

function NavbarArea() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
  ];

  // It's often better practice to use the NavbarMenuToggle component if available
  // as it might handle ARIA attributes automatically. If not, the button is fine.
  // We'll stick with the button approach as in your original code for now,
  // but add necessary ARIA attributes.

  return (
    // It's good practice to have an onMenuOpenChange handler on Navbar
    <Navbar
      onMenuOpenChange={setIsMenuOpen} // Syncs state if menu is closed internally (e.g., clicking outside)
      isMenuOpen={isMenuOpen}        // Pass state down to Navbar
      className="bg-[#002228] relative"
      // isBordered // Optional: adds a bottom border
      // maxWidth="xl" // Optional: constrain width
    >
      {/* Content visible always, holds brand and toggle */}
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4"> {/* Add margin if needed */}
          <img src="Logo.png" alt="Wizia" />
        </NavbarBrand>
         {/* Hamburger Menu Toggle - shown only on sm and smaller */}
         <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white" // Show only on small screens, style if needed
            // If NavbarMenuToggle doesn't exist or work as expected, revert to button:
            // onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
      </NavbarContent>

      {/* Desktop Menu Content - hidden on sm and smaller */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}> {/* Use item and index for key */}
            <Link className="text-white hover:text-main" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Desktop Action Buttons - hidden on sm and smaller */}
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button
            className="text-black rounded-full bg-main mr-2"
            as={Link}
            href="#"
            variant="flat"
            size="sm" // Adjust size if needed
          >
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white rounded-full bg-transparent border border-white hover:bg-white hover:text-[#002228]" // Add hover effect
            as={Link}
            href="#"
            variant="flat" // 'flat' or 'bordered' might be more suitable
             size="sm" // Adjust size if needed
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu - visibility controlled by isMenuOpen state */}
      {/* REMOVED sm:hidden FROM HERE */}
      <NavbarMenu className="bg-[#002228] pt-4"> {/* Add padding-top if needed */}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white hover:text-main py-2 block" // Removed px-4, relies on item padding
              href="#"
              size="lg" // Make tap targets larger on mobile
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        {/* Mobile Buttons */}
         <NavbarMenuItem className="pt-4"> {/* Add spacing */}
          <Button
            className="text-black rounded-full bg-main w-full"
            as={Link}
            href="#"
            variant="flat"
            onClick={() => setIsMenuOpen(false)} // Close menu on item click
          >
            Book a Demo
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            className="text-white rounded-full bg-transparent border border-white hover:bg-white hover:text-[#002228] w-full" // Added hover
            as={Link}
            href="#"
            variant="flat" // or 'bordered'
             onClick={() => setIsMenuOpen(false)} // Close menu on item click
          >
            Contact Us
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarArea;