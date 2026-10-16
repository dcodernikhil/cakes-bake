
import {
  FaSearch,
  FaExclamationCircle,
  FaArrowRight,
  FaRedoAlt,
  FaHeart,
} from "react-icons/fa";

export const LoadingState = ({ count = 8 }) => (
  <div
    role="status"
    aria-label="Loading catalogue"
    aria-busy="true"
    className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6"
  >
    {Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-2xl border border-border/70 bg-surface"
      >
        <div className="aspect-[4/4.5] animate-pulse bg-[#E9DED7]" />

        <div className="space-y-3 p-3 sm:p-5">
          <div className="h-3 w-1/3 animate-pulse rounded-full bg-[#E9DED7]" />
          <div className="h-5 w-4/5 animate-pulse rounded-full bg-[#E9DED7]" />
          <div className="hidden h-3 w-full animate-pulse rounded-full bg-[#E9DED7] sm:block" />

          <div className="flex gap-3 pt-2">
            <div className="h-6 w-16 animate-pulse rounded-full bg-[#E9DED7]" />
            <div className="h-10 flex-1 animate-pulse rounded-full bg-[#E9DED7]" />
          </div>
        </div>
      </div>
    ))}

    <span className="sr-only">Please wait while products load.</span>
  </div>
);

export const EmptyState = ({
  title = "No sweet treats found",
  description = "Try a different search or clear your filters to discover more of our collection.",
  onReset,
}) => (
  <div className="rounded-3xl border border-dashed border-border bg-surface px-5 py-14 text-center sm:px-10 sm:py-20">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-secondary sm:h-20 sm:w-20">
      <FaSearch className="text-xl sm:text-2xl" />
    </div>

    <h3 className="mt-6 font-heading text-3xl font-semibold text-text sm:text-4xl">
      {title}
    </h3>

    <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted sm:text-lg">
      {description}
    </p>

    {onReset && (
      <button
        type="button"
        onClick={onReset}
        className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-white transition hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
      >
        Explore All Treats
        <FaArrowRight />
      </button>
    )}

    <div className="mt-8 flex items-center justify-center gap-2 text-sm italic text-muted">
      <FaHeart className="text-primary" />
      Something lovely is always worth finding.
    </div>
  </div>
);

export const ErrorState = ({
  title = "We couldn't load our treats",
  description = "Something went wrong while loading the catalogue.",
  onRetry,
}) => (
  <div
    role="alert"
    className="rounded-3xl border border-border bg-surface px-5 py-14 text-center sm:px-10 sm:py-20"
  >
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-secondary sm:h-20 sm:w-20">
      <FaExclamationCircle className="text-2xl" />
    </div>

    <h3 className="mt-6 font-heading text-3xl font-semibold text-text sm:text-4xl">
      {title}
    </h3>

    <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted sm:text-lg">
      {description}
    </p>

    {onRetry && (
      <button
        type="button"
        onClick={onRetry}
        className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-secondary px-6 py-3 font-semibold text-white transition hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
      >
        <FaRedoAlt />
        Try Again
      </button>
    )}
  </div>
);
