import { useState } from 'react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Social", href: "#social" },
  ];

  return (
    <>
      <div className="sticky z-10 md:fixed top-0 w-full md:top-5 md:px-5">
        <div className="navbar bg-base-100 shadow-sm md:rounded-xl">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex-1">
              <a href="#top" className="btn btn-ghost text-xl">Portfolio</a>
            </div>
            <div className="flex-none md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn btn-square btn-ghost"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
              </button>
              <ul
                className={`
                  ${isMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'}
                transition-all duration-300 ease-out menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow absolute top-10 right-0
                `}>
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-none hidden md:flex">
              <ul className="menu menu-horizontal px-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div >
        </div >
      </div >
    </>
  );
};
