import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from './Theme/ThemeToggle';

export default function Footer() {
  return (
    <footer
      className="bg-base-100 text-base-content py-10"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-7 px-6">
        {/* Brand Section */}
        <aside
          itemScope
          itemType="https://schema.org/Organization"
          className="space-y-3"
        >
          <meta itemProp="name" content="Edwin Diag" />
          <Image
            src="/logo.svg"
            alt="Edwin Diag Logo"
            width={70}
            height={70}
            priority
            itemProp="logo"
          />
          <p itemProp="description" className="text-sm leading-relaxed">
            Edwin Diag is a software and web technologies engineer,
            <br /> a life coach trainer and serial innovator.
          </p>

          <div className="w-fit mt-5">
            <ThemeToggle />
          </div>
        </aside>

        {/* About Links */}
        <nav aria-label="About section" className="text-center">
          <h6 className="footer-title text-lg font-semibold mb-2">About</h6>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="link link-hover" itemProp="url">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="link link-hover" itemProp="url">
                Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link link-hover" itemProp="url">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Company Links */}
        <nav aria-label="Company section" className="text-center">
          <h6 className="footer-title text-lg font-semibold mb-2">Company</h6>
          <ul className="space-y-1">
            <li>
              <Link href="/why-us" className="link link-hover" itemProp="url">
                Why Car Doctor
              </Link>
            </li>
            <li>
              <Link href="/about" className="link link-hover" itemProp="url">
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Support Links */}
        <nav aria-label="Support section" className="text-center">
          <h6 className="footer-title text-lg font-semibold mb-2">Support</h6>
          <ul className="space-y-1">
            <li>
              <Link href="/terms" className="link link-hover" itemProp="url">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/support" className="link link-hover" itemProp="url">
                Support Center
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="link link-hover" itemProp="url">
                Feedback
              </Link>
            </li>
            <li>
              <Link
                href="/accessibility"
                className="link link-hover"
                itemProp="url"
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Credit */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-5">
        <p>
          © {new Date().getFullYear()} <span itemProp="name">Edwin Diag</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
