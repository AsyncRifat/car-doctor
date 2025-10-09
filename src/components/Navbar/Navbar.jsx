import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from './NavLinks';
import MobileDrawer from './MobileDrawer';
import { Button } from '../ui/button';
import { Handbag } from 'lucide-react';
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar max-w-7xl mx-auto backdrop-blur-md z-50">
      {/* Left Section */}
      <div className="navbar-start">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={70} height={70} priority />
        </Link>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <NavLinks />
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end gap-3 md:gap-5 lg:gap-7 ">
        <Handbag />
        <Search />
        <Button
          variant={'navButton'}
          className="hidden lg:block px-8 pb-8 pt-3 cursor-pointer"
        >
          Appointment
        </Button>
        <MobileDrawer /> {/* Only this hydrates */}
      </div>
    </nav>
  );
}
