export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      aria-hidden="true"
    >
      <rect width="512" height="512" fill="#d92d20" />
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#ffffff"
        stroke="none"
      >
        <path d="M4655 4943 c-848 -738 -1767 -1822 -2580 -3043 -142 -213 -374 -577 -471 -741 l-31 -52 -42 78 c-68 127 -130 213 -223 311 -143 149 -298 243 -470 284 -140 34 -357 23 -469 -22 l-31 -13 63 -50 c424 -332 949 -930 1303 -1485 47 -74 89 -134 92 -133 3 1 43 78 88 170 312 633 784 1474 1309 2333 422 689 795 1272 1564 2438 9 12 14 22 12 22 -2 -1 -53 -44 -114 -97z" />
      </g>
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
