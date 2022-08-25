import { SVGProps } from "react";

export const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 7c0-1.886 0-2.828.586-3.414C3.172 3 4.114 3 6 3h12c1.886 0 2.828 0 3.414.586C22 4.172 22 5.114 22 7c0 .943 0 1.414-.293 1.707C21.414 9 20.943 9 20 9H4c-.943 0-1.414 0-1.707-.293C2 8.414 2 7.943 2 7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.879 20.121C4 19.243 4 17.828 4 15v-4h16v4c0 2.828 0 4.243-.879 5.121C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.879ZM10 15a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      fill="currentColor"
    />
  </svg>
);

export default TrashIcon;
