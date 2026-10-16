
import { FaArrowRight, FaWhatsapp, FaCheck } from "react-icons/fa";

const features = [
  "Personalised designs for your occasion",
  "Choose your favourite flavours",
  "Made especially for your celebration",
];

const CustomCakeStudio = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const message =
    "Hi Cakes & Bake! I'd like to discuss a custom cake. Could you help me with design, flavours, sizes, and pricing?";

  const enquiryLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : "/contact";

  return (
    <section
      id="custom-cake-studio"
      className="overflow-hidden bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image composition */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-primary/25 sm:-left-6 sm:-top-6 sm:h-40 sm:w-40" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft sm:aspect-[5/4] lg:aspect-[4/5] lg:max-h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1200&q=85"
              alt="Beautiful custom celebration cake with delicate decorations"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-text/35 via-transparent to-transparent" />
          </div>

          {/* Floating note */}
          <div className="absolute -bottom-5 right-3 max-w-[240px] rounded-2xl border border-border/70 bg-background p-4 shadow-soft sm:bottom-8 sm:-right-5 sm:p-5 lg:-right-8">
            <p className="font-display text-xl text-secondary sm:text-2xl">
              Made just for you
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Your ideas, our little touch of sweetness.
            </p>
          </div>

          <div className="absolute right-3 top-4 flex h-20 w-20 rotate-6 flex-col items-center justify-center rounded-full border border-white/70 bg-primary/90 text-center text-text shadow-sm sm:right-5 sm:top-6 sm:h-24 sm:w-24">
            <span className="font-heading text-lg font-semibold sm:text-xl">
              Made
            </span>
            <span className="text-xs uppercase tracking-widest">
              with love
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="pt-5 text-center lg:pt-0 lg:text-left">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Your Vision, Our Creation
          </span>

          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
            A Cake as
            <span className="block italic text-secondary">
              Unique as Your Story
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl lg:mx-0">
            Birthdays, anniversaries, little surprises, or
            milestones worth remembering. Tell us what
            you're dreaming of, and let's make something
            special together.
          </p>

          {/* Features */}
          <ul className="mx-auto mt-7 max-w-lg space-y-4 text-left lg:mx-0">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-base text-text sm:text-lg"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/30 text-secondary">
                  <FaCheck className="text-xs" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="/custom-cake"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-secondary px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Design Your Cake
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={enquiryLink}
              target={whatsappNumber ? "_blank" : undefined}
              rel={whatsappNumber ? "noreferrer" : undefined}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-border bg-background px-7 py-3.5 font-semibold text-text transition duration-300 hover:border-secondary hover:bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              <FaWhatsapp className="text-lg text-secondary" />
              Talk to Us
            </a>
          </div>

          <p className="mt-5 text-sm italic text-muted">
            Every celebration deserves a little something sweet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomCakeStudio;
