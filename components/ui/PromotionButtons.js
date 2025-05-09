import Link from "next/link";
import Image from "next/image";

export default function AppStoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
      {/* Apple App Store Button */}
      <Link
        href="https://apps.apple.com/de/app/health-ai/id6702024061"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-black text-white rounded-lg px-4 py-2 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div className="flex items-center">
          <Image
            src="/app-store.png"
            alt="Apple logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <div className="flex flex-col">
            <span className="text-xs">Download on the</span>
            <span className="text-xl font-semibold leading-tight">
              App Store
            </span>
          </div>
        </div>
      </Link>

      {/* Google Play Store Button */}
      <Link
        href="https://play.google.com/store/apps/details?id=your.app.package"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-black text-white rounded-lg px-4 py-2 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div className="flex items-center">
          <Image
            src="/google-play.png"
            alt="Google Play logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <div className="flex flex-col">
            <span className="text-xs">Get it on</span>
            <span className="text-xl font-semibold leading-tight">
              Google Play
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
