
import { FaHeart } from "react-icons/fa";

const CatalogueHeader = ({ category = "all" }) => {
  const categoryContent = {
    all: {
      eyebrow: "A LITTLE SOMETHING FOR EVERY CRAVING",
      title: "Our Sweet Collection",
      description:
        "From delightful everyday treats to cakes made for your special moments, find something you'll love.",
    },
    cakes: {
      eyebrow: "MADE FOR YOUR SWEETEST MOMENTS",
      title: "Cakes & Celebrations",
      description:
        "Discover cakes for birthdays, celebrations, and all the little moments worth making special.",
    },
    donuts: {
      eyebrow: "LITTLE RINGS OF HAPPINESS",
      title: "Our Donut Collection",
      description:
        "Soft, sweet, and made for those moments when only a little treat will do.",
    },
    biscuits: {
      eyebrow: "A LITTLE COMFORT IN EVERY BITE",
      title: "Cookies & Biscuits",
      description:
        "Find your favourite little companions for tea time, thoughtful gifts, and everyday cravings.",
    },
    "custom-cakes": {
      eyebrow: "YOUR IDEA, OUR LITTLE TOUCH",
      title: "Custom Cake Creations",
      description:
        "Have something special in mind? Let's explore a cake made around your occasion and ideas.",
    },
  };

  const content = categoryContent[category] || categoryContent.all;

  return (
    <section className="bg-background px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-14 lg:px-12 lg:pb-16 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center justify-center gap-2 text-sm text-muted sm:mb-10"
        >
          <a
            href="/"
            className="transition-colors hover:text-secondary"
          >
            Home
          </a>

          <span aria-hidden="true">/</span>

          <span className="font-medium text-secondary">
            Catalogue
          </span>
        </nav>

        {/* Header content */}
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Decorative heart */}
          <div
            aria-hidden="true"
            className="absolute -right-1 -top-8 hidden rotate-12 text-primary/50 sm:block md:right-8"
          >
            <FaHeart className="text-2xl" />
          </div>

          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary sm:text-sm sm:tracking-[0.25em]">
            <span className="h-px w-6 bg-primary sm:w-8" />
            {content.eyebrow}
            <span className="h-px w-6 bg-primary sm:w-8" />
          </span>

          <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight text-text sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
            {content.title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:mt-5 sm:text-lg md:text-xl">
            {content.description}
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-3 sm:mt-9">
            <span className="h-px w-10 bg-border sm:w-16" />
            <FaHeart className="text-xs text-secondary" />
            <span className="h-px w-10 bg-border sm:w-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogueHeader;