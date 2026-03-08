"use client";

const APPLE_ICON = (
  <svg viewBox="0 0 384 512" fill="currentColor" className="shrink-0" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184 4 270.2c0 26.5 4.9 53.9 14.6 82.3C29.8 386.5 56.2 464 95 462.6c20.5-.5 35-14.6 66.2-14.6 30.5 0 43.9 14.6 66.1 14.6 39.3-.7 63.2-72.5 74.5-106.3-47.5-22.6-71.1-67.6-71.1-119.6zm-68.8-148C273.3 94.2 288 63.8 285.3 32c-26.7 1.7-57.9 18.4-76.3 40.8-17 20.7-32.1 51.2-28 80.2 29.7 2.2 60.1-15.5 68.9-32.3z" />
  </svg>
);

const GOOGLE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.414l2.473 1.432a1 1 0 0 1 0 1.55l-2.473 1.432L14.88 12l2.818-2.707zM5.864 2.658L16.8 9.29l-2.302 2.302-8.634-8.934z" />
  </svg>
);

type StoreButtonsProps = {
  size?: "large" | "small";
  className?: string;
};

export default function StoreButtons({
  size = "large",
  className = "",
}: StoreButtonsProps) {
  const isLarge = size === "large";
  const iconSize = isLarge ? "w-6 h-6" : "w-5 h-5";
  const padding = isLarge ? "px-6 py-3.5" : "px-4 py-2.5";
  const labelText = isLarge ? "text-base" : "text-sm";
  const subtitleText = isLarge ? "text-[11px]" : "text-[10px]";

  const buttonBase = `
    flex items-center gap-3 rounded-xl bg-black border border-white/15
    transition-all duration-200
    hover:border-purple hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(124,58,237,0.3)]
    ${padding}
  `;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href="#" className={buttonBase} aria-label="Download on the App Store">
        <span className={iconSize}>{APPLE_ICON}</span>
        <span className="flex flex-col leading-tight">
          <span className={`${subtitleText} text-text-muted`}>Download on the</span>
          <span className={`${labelText} font-semibold text-white`}>App Store</span>
        </span>
      </a>

      <a href="#" className={buttonBase} aria-label="Get it on Google Play">
        <span className={iconSize}>{GOOGLE_ICON}</span>
        <span className="flex flex-col leading-tight">
          <span className={`${subtitleText} text-text-muted`}>Get it on</span>
          <span className={`${labelText} font-semibold text-white`}>Google Play</span>
        </span>
      </a>
    </div>
  );
}
