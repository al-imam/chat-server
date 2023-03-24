import { SVGProps } from "react";

export function EyeClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 21 21"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.211 6.26C4.727 7.173 3.323 8.587 2 10.5c2.537 3.667 5.37 5.5 8.5 5.5c1.423 0 2.785-.38 4.085-1.137m1.588-1.14c.98-.843 1.922-1.916 2.827-3.223C16.463 6.833 13.63 5 10.5 5c-.83 0-1.64.13-2.429.387M4 4l13 13.071"
      ></path>
    </svg>
  );
}

export function Eye(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 21 21"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.5 16c3.13 0 5.963-1.833 8.5-5.5C16.463 6.833 13.63 5 10.5 5S4.537 6.833 2 10.5c2.537 3.667 5.37 5.5 8.5 5.5z"></path>
        <path d="M10.5 7c.185 0 .366.014.543.042a2.5 2.5 0 0 0 2.915 2.916A3.5 3.5 0 1 1 10.5 7z"></path>
      </g>
    </svg>
  );
}
