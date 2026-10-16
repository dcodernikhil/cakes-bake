
import { useEffect, useState } from "react";
import {
  FaTimes,
  FaWhatsapp,
  FaCheckCircle,
  FaRegClock,
} from "react-icons/fa";

const ProductDetailsModal = ({ product, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedFlavour, setSelectedFlavour] = useState("");

  useEffect(() => {
    if (!product) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedVariant(product?.variants?.[0] ?? null);
    setSelectedFlavour(product?.flavours?.[0] ?? "");
  }, [product]);

  if (!product) return null;

  const price = selectedVariant?.price ?? product.price;
  const unit = selectedVariant?.unit ?? product.unit;
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const handleEnquiry = () => {
    if (!whatsappNumber) {
      window.location.href = "/contact";
      return;
    }

    const message = [
      "Hi Cakes & Bake! ♡",
      "",
      `I'm interested in ${product.name}.`,
      `Price: ₹${price}`,
      `Size / quantity: ${unit}`,
      selectedFlavour ? `Flavour: ${selectedFlavour}` : "",
      "",
      "Could you please confirm availability and ordering details?",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-text/60 backdrop-blur-sm sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="relative max-h-[92dvh] w-full overflow-y-auto rounded-t-3xl bg-surface shadow-2xl sm:max-w-4xl sm:rounded-3xl"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-surface/95 text-text shadow-md transition hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <FaTimes />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Product image */}
          <div className="relative aspect-[5/3] overflow-hidden bg-background sm:aspect-auto sm:min-h-[520px]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />

            {product.badge && (
              <span className="absolute bottom-4 left-4 rounded-full bg-surface/95 px-4 py-2 text-xs font-semibold text-secondary shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-5 sm:p-7 lg:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {product.category.replace("-", " ")}
            </p>

            <h2
              id="product-modal-title"
              className="mt-3 pr-7 font-heading text-3xl font-semibold leading-tight text-text sm:text-4xl"
            >
              {product.name}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted">
              {product.description}
            </p>

            <div className="mt-5 border-y border-border/70 py-4">
              <p className="text-2xl font-semibold text-secondary">
                ₹{price.toLocaleString("en-IN")}
              </p>
              <p className="mt-1 text-sm text-muted">{unit}</p>
            </div>

            {/* Available sizes / variants */}
            {product.variants?.length > 0 && (
              <div className="mt-5">
                <label
                  htmlFor="product-variant"
                  className="mb-2 block text-sm font-semibold text-text"
                >
                  Choose size or quantity
                </label>

                <select
                  id="product-variant"
                  value={selectedVariant?.unit ?? ""}
                  onChange={(event) => {
                    const variant = product.variants.find(
                      (item) => item.unit === event.target.value
                    );
                    setSelectedVariant(variant ?? null);
                  }}
                  className="min-h-12 w-full rounded-xl border border-border bg-background px-4 py-3 text-text outline-none focus:border-secondary focus:ring-2 focus:ring-primary/30"
                >
                  {product.variants.map((variant) => (
                    <option key={variant.unit} value={variant.unit}>
                      {variant.label} — ₹
                      {variant.price.toLocaleString("en-IN")}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Flavours */}
            {product.flavours?.length > 0 && (
              <div className="mt-5">
                <label
                  htmlFor="product-flavour"
                  className="mb-2 block text-sm font-semibold text-text"
                >
                  Choose flavour
                </label>

                <select
                  id="product-flavour"
                  value={selectedFlavour}
                  onChange={(event) =>
                    setSelectedFlavour(event.target.value)
                  }
                  className="min-h-12 w-full rounded-xl border border-border bg-background px-4 py-3 text-text outline-none focus:border-secondary focus:ring-2 focus:ring-primary/30"
                >
                  {product.flavours.map((flavour) => (
                    <option key={flavour} value={flavour}>
                      {flavour}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Availability */}
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-background p-3">
              {product.available ? (
                <FaCheckCircle className="mt-1 shrink-0 text-accent" />
              ) : (
                <FaRegClock className="mt-1 shrink-0 text-secondary" />
              )}

              <div>
                <p className="text-sm font-semibold text-text">
                  {product.available
                    ? "Available to enquire"
                    : "Availability needs confirmation"}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Please confirm preparation time and availability
                  with the bakery before ordering.
                </p>
              </div>
            </div>

            {/* Optional allergen information */}
            {product.allergens && (
              <p className="mt-4 text-xs leading-relaxed text-muted">
                <strong>Allergen information:</strong>{" "}
                {product.allergens}
              </p>
            )}

            <button
              type="button"
              onClick={handleEnquiry}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-secondary px-5 py-3.5 font-semibold text-white transition hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              <FaWhatsapp className="text-xl" />
              Enquire on WhatsApp
            </button>

            <p className="mt-3 text-center text-xs leading-relaxed text-muted">
              No online payment required. Confirm your order directly
              with Cakes &amp; Bake.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsModal;
