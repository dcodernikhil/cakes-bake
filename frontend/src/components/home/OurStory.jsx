
import { FaArrowRight, FaHeart } from "react-icons/fa";

const OurStory = () => {
  return (
    <section
      id="our-story"
      className="overflow-hidden bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image composition */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary/25 sm:-bottom-6 sm:-left-6 sm:h-44 sm:w-44" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[6px] border-surface shadow-soft sm:aspect-[5/4] lg:aspect-[4/5] lg:max-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85"
              alt="A warm home kitchen where homemade treats come to life"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-text/25 via-transparent to-transparent" />
          </div>

          {/* Decorative quote card */}
          <div className="absolute -right-1 bottom-5 max-w-[230px] rounded-2xl border border-border bg-surface p-4 shadow-soft sm:bottom-8 sm:-right-5 sm:max-w-[270px] sm:p-5">
            <FaHeart className="mb-2 text-xl text-secondary" />
            <p className="font-heading text-xl italic leading-snug text-text sm:text-2xl">
              "The sweetest things are made with love."
            </p>
          </div>
        </div>

        {/* Story content */}
        <div className="pt-5 text-center lg:pt-0 lg:text-left">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            A Little About Us
          </span>

          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
            More Than Just
            <span className="block italic text-secondary">
              Cakes &amp; Bakes
            </span>
          </h2>

          <div className="mx-auto mt-5 max-w-xl space-y-4 text-lg leading-relaxed text-muted sm:text-xl lg:mx-0">
            <p>
              Every lovely thing begins with a little passion.
              Cakes &amp; Bake grew from a love for baking,
              creating sweet memories, and bringing people
              together over something delicious.
            </p>

            <p>
              What started in a home kitchen is our way of
              making ordinary days feel special. From the
              first whisk to the final decoration, every bake
              is prepared with care and a personal touch.
            </p>

            <p>
              Whether it is a small treat for yourself or a
              cake for a milestone, we believe the best
              flavours are the ones shared with love.
            </p>
          </div>

          {/* Brand values */}
          <div className="mx-auto mt-7 flex max-w-lg flex-wrap justify-center gap-3 lg:mx-0 lg:justify-start">
            {["Made with Care", "Baked with Love", "Made to Share"].map(
              (value) => (
                <span
                  key={value}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-secondary sm:text-base"
                >
                  {value}
                </span>
              )
            )}
          </div>

          {/* CTA */}
          <div className="mt-9">
            <a
              href="/story"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-secondary px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Read Our Story
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
