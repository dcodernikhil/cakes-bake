
import {
  FaHeart,
  FaBirthdayCake,
  FaLeaf,
  FaComments,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaHeart,
    title: "Made with Love",
    description:
      "Every bake gets the care and attention that makes homemade treats special.",
  },
  {
    icon: FaBirthdayCake,
    title: "Made for Your Moments",
    description:
      "Sweet treats for birthdays, celebrations, and all the little moments in between.",
  },
  {
    icon: FaLeaf,
    title: "Freshly Prepared",
    description:
      "Thoughtfully prepared bakes, made fresh for a delicious experience.",
  },
  {
    icon: FaComments,
    title: "A Personal Touch",
    description:
      "Friendly, direct communication to help you find the right treat for your occasion.",
  },
];

const WhyCakesAndBake = () => {
  return (
    <section
      id="why-cakes-and-bake"
      className="bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            The Cakes &amp; Bake Difference
          </span>

          <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
            Why You'll
            <span className="block italic text-secondary">
              Love Every Bite
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            It's not just about what we bake. It's about
            the care, thought, and little details behind
            every sweet moment.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group rounded-2xl border border-border/70 bg-background p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-soft sm:p-7 lg:p-6 xl:p-7"
              >
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-secondary transition duration-300 group-hover:bg-secondary group-hover:text-white">
                  <Icon className="text-2xl" aria-hidden="true" />
                </div>

                {/* Decorative number */}
                <p className="mt-5 font-heading text-sm italic text-accent">
                  0{index + 1}
                </p>

                <h3 className="mt-2 font-heading text-2xl font-semibold text-text sm:text-3xl">
                  {reason.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCakesAndBake;
