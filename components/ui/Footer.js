import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} With ❤️ built by Adrian Hassan.
              HealthAI all rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-muted-foreground transition-colors duration-300 font-medium"
            >
              Terms of Service
            </Link>
            <Link
              href="/impressum"
              className="text-muted-foreground transition-colors duration-300 font-medium"
            >
              Impressum
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
