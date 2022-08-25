import { SVGProps } from "react";

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={11} cy={11} r={7} stroke="currentColor" strokeWidth={2} />
    <path
      d="m20 20-3-3"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SearchIcon;
