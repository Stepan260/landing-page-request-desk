export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="9" fill="url(#rd-logo-gradient)" />
      <path
        d="M11 9.5h7.2a4.3 4.3 0 0 1 2.24 7.97L23 22.5h-3.1l-2.24-4.5H13.4v4.5H11v-13Zm2.4 2.2v4.1h4.6a2.05 2.05 0 1 0 0-4.1h-4.6Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="rd-logo-gradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0071e3" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-foreground ${className}`}
    >
      <LogoMark className="h-6 w-6" />
      Request Desk
    </span>
  );
}
