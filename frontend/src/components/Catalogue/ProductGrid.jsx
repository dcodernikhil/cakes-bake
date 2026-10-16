import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
  FaInfoCircle,
} from "react-icons/fa";

import ProductDetailsModal from "./ProductDetailsModal";
import { LoadingState, EmptyState, ErrorState } from "./CatalogueStates";

const PAGE_SIZE = 8;

const ProductGrid = ({
  products = [],
  loading = false,
  error = null,
  onRetry,
  search = "",
  sortBy = "recommended",
  filters = {
    minPrice: null,
    maxPrice: null,
    availableOnly: false,
  },
  onClearSearch,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const category = searchParams.get("category") || "all";

  const searchTerm = (search || searchParams.get("search") || "")
    .trim()
    .toLowerCase();

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;

      const searchableText = [
        product.name,
        product.description,
        product.category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = !searchTerm || searchableText.includes(searchTerm);

      const price = Number(product.price) || 0;

      const matchesMin = filters.minPrice == null || price >= filters.minPrice;

      const matchesMax = filters.maxPrice == null || price <= filters.maxPrice;

      const matchesAvailability = !filters.availableOnly || product.available;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesMin &&
        matchesMax &&
        matchesAvailability
      );
    });

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;

      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        // Keep the order received from the API.
        break;
    }

    return result;
  }, [
    products,
    category,
    searchTerm,
    sortBy,
    filters.minPrice,
    filters.maxPrice,
    filters.availableOnly,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);

  // Reset pagination when the search, category or filters change.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [
    category,
    searchTerm,
    sortBy,
    filters.minPrice,
    filters.maxPrice,
    filters.availableOnly,
  ]);

  // Keep pagination valid if products are refreshed or removed.
  useEffect(() => {
    if (totalPages === 0 && currentPage !== 1) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentPage(1);
    } else if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;

  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const closeProductDetails = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const getEnquiryLink = (product) => {
    if (!whatsappNumber) return "/contact";

    const message = [
      "Hi Cakes & Bake! ♡",
      "",
      `I'm interested in: ${product.name}`,
      `Price: ₹${Number(product.price).toLocaleString("en-IN")} (${product.unit || "Please confirm quantity"})`,
      "",
      "Could you please confirm availability and ordering details?",
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const clearSearchAndCategory = () => {
    const nextParams = new URLSearchParams(searchParams);

    nextParams.delete("search");
    nextParams.delete("category");

    setSearchParams(nextParams);
    onClearSearch?.();
    setCurrentPage(1);
  };

  return (
    <section
      className="bg-background px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24"
      aria-label="Bakery products"
    >
      <div className="mx-auto max-w-7xl">
        {/* Loading state */}
        {loading ? (
          <LoadingState count={8} />
        ) : error ? (
          /* Error state */
          <ErrorState
            title="We couldn't load our treats"
            description={
              typeof error === "string"
                ? error
                : error.message ||
                  "Something went wrong while loading our catalogue."
            }
            onRetry={onRetry}
          />
        ) : filteredProducts.length === 0 ? (
          /* Empty state */
          <EmptyState
            title="No sweet treats found"
            description="Try another search or clear your filters to explore our collection."
            onReset={clearSearchAndCategory}
          />
        ) : (
          <>
            {/* Results summary */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
              <p className="text-sm text-muted sm:text-base" aria-live="polite">
                Showing{" "}
                <span className="font-semibold text-text">
                  {startIndex + 1}–
                  {Math.min(startIndex + PAGE_SIZE, filteredProducts.length)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-text">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>

              {category !== "all" && (
                <button
                  type="button"
                  onClick={() => {
                    const nextParams = new URLSearchParams(searchParams);

                    nextParams.delete("category");
                    setSearchParams(nextParams);
                    setCurrentPage(1);
                  }}
                  className="text-sm font-semibold text-secondary hover:text-secondary-hover focus:outline-none focus:underline"
                >
                  Clear category
                </button>
              )}
            </div>

            {/* Product cards */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-6">
              {visibleProducts.map((product) => (
                <article
                  key={product.id}
                  className="group min-w-0 overflow-hidden rounded-2xl border border-border/70 bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  {/* Clicking the image opens product details */}
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`View details for ${product.name}`}
                    className="relative block aspect-[4/4.5] w-full overflow-hidden bg-white text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        !product.available ? "opacity-60" : ""
                      }`}
                    />

                    {product.badge && (
                      <span className="absolute left-2 top-2 max-w-[85%] truncate rounded-full bg-surface/95 px-2.5 py-1.5 text-[10px] font-semibold text-secondary shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
                        {product.badge}
                      </span>
                    )}

                    {!product.available && (
                      <span className="absolute inset-x-0 bottom-0 bg-text/80 px-2 py-2 text-center text-xs font-semibold text-white sm:text-sm">
                        Currently unavailable
                      </span>
                    )}
                  </button>

                  {/* Product information */}
                  <div className="p-3 sm:p-4 lg:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-accent sm:text-xs">
                      {String(product.category || "").replace(/-/g, " ")}
                    </p>

                    <h3 className="mt-2 line-clamp-2 min-h-[2.75rem] font-heading text-lg font-semibold leading-tight text-text sm:min-h-[3.5rem] sm:text-2xl">
                      {product.name}
                    </h3>

                    <p className="mt-2 hidden min-h-[3rem] text-sm leading-relaxed text-muted sm:line-clamp-2 sm:block">
                      {product.description}
                    </p>

                    <div className="mt-3 border-t border-border/70 pt-3">
                      <p className="text-base font-semibold text-secondary sm:text-xl">
                        ₹{Number(product.price).toLocaleString("en-IN")}
                      </p>

                      <p className="mt-0.5 text-xs text-muted sm:text-sm">
                        {product.unit || "Please enquire"}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="mt-3 inline-flex min-h-9 items-center gap-2 text-xs font-semibold text-secondary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-secondary sm:text-sm"
                    >
                      <FaInfoCircle />
                      View details
                    </button>

                    <a
                      href={getEnquiryLink(product)}
                      target={whatsappNumber ? "_blank" : undefined}
                      rel={whatsappNumber ? "noreferrer" : undefined}
                      aria-label={`Enquire about ${product.name}`}
                      className={`mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 sm:min-h-11 sm:px-4 sm:text-sm ${
                        product.available
                          ? "bg-secondary text-white hover:bg-secondary-hover"
                          : "border border-border bg-background text-muted hover:border-secondary hover:text-secondary"
                      }`}
                    >
                      <FaWhatsapp className="shrink-0 text-base" />
                      <span>
                        {product.available ? "Enquire" : "Ask Availability"}
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <>
                <nav
                  aria-label="Product pagination"
                  className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-14"
                >
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text transition hover:border-secondary hover:text-secondary disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
                  >
                    <FaChevronLeft className="text-xs" />
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                  ).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => goToPage(page)}
                      aria-current={currentPage === page ? "page" : undefined}
                      aria-label={`Page ${page}`}
                      className={`flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold transition sm:h-11 sm:min-w-11 ${
                        currentPage === page
                          ? "bg-secondary text-white"
                          : "border border-border bg-surface text-text hover:border-secondary hover:text-secondary"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text transition hover:border-secondary hover:text-secondary disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
                  >
                    <FaChevronRight className="text-xs" />
                  </button>
                </nav>

                <p className="mt-4 text-center text-sm text-muted">
                  Page {currentPage} of {totalPages}
                </p>
              </>
            )}
          </>
        )}

        {/* Product details modal */}
        {!loading && !error && selectedProduct && (
          <ProductDetailsModal
            product={selectedProduct}
            onClose={closeProductDetails}
          />
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
