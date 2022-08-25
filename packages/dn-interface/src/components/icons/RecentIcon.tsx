import { SVGProps } from "react";

export const RecentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1-14.5a1 1 0 1 0-2 0v5.25c0 .69.56 1.25 1.25 1.25h3.25a1 1 0 1 0 0-2H13V6.5Z"
      fill="currentColor"
    />
  </svg>
);

export default RecentIcon;
