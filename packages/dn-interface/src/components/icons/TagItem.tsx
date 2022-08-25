import { SVGProps } from "react";

export const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.293 6.293C3 6.586 3 7.057 3 8v8c0 .943 0 1.414.293 1.707C3.586 18 4.057 18 5 18h9.86c1.047 0 1.571 0 2.013-.237.442-.236.733-.672 1.314-1.544l1.334-2c.717-1.076 1.075-1.613 1.075-2.219 0-.606-.358-1.143-1.075-2.219l-1.334-2c-.58-.872-.872-1.308-1.314-1.544C16.431 6 15.907 6 14.86 6H5c-.943 0-1.414 0-1.707.293ZM15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="currentColor"
    />
  </svg>
);

export default TagIcon;
