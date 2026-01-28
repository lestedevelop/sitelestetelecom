export const FAQ_ICON_NAMES = [
  "lock",
  "refund",
  "question",
  "tag",
  "ads",
  "wifi",
  "router",
  "speed",
  "billing",
  "invoice",
  "calendar",
  "plan",
  "support",
  "mobile",
  "store",
  "social",
  "phone",
  "legal",
  "cable",
  "document",
  "warning",
  "payment",
];

export function FaqIcon({ name, className }) {
  switch (name) {
    case "lock":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M17 10V7a5 5 0 0 0-10 0v3H5v10h14V10h-2Zm-8 0V7a3 3 0 0 1 6 0v3H9Z"
          />
        </svg>
      );
    case "refund":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M12 4a8 8 0 1 1-7.08 4.2H7v2H2v-5h5v2H5.8A6 6 0 1 0 12 6v2l-4-3 4-3v2Z"
          />
        </svg>
      );
    case "question":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 12a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 16Zm0-10a3.25 3.25 0 0 0-3.25 3.25h2a1.25 1.25 0 1 1 2.5 0c0 1.5-2.5 1.25-2.5 3.75h2c0-1.5 2.5-1.75 2.5-3.75A3.25 3.25 0 0 0 12 6Z"
          />
        </svg>
      );
    case "tag":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M3 7V3h4l12 12-4 4L3 7Zm4-2H5v2l9 9 2-2-9-9Z"
          />
        </svg>
      );
    case "ads":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M4 4h16v16H4V4Zm2 2v3h12V6H6Zm0 5v7h12v-7H6Z"
          />
        </svg>
      );
    case "wifi":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 8l2 2a11 11 0 0 1 16 0l2-2A13 13 0 0 0 2 8Zm4 4 2 2a7 7 0 0 1 8 0l2-2a9 9 0 0 0-12 0Z"
          />
        </svg>
      );
    case "router":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M4 10h16v8H4v-8Zm2 2v4h12v-4H6Z" />
          <path fill="currentColor" d="M7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M12 4a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V4Zm6.7 2.3-6.2 6.2 1.4 1.4 6.2-6.2-1.4-1.4Z"
          />
        </svg>
      );
    case "billing":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm2 4v2h8V7H8Zm0 4v2h8v-2H8Z" />
        </svg>
      );
    case "invoice":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M5 3h14v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5V3Zm3 4h8v2H8V7Zm0 4h8v2H8v-2Z" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2Zm12 6H5v12h14V8Z" />
        </svg>
      );
    case "plan":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M4 6h16v12H4V6Zm2 2v8h12V8H6Z" />
          <path fill="currentColor" d="M8 10h8v2H8v-2Zm0 4h5v2H8v-2Z" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M12 4a8 8 0 0 0-8 8v4a2 2 0 0 0 2 2h1v-6H6a6 6 0 0 1 12 0h-1v6h1a2 2 0 0 0 2-2v-4a8 8 0 0 0-8-8Z" />
          <path fill="currentColor" d="M9 20h6v2H9v-2Z" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M7 2h10v20H7V2Zm2 2v14h6V4H9Zm3 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
        </svg>
      );
    case "store":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M4 6h16l-1 4H5L4 6Zm2 6h12v8H6v-8Z" />
        </svg>
      );
    case "social":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M12 3a5 5 0 0 1 5 5v1h-2V8a3 3 0 1 0-3 3h1v2h-1a5 5 0 1 1 0-10Z" />
          <path fill="currentColor" d="M7 14a5 5 0 0 0 10 0v-1h-2v1a3 3 0 1 1-6 0h-2Z" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M6.6 4h3.1l1 3-1.8 1a11 11 0 0 0 5.2 5.2l1-1.8 3 1v3.1c0 .6-.4 1.1-1 1.2-7 .7-12.6-4.9-11.9-11.9.1-.6.6-1 1.2-1Z"
          />
        </svg>
      );
    case "legal":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M12 2 4 6v6c0 5 4 8 8 10 4-2 8-5 8-10V6l-8-4Zm0 4 4 2v4c0 3-2.3 5.2-4 6.2-1.7-1-4-3.2-4-6.2V8l4-2Z" />
        </svg>
      );
    case "cable":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M4 7h6v2H6v2h4v2H4V7Zm10 2h6v6h-2v2h-2v-2h2v-4h-4V9Z" />
          <path fill="currentColor" d="M11 11h2v2h-2v-2Z" />
        </svg>
      );
    case "document":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M6 2h9l5 5v15H6V2Zm9 1.5V8h4.5L15 3.5ZM8 11h8v2H8v-2Zm0 4h8v2H8v-2Z" />
        </svg>
      );
    case "warning":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M12 3 2 21h20L12 3Zm0 6 1 6h-2l1-6Zm0 8a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 17Z" />
        </svg>
      );
    case "payment":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="currentColor" d="M4 6h16v12H4V6Zm2 2v2h12V8H6Zm0 4v4h6v-4H6Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 12a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 16Zm0-10a3.25 3.25 0 0 0-3.25 3.25h2a1.25 1.25 0 1 1 2.5 0c0 1.5-2.5 1.25-2.5 3.75h2c0-1.5 2.5-1.75 2.5-3.75A3.25 3.25 0 0 0 12 6Z"
          />
        </svg>
      );
  }
}

export function ChevronRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="currentColor" d="M9 6l6 6-6 6-1.4-1.4L12.2 12 7.6 7.4 9 6Z" />
    </svg>
  );
}

export function IconBadge({ icon }) {
  const iconClass = "h-5 w-5 text-white";
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-dark shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]">
      <FaqIcon name={icon} className={iconClass} />
    </span>
  );
}
