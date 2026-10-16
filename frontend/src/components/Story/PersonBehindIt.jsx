
import { FaHeart } from "react-icons/fa";

const PersonBehindIt = () => {
  return (
    <section
      id="the-person-behind-it"
      className="overflow-hidden bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -left-3 -top-3 h-24 w-24 rounded-full bg-primary/30 sm:-left-5 sm:-top-5 sm:h-36 sm:w-36" />

          <div className="relative aspect-[4/5] max-h-[650px] overflow-hidden rounded-t-[45%] rounded-b-2xl border-[6px] border-background shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1100&q=85"
              alt="A glimpse into the world of home baking"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-text/25 via-transparent to-transparent" />
          </div>

          {/* Floating quote */}
          <div className="absolute -bottom-4 right-0 max-w-[240px] rounded-2xl border border-border bg-background p-4 shadow-soft sm:-right-4 sm:max-w-[280px] sm:p-5">
            <FaHeart className="mb-2 text-lg text-secondary" />

            <p className="font-heading text-xl italic leading-snug text-text sm:text-2xl">
              A little passion can make something wonderful.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="pt-5 text-center lg:pt-0 lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary sm:text-sm">
            The person behind the bakes
          </span>

          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
            A Heart Full of
            <span className="block italic text-secondary">
              Sweet Ideas
            </span>
          </h2>

          <div className="mx-auto mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-muted sm:text-xl lg:mx-0">
            <p>
              Every bakery has a story, and at Cakes &amp; Bake,
              it begins with the person behind every creation.
              Someone who believes that a thoughtfully made
              treat can bring a little extra happiness to a day.
            </p>

            <p>
              From choosing flavours to adding those final
              decorative touches, baking is about more than
              the finished cake. It is about the care that goes
              into making something worth sharing.
            </p>

            <p>
              Cakes &amp; Bake is a personal expression of that
              love for baking, bringing a little sweetness to
              birthdays, celebrations, and everyday moments.
            </p>
          </div>

          {/* Signature-style closing */}
          <div className="mt-8 flex flex-col items-center gap-2 lg:items-start">
            <span className="font-display text-2xl text-secondary sm:text-3xl">
              With love, from our kitchen
            </span>

            <span className="text-xs uppercase tracking-[0.18em] text-muted">
              Cakes &amp; Bake
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonBehindIt;
