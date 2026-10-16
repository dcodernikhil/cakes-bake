
import {
  FaHeart,
  FaHandsHelping,
  FaRegSmile,
  FaArrowRight,
} from "react-icons/fa";

const beliefs = [
  {
    icon: FaHeart,
    number: "01",
    title: "Made with Love",
    description:
      "We believe the care behind a bake is just as meaningful as the sweetness it brings.",
  },
  {
    icon: FaHandsHelping,
    number: "02",
    title: "Made to Be Shared",
    description:
      "The best treats bring people closer, creating little moments worth remembering.",
  },
  {
    icon: FaRegSmile,
    number: "03",
    title: "Joy in the Little Things",
    description:
      "An ordinary afternoon, a birthday, or a simple surprise deserves a little sweetness.",
  },
];

const StoryBelief = () => {
  return (
    <section className="bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary sm:text-sm">
            What We Believe
          </span>

          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
            It's the Feeling
            <span className="block italic text-secondary">
              That Makes It Special.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            For us, baking is about more than a finished
            creation. It's about the happiness, connection,
            and memories that come with it.
          </p>
        </div>

        {/* Belief cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {beliefs.map((belief) => {
            const Icon = belief.icon;

            return (
              <article
                key={belief.number}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-8 lg:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    <Icon className="text-xl" aria-hidden="true" />
                  </div>

                  <span className="font-heading text-3xl italic text-primary">
                    {belief.number}
                  </span>
                </div>

                <h3 className="mt-7 font-heading text-2xl font-semibold text-text sm:text-3xl">
                  {belief.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
                  {belief.description}
                </p>

                <div className="mt-6 h-px w-12 bg-primary transition-all duration-300 group-hover:w-20 group-hover:bg-secondary" />
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 rounded-2xl bg-background px-6 py-10 text-center sm:mt-16 sm:px-10 sm:py-14">
          <p className="font-heading text-2xl italic leading-relaxed text-text sm:text-3xl md:text-4xl">
            Every bake has a purpose.
            <span className="block text-secondary">
              Every little moment deserves sweetness.
            </span>
          </p>

          <a
            href="/catalogue"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-secondary px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Explore Our Bakes
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StoryBelief;
