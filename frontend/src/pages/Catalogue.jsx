import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CatalogueHeader from "../components/Catalogue/CatalogueHeader";
import CategorySearch from "../components/Catalogue/CategorySearch";
import ProductGrid from "../components/Catalogue/ProductGrid";

const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

const Catalogue = () => {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [sortBy, setSortBy] = useState("recommended");

  const [filters, setFilters] = useState({
    minPrice: null,
    maxPrice: null,
    availableOnly: false,
  });

  // Keep the search input synchronized with browser navigation
  // and category/search links.
  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  const loadProducts = useCallback(async (signal) => {
    if (!API_BASE_URL) {
      setProducts([]);
      setError(
        "The API URL is not configured. Add VITE_API_URL to your frontend environment.",
      );
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/products`, { signal });

      if (!response.ok) {
        throw new Error(`Unable to load products (HTTP ${response.status}).`);
      }

      const data = await response.json();

      // Supports either an array or common paginated API responses.
      const items = Array.isArray(data)
        ? data
        : Array.isArray(data.items)
          ? data.items
          : Array.isArray(data.products)
            ? data.products
            : null;

      if (!items) {
        throw new Error(
          "The products API returned an unexpected response format.",
        );
      }

      setProducts(items);
    } catch (err) {
      if (err.name === "AbortError") return;

      setError(err.message || "Something went wrong while loading products.");
      setProducts([]);
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    loadProducts(controller.signal);

    return () => controller.abort();
  }, [loadProducts]);

  const handleSearchChange = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSortBy(value);
  }, []);

  const handleFiltersChange = useCallback((value) => {
    setFilters(value);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearch("");
    setSortBy("recommended");
    setFilters({
      minPrice: null,
      maxPrice: null,
      availableOnly: false,
    });
  }, []);

  const handleRetry = useCallback(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <main className="min-h-screen bg-background">
      <CatalogueHeader category={searchParams.get("category") || "all"} />

      <CategorySearch
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
        onFiltersChange={handleFiltersChange}
      />

      <ProductGrid
        products={products}
        loading={loading}
        error={error}
        onRetry={handleRetry}
        search={search}
        sortBy={sortBy}
        filters={filters}
        onClearSearch={handleClearSearch}
      />
    </main>
  );
};

export default Catalogue;
