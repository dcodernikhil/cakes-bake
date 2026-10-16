
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi Cakes & Bake! I'd like to enquire about a cake."
      )}`
    : "/contact";

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[720px] lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-20">
        {/* Left: Hero content */}
        <div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium tracking-wide text-secondary">
            <span className="h-2 w-2 rounded-full bg-accent" />
            HOMEMADE WITH LOVE
          </span>

          <h1 className="mx-auto max-w-2xl font-heading text-5xl font-semibold leading-[1.08] text-text sm:text-6xl md:text-7xl lg:mx-0 lg:text-[76px]">
            A Little
            <span className="block italic text-secondary">
              Sweetness
            </span>
            Goes a Long Way.
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl lg:mx-0">
            From everyday treats to cakes made for your
            special moments, discover the joy of freshly
            baked goodness at Cakes &amp; Bake.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="/catalogue"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-secondary px-7 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Explore Catalogue
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={whatsappLink}
              target={whatsappNumber ? "_blank" : undefined}
              rel={whatsappNumber ? "noreferrer" : undefined}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-border bg-surface px-7 py-3.5 text-base font-semibold text-text transition duration-300 hover:border-secondary hover:bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              <FaWhatsapp className="text-lg text-secondary" />
              Custom Cake Enquiry
            </a>
          </div>

          {/* Small brand detail */}
          <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
            <div className="h-px w-12 bg-border" />
            <p className="font-heading text-lg italic text-muted">
              Baked fresh, shared with love.
            </p>
            <div className="h-px w-12 bg-border lg:hidden" />
          </div>
        </div>

        {/* Right: Hero image */}
        <div className="relative order-1 mx-auto w-full max-w-xl lg:order-2 lg:max-w-none">
          {/* Decorative background */}
          <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full bg-primary/30 sm:-right-5 sm:-top-5 sm:h-40 sm:w-40" />
          <div className="absolute -bottom-4 -left-3 h-24 w-24 rounded-full bg-accent/20 sm:-bottom-6 sm:-left-5 sm:h-36 sm:w-36" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[6px] border-surface shadow-soft sm:aspect-[5/4] lg:aspect-[4/5] lg:rounded-[48%_48%_1.5rem_1.5rem]">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85"
              alt="Beautiful celebration cake decorated with chocolate and cream"
              fetchPriority="high"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-text/25 via-transparent to-transparent" />
          </div>

          {/* Floating label */}
          <div className="absolute -bottom-5 left-3 max-w-[220px] rounded-2xl border border-border/70 bg-surface p-4 shadow-soft sm:bottom-8 sm:-left-5 sm:p-5 lg:-left-8">
            <p className="font-heading text-xl font-semibold text-text sm:text-2xl">
              Made with love
            </p>
            <p className="mt-1 text-sm text-muted">
              Little treats, unforgettable moments.
            </p>
          </div>

          {/* Decorative text */}
          <div className="absolute -right-1 top-5 hidden -rotate-6 rounded-full border border-secondary/30 bg-surface/95 px-5 py-3 text-center sm:block lg:-right-4 lg:top-10">
            <p className="font-display text-lg text-secondary">
              Sweet moments
            </p>
            <p className="text-xs tracking-widest text-muted">
              MADE FROM THE HEART
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
