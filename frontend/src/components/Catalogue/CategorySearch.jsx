
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaSearch,
  FaSlidersH,
  FaTimes,
  FaChevronDown,
  FaUndo,
} from "react-icons/fa";

const categories = [
  { label: "All Treats", value: "all" },
  { label: "Cakes", value: "cakes" },
  { label: "Donuts", value: "donuts" },
  { label: "Cookies & Biscuits", value: "biscuits" },
  { label: "Custom Cakes", value: "custom-cakes" },
];

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A to Z", value: "name-asc" },
];

const CategorySearch = ({
  onSearchChange,
  onSortChange,
  onFiltersChange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "all";
  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );
  const [sortBy, setSortBy] = useState("recommended");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);

  const activeCategory = categories.some(
    (category) => category.value === categoryFromUrl
  )
    ? categoryFromUrl
    : "all";

  useEffect(() => {
    onSearchChange?.(search);
  }, [search, onSearchChange]);

  useEffect(() => {
    onSortChange?.(sortBy);
  }, [sortBy, onSortChange]);

  useEffect(() => {
    onFiltersChange?.({
      minPrice: minPrice === "" ? null : Number(minPrice),
      maxPrice: maxPrice === "" ? null : Number(maxPrice),
      availableOnly,
    });
  }, [minPrice, maxPrice, availableOnly, onFiltersChange]);

  const selectCategory = (value) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value === "all") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", value);
    }

    setSearchParams(nextParams);
  };

  const handleSearch = (value) => {
    setSearch(value);

    const nextParams = new URLSearchParams(searchParams);

    if (value.trim()) {
      nextParams.set("search", value);
    } else {
      nextParams.delete("search");
    }

    setSearchParams(nextParams, { replace: true });
  };

  const resetFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setAvailableOnly(false);
  };

  const activeFilterCount = [
    minPrice !== "",
    maxPrice !== "",
    availableOnly,
  ].filter(Boolean).length;

  return (
    <section className="bg-background px-5 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Category chips */}
        <div
          className="-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-3 sm:px-0"
          aria-label="Product categories"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => selectCategory(category.value)}
                aria-pressed={isActive}
                className={`min-h-11 shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${
                  isActive
                    ? "border-secondary bg-secondary text-white shadow-sm"
                    : "border-border bg-surface text-text hover:border-secondary hover:text-secondary"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Search and sorting */}
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Search input */}
          <div className="relative w-full lg:max-w-xl">
            <FaSearch
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => handleSearch(event.target.value)}
              placeholder="Search cakes, flavours, cookies..."
              aria-label="Search catalogue"
              className="min-h-12 w-full rounded-full border border-border bg-surface py-3 pl-11 pr-11 text-base text-text outline-none transition placeholder:text-muted/70 focus:border-secondary focus:ring-2 focus:ring-primary/30"
            />

            {search && (
              <button
                type="button"
                onClick={() => handleSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted transition hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Filter button */}
            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              aria-haspopup="dialog"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-text transition hover:border-secondary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              <FaSlidersH />
              Filters
              {activeFilterCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1.5 text-xs text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <FaChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted"
              />

              <select
                aria-label="Sort products"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="min-h-12 w-full appearance-none rounded-full border border-border bg-surface py-3 pl-5 pr-10 text-sm font-semibold text-text outline-none transition focus:border-secondary focus:ring-2 focus:ring-primary/30 sm:min-w-[205px]"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Filter dialog */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-text/40 sm:items-center sm:p-5"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsFilterOpen(false);
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="filter-title"
              className="max-h-[85vh] w-full overflow-y-auto rounded-t-3xl bg-surface p-6 shadow-2xl sm:max-w-lg sm:rounded-3xl sm:p-8"
            >
              <div className="flex items-center justify-between">
                <h2
                  id="filter-title"
                  className="font-heading text-3xl font-semibold text-text"
                >
                  Refine Your Search
                </h2>

                <button
                  type="button"
                  onClick={() => setIsFilterOpen(false)}
                  aria-label="Close filters"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:bg-background hover:text-text focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Price range */}
              <div className="mt-7">
                <h3 className="font-semibold text-text">Price range (₹)</h3>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="min-price"
                      className="mb-1.5 block text-sm text-muted"
                    >
                      Minimum
                    </label>
                    <input
                      id="min-price"
                      type="number"
                      min="0"
                      step="1"
                      value={minPrice}
                      onChange={(event) => setMinPrice(event.target.value)}
                      placeholder="₹ 0"
                      className="min-h-12 w-full rounded-xl border border-border bg-background px-4 py-3 text-text outline-none focus:border-secondary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="max-price"
                      className="mb-1.5 block text-sm text-muted"
                    >
                      Maximum
                    </label>
                    <input
                      id="max-price"
                      type="number"
                      min="0"
                      step="1"
                      value={maxPrice}
                      onChange={(event) => setMaxPrice(event.target.value)}
                      placeholder="No limit"
                      className="min-h-12 w-full rounded-xl border border-border bg-background px-4 py-3 text-text outline-none focus:border-secondary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>

                {minPrice !== "" &&
                  maxPrice !== "" &&
                  Number(minPrice) > Number(maxPrice) && (
                    <p className="mt-2 text-sm text-secondary" role="alert">
                      Minimum price cannot exceed maximum price.
                    </p>
                  )}

                {(minPrice !== "" && Number(minPrice) < 0) ||
                (maxPrice !== "" && Number(maxPrice) < 0) ? (
                  <p className="mt-2 text-sm text-secondary" role="alert">
                    Prices cannot be negative.
                  </p>
                ) : null}
              </div>

              {/* Availability */}
              <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-xl border border-border p-4">
                <input
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(event) =>
                    setAvailableOnly(event.target.checked)
                  }
                  className="h-4 w-4 accent-[#A9686B]"
                />
                <span className="text-sm font-medium text-text">
                  Show available products only
                </span>
              </label>

              {/* Actions */}
              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 font-semibold text-text transition hover:border-secondary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <FaUndo className="text-xs" />
                  Reset Filters
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const invalidPrice =
                      (minPrice !== "" && Number(minPrice) < 0) ||
                      (maxPrice !== "" && Number(maxPrice) < 0) ||
                      (minPrice !== "" &&
                        maxPrice !== "" &&
                        Number(minPrice) > Number(maxPrice));

                    if (invalidPrice) return;

                    setIsFilterOpen(false);
                  }}
                  className="min-h-12 flex-1 rounded-full bg-secondary px-5 py-3 font-semibold text-white transition hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  Show Products
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySearch;
