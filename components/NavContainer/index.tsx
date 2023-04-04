import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { SwitchTheme } from "../SwitchTheme";
import { NavList } from "./NavList";
 
export function NavContainer() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-2xl py-2 px-4 lg:px-8 lg:py-4 dark:bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-60 transition-colors">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 dark:text-white ">
        <Typography
          as="div"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link href="/">Home</Link>
        </Typography>
        <div className="hidden lg:block">{<NavList />}</div>
        <SwitchTheme className="hidden lg:block"/>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {<NavList />}
        <SwitchTheme />
      </MobileNav>
    </Navbar>
  );
}