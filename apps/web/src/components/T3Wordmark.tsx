import type { SVGProps } from "react";

export function T3Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M48 18C43.8 14.1 38.2 12 32 12C19.3 12 9 21.8 9 34S19.3 56 32 56C38.2 56 43.8 53.9 48 50"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="8"
      />
    </svg>
  );
}
