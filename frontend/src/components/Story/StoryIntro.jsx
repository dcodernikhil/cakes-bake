
import { FaArrowDown } from "react-icons/fa";

const StoryIntro = () => {
  return (
    <section className="bg-background">
      {/* Hero image */}
      <div className="relative mx-auto max-w-[1600px] px-4 pt-4 sm:px-6 sm:pt-6 lg:px-10 lg:pt-8">
        <div className="relative min-h-[440px] overflow-hidden rounded-[1.5rem] sm:min-h-[540px] sm:rounded-[2rem] lg:min-h-[640px]">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=2000&q=85"
            alt="Freshly baked pastries arranged on a bakery table"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#241B19]/80 via-[#241B19]/25 to-[#241B19]/10" />

          {/* Hero content */}
          <div className="relative flex min-h-[440px] flex-col justify-end px-6 py-10 sm:min-h-[540px] sm:px-10 sm:py-14 lg:min-h-[640px] lg:px-16 lg:py-16">
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/85 sm:text-sm">
              The story of Cakes &amp; Bake
            </span>

            <h1 className="max-w-4xl font-heading text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Every sweet thing
              <span className="block italic text-[#F0C9C5]">
                has a story.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:mt-7 sm:text-lg md:text-xl">
              Behind every bake is a little passion, a lot of
              care, and the joy of making ordinary moments
              feel extraordinary.
            </p>

            <a
              href="#the-person-behind-it"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/60 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-text focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-text"
            >
              Get to know our story
              <FaArrowDown className="text-xs" />
            </a>
          </div>
        </div>
      </div>

      {/* Introductory statement */}
      <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20 lg:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary sm:text-sm">
          A little love, baked into everything
        </span>

        <p className="mt-5 font-heading text-2xl leading-relaxed text-text sm:text-3xl md:text-4xl">
          We believe that the best memories often begin
          around a table, with something delicious to share
          and the people who make it special.
        </p>

        <div className="mx-auto mt-7 h-px w-16 bg-primary" />
      </div>
    </section>
  );
};

export default StoryIntro;
