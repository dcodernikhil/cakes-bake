
import { FaHeart, FaBirthdayCake, FaCookieBite } from "react-icons/fa";

const craftDetails = [
  {
    icon: FaHeart,
    title: "Made with Care",
    description:
      "Every detail matters, from preparing the bake to adding the final finishing touch.",
  },
  {
    icon: FaBirthdayCake,
    title: "Created for Moments",
    description:
      "From little treats to celebration cakes, every creation has a moment to make sweeter.",
  },
  {
    icon: FaCookieBite,
    title: "A Love for Baking",
    description:
      "A thoughtful approach to flavours, textures, and the simple joy of something freshly baked.",
  },
];

const StoryCraft = () => {
  return (
    <section className="overflow-hidden bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary sm:text-sm">
            The Art Behind Every Bake
          </span>

          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
            A Little Patience.
            <span className="block italic text-secondary">
              A Lot of Heart.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Baking is a collection of little details. The
            flavours, the textures, the finishing touches,
            and the thought that goes into creating something
            worth sharing.
          </p>
        </div>

        {/* Main editorial image */}
        <div className="relative mb-12 overflow-hidden rounded-[2rem] sm:mb-16">
          <div className="aspect-[5/4] sm:aspect-[16/7]">
            <img
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1800&q=85"
              alt="Beautifully prepared cupcakes and delicate bakery treats"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-text/75 via-text/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-12">
            <p className="max-w-2xl font-heading text-2xl italic leading-snug text-white sm:text-3xl md:text-4xl">
              "The magic isn't just in the recipe. It's in
              the care behind every little detail."
            </p>
          </div>
        </div>

        {/* Craft principles */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10">
          {craftDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group border-t border-border pt-6 transition-colors duration-300 hover:border-secondary sm:pt-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    <Icon className="text-lg" aria-hidden="true" />
                  </div>

                  <span className="font-heading text-2xl italic text-accent">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-2xl font-semibold text-text sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StoryCraft;
