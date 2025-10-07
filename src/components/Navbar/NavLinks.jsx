import Link from 'next/link';

export const NavLinks = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {links.map(l => (
        <li key={l.name}>
          <Link
            href={l.href}
            className="hover:text-primary transition-colors hover:underline font-medium text-[15px]"
          >
            {l.name}
          </Link>
        </li>
      ))}
    </>
  );
};
