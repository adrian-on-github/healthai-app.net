"use client";
import Link from "next/link";

export default function FeaturedOn() {
  return (
    <section className="py-12 w-full">
      <div className="flex flex-row items-center justify-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <h3 className="text-lg font-medium text-neutral-700">Featured on</h3>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="h-8 w-8 text-neutral-700 transition-colors duration-300 group-hover:text-black dark:group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                fill="currentColor"
              />
            </svg>
          </Link>

          {/* Instagram Logo */}
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="h-8 w-8 text-neutral-700 transition-colors duration-300 group-hover:text-[#E4405F]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                fill="currentColor"
              />
            </svg>
          </Link>

          {/* Product Hunt Logo */}
          <Link
            href="https://producthunt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="h-8 w-8 text-neutral-700 transition-colors duration-300 group-hover:text-[#DA552F]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.604 8.4h-3.77V12h3.77c1.004 0 1.813-.81 1.813-1.8 0-1.002-.81-1.8-1.813-1.8zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.77V18H7.2V6h6.404c2.007 0 3.627 1.62 3.627 3.6 0 1.99-1.62 3.6-3.627 3.6z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
