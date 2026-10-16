
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiShoppingBag,
  FiArrowUpRight,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Catalogue", path: "/catalogue" },
  { name: "Our Story", path: "/story" },
  { name: "Contact", path: "/contact" },
];

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-base transition-colors duration-200 ${
      isActive
        ? "font-semibold text-secondary"
        : "text-text/75 hover:text-secondary"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Cakes & Bake home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/30 bg-primary/20 text-secondary transition-transform duration-300 group-hover:rotate-6">
            <FiShoppingBag size={21} />
          </span>

          <span className="flex flex-col">
            <span className="font-display text-2xl leading-none text-secondary sm:text-3xl">
              Cakes & Bake
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-text/65">
              Baked with love
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-secondary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={
            WHATSAPP_NUMBER
              ? `https://wa.me/${WHATSAPP_NUMBER}`
              : "/contact"
          }
          target={WHATSAPP_NUMBER ? "_blank" : undefined}
          rel={WHATSAPP_NUMBER ? "noreferrer" : undefined}
          className="hidden items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-secondary-hover hover:shadow-soft md:inline-flex"
        >
          Let's Talk
          <FiArrowUpRight size={17} />
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors hover:bg-primary/20 md:hidden"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-border/60 bg-background transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 sm:px-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              className={({ isActive }) =>
                `border-b border-border/60 py-4 text-lg transition-colors ${
                  isActive
                    ? "font-semibold text-secondary"
                    : "text-text/80 hover:text-secondary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href={
              WHATSAPP_NUMBER
                ? `https://wa.me/${WHATSAPP_NUMBER}`
                : "/contact"
            }
            target={WHATSAPP_NUMBER ? "_blank" : undefined}
            rel={WHATSAPP_NUMBER ? "noreferrer" : undefined}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3.5 font-semibold text-white transition-colors hover:bg-secondary-hover"
          >
            Let's Talk
            <FiArrowUpRight size={18} />
          </a>

          <p className="py-5 text-center font-display text-xl text-secondary/80">
            A little sweetness, made with love.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
