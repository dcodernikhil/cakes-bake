
import {
  FiArrowUpRight,
  FiHeart,
  FiMapPin,
  FiMail,
  FiClock,
  FiInstagram,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "";
const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || "#";
const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || "#";
const PINTEREST_URL = import.meta.env.VITE_PINTEREST_URL || "#";
const BUSINESS_EMAIL = import.meta.env.VITE_BUSINESS_EMAIL || "";
const BUSINESS_LOCATION = import.meta.env.VITE_BUSINESS_LOCATION || "";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Our Catalogue", path: "/catalogue" },
  { label: "Our Story", path: "/story" },
  { label: "Contact Us", path: "/contact" },
];

const productLinks = [
  { label: "Celebration Cakes", path: "/catalogue?category=cakes" },
  { label: "Custom Cakes", path: "/custom-cake" },
  { label: "Donuts", path: "/catalogue?category=donuts" },
  { label: "Biscuits & Cookies", path: "/catalogue?category=biscuits" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: FiInstagram,
  },
  {
    label: "Facebook",
    href: FACEBOOK_URL,
    icon: FaFacebookF,
  },
  {
    label: "Pinterest",
    href: PINTEREST_URL,
    icon: FaPinterestP,
  },
];

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1 text-sm text-text/70 transition-colors duration-200 hover:text-secondary"
    >
      <span>{children}</span>
      <FiArrowUpRight
        size={13}
        className="opacity-0 transition-opacity group-hover:opacity-100"
      />
    </Link>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background">
      {/* Newsletter-style brand CTA */}
      <div className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary/25 px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border border-secondary/15 sm:h-64 sm:w-64" />
          <div className="pointer-events-none absolute -bottom-20 right-20 h-40 w-40 rounded-full border border-secondary/15 sm:h-56 sm:w-56" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                A little sweetness goes a long way
              </span>

              <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-text sm:text-4xl lg:text-5xl">
                Have something sweet in mind?
              </h2>

              <p className="mt-3 max-w-lg text-base leading-7 text-text/75">
                From everyday treats to cakes made just for your special
                moments, we would love to bake something for you.
              </p>
            </div>

            <Link
              to="/custom-cake"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-secondary-hover hover:shadow-soft"
            >
              Create Your Cake
              <FiArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-10">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="Cakes & Bake home"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary/25 bg-primary/20 text-secondary">
                <span className="font-display text-2xl">C</span>
              </span>

              <span>
                <span className="block font-display text-3xl leading-none text-secondary">
                  Cakes &amp; Bake
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-text/60">
                  Baked with love
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-text/70">
              Homemade goodness, thoughtful details, and little moments
              worth celebrating. Discover your next favourite treat with us.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/60 text-text transition-all duration-200 hover:border-secondary hover:bg-secondary hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xl font-semibold text-text">
              Explore
            </h3>

            <ul className="mt-5 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <FooterLink to={link.path}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Product links */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xl font-semibold text-text">
              Our Treats
            </h3>

            <ul className="mt-5 space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink to={link.path}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xl font-semibold text-text">
              Say Hello
            </h3>

            <div className="mt-5 space-y-5">
              {BUSINESS_LOCATION && (
                <div className="flex items-start gap-3">
                  <FiMapPin
                    className="mt-1 shrink-0 text-secondary"
                    size={18}
                  />
                  <p className="text-sm leading-6 text-text/70">
                    {BUSINESS_LOCATION}
                  </p>
                </div>
              )}

              {BUSINESS_EMAIL && (
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="flex items-start gap-3 text-sm text-text/70 transition-colors hover:text-secondary"
                >
                  <FiMail className="mt-0.5 shrink-0 text-secondary" size={18} />
                  <span className="break-all">{BUSINESS_EMAIL}</span>
                </a>
              )}

              <div className="flex items-start gap-3">
                <FiClock
                  className="mt-0.5 shrink-0 text-secondary"
                  size={18}
                />
                <p className="text-sm leading-6 text-text/70">
                  Made fresh to order.
                  <br />
                  Advance booking recommended.
                </p>
              </div>

              {WHATSAPP_NUMBER && (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary/30 px-4 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white"
                >
                  <FaWhatsapp size={17} />
                  Chat on WhatsApp
                  <FiArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-8 md:flex-row md:text-left lg:px-12">
          <p className="text-xs leading-5 text-text/60">
            © {currentYear} Cakes &amp; Bake. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-text/60">
            Made with <FiHeart className="text-secondary" size={13} /> and a
            little sugar.
          </p>

          <Link
            to="/contact"
            className="text-xs text-text/60 transition-colors hover:text-secondary"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
