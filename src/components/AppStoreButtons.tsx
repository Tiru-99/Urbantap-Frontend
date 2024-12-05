import Link from "next/link"
import { AppleIcon } from "./AppleIcon"
import { GooglePlayIcon } from "./GooglePlayIcon"

export default function AppStoreButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="#"
        className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 transition-colors hover:bg-black/90"
      >
        <AppleIcon className="h-5 w-5 fill-white" />
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-none text-white/60">Download on the</span>
          <span className="text-xl font-medium leading-none text-white">App Store</span>
        </div>
      </Link>
      <Link
        href="#"
        className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-md transition-transform hover:scale-105"
      >
        <GooglePlayIcon className="h-6 w-6" />
        <div className="flex flex-col">
          <span className="text-[10px] font-medium leading-none text-gray-600">GET IT ON</span>
          <span className="text-[18px] font-medium leading-tight text-gray-800">Google Play</span>
        </div>
      </Link>
    </div>
  )
}

