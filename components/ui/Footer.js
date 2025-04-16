import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-50">
      <div className="lg:mx-8 mx-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex text-center lg:text-start items-center lg:items-center">
            <p className="text-sm text-neutral-700">
              &copy; {new Date().getFullYear()} HealthAI all rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-6 lg:mt-0">
            <Link
              href="/privacypolicy"
              className="text-neutral-700 transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termsofservice"
              className="text-neutral-700 transition-colors duration-300 font-medium"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
