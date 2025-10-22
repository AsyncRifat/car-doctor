import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from './NavLinks';
import MobileDrawer from './MobileDrawer';
import AuthButton from './AuthButton';

export default function Navbar() {
  return (
    <nav className="navbar max-w-7xl mx-auto backdrop-blur-md">
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
        <AuthButton />
        <MobileDrawer /> {/* Only this hydrates */}
      </div>
    </nav>
  );
}
