
import { FaArrowRight, FaWhatsapp, FaHeart } from "react-icons/fa";

const StoryClosing = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const message =
    "Hi Cakes & Bake! I'd love to enquire about placing an order.";

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : "/contact";

  return (
    <section className="bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-secondary px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-16 -z-10 h-48 w-48 rounded-full border border-white/20 sm:h-64 sm:w-64"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-12 -z-10 h-56 w-56 rounded-full border border-white/20 sm:h-80 sm:w-80"
          />

          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white">
              <FaHeart className="text-xl" />
            </div>

            <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-sm">
              Your Sweet Story Starts Here
            </span>

            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Let's Make
              <span className="block italic text-[#F4D8D5]">
                Something Sweet.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              From a little treat for yourself to a cake for
              a moment worth celebrating, we'd love to be
              part of your next sweet memory.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/catalogue"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-background px-7 py-3.5 font-semibold text-text transition duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary"
              >
                Explore Our Bakes
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={whatsappLink}
                target={whatsappNumber ? "_blank" : undefined}
                rel={whatsappNumber ? "noreferrer" : undefined}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/50 px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary"
              >
                <FaWhatsapp className="text-lg" />
                Let's Talk
              </a>
            </div>

            <p className="mt-7 font-heading text-xl italic text-white/80 sm:text-2xl">
              Baked with love, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryClosing;
