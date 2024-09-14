import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/app/_components/ui/Dropdown";
import home from "../../../public/home.png";
import { Button } from "../ui/Button";
import ThemeSwitcher from "./ThemeSwitcher";
import UserProfile from "./UserProfile";

const Navbar = () => {
  return (
    <header className="w-full bg-background">
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 lg:px-10">
        <Link href="#" className="text-xl font-bold text-primary">
          Wpu Blog
        </Link>
        <div className="mx-auto flex items-center gap-4 ps-28">
          <Link className="py-4" href="#">
            Home
          </Link>
          <Link className="py-4" href="#">
            About Us
          </Link>
          <Link className="py-4" href="#">
            Contact Us
          </Link>
        </div>
        <ThemeSwitcher />
        <UserProfile />
      </nav>
    </header>
  );
};

export default Navbar;
