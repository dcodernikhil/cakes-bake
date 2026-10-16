
import { FaArrowRight } from "react-icons/fa";

const categories = [
  {
    name: "Celebration Cakes",
    description: "Make every moment sweeter.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    href: "/catalogue?category=cakes",
    imagePosition: "center",
  },
  {
    name: "Donuts",
    description: "Little rings of happiness.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=85",
    href: "/catalogue?category=donuts",
    imagePosition: "center",
  },
  {
    name: "Cookies & Biscuits",
    description: "A comforting bite of goodness.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",
    href: "/catalogue?category=biscuits",
    imagePosition: "center",
  },
  {
    name: "Custom Creations",
    description: "Your idea, baked beautifully.",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=85",
    href: "/custom-cake",
    imagePosition: "center",
  },
];

const CategoryShowcase = () => {
  return (
    <section
      id="categories"
      className="bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Find Your Favourite
          </span>

          <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
            Something Sweet for
            <span className="block italic text-secondary">
              Every Occasion
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            From everyday indulgences to centrepieces for
            your special celebrations, there is a little
            sweetness waiting for everyone.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative block overflow-hidden rounded-2xl bg-background shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4"
              aria-label={`Explore ${category.name}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[4/5]">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    objectPosition: category.imagePosition,
                  }}
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/75" />

                {/* Category number */}
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/15 font-heading text-lg text-white backdrop-blur-sm">
                  0{index + 1}
                </span>

                {/* Text over image */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-heading text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                    {category.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="border-b border-white/60 pb-1">
                      Explore Collection
                    </span>

                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all */}
        <div className="mt-9 text-center sm:mt-12">
          <a
            href="/catalogue"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-secondary px-7 py-3 text-base font-semibold text-secondary transition duration-300 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            View Full Catalogue
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
