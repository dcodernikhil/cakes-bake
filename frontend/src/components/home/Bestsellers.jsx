
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    category: "Celebration Cakes",
    price: 599,
    unit: "500 g",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Strawberry Cream Cake",
    category: "Freshly Baked",
    price: 549,
    unit: "500 g",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85",
    badge: "Customer Favourite",
  },
  {
    id: 3,
    name: "Glazed Donuts",
    category: "Sweet Treats",
    price: 199,
    unit: "Box of 4",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=85",
    badge: "Must Try",
  },
  {
    id: 4,
    name: "Homemade Cookies",
    category: "Cookies & Biscuits",
    price: 149,
    unit: "Box of 6",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",
    badge: "Made with Love",
  },
];

const Bestsellers = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const getOrderLink = (product) => {
    if (!whatsappNumber) return "/contact";

    const message = `Hi Cakes & Bake! I'd like to enquire about ${product.name} (${product.unit}), priced at ₹${product.price}. Please share availability and ordering details.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section
      id="bestsellers"
      className="bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Loved by Our Customers
            </span>

            <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
              Our Little
              <span className="italic text-secondary"> Favourites</span>
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              The sweet treats worth coming back for,
              freshly made for your everyday cravings
              and special celebrations.
            </p>
          </div>

          <a
            href="/catalogue"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start font-semibold text-secondary transition-colors hover:text-secondary-hover sm:self-auto"
          >
            View All Products
            <FaArrowRight />
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-border/70 bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              {/* Product image */}
              <a
                href={`/catalogue?search=${encodeURIComponent(
                  product.name
                )}`}
                aria-label={`View ${product.name}`}
                className="relative block aspect-[4/3] overflow-hidden bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary sm:aspect-[4/3]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-semibold tracking-wide text-secondary shadow-sm">
                  {product.badge}
                </span>
              </a>

              {/* Product details */}
              <div className="p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {product.category}
                </p>

                <h3 className="mt-2 font-heading text-2xl font-semibold leading-tight text-text">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xl font-semibold text-secondary">
                      ₹{product.price}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">
                      {product.unit}
                    </p>
                  </div>

                  <a
                    href={getOrderLink(product)}
                    target={whatsappNumber ? "_blank" : undefined}
                    rel={whatsappNumber ? "noreferrer" : undefined}
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom order banner */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-surface px-6 py-7 text-center sm:mt-14 sm:flex-row sm:px-9 sm:py-8 sm:text-left">
          <div>
            <p className="font-heading text-2xl font-semibold text-text sm:text-3xl">
              Have something special in mind?
            </p>
            <p className="mt-2 text-base text-muted sm:text-lg">
              Let's create a cake that's uniquely yours.
            </p>
          </div>

          <a
            href="/custom-cake"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-secondary px-6 py-3 font-semibold text-secondary transition duration-300 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Custom Cake Enquiry
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
