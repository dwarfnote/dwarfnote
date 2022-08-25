import { SVGProps } from "react";

export const NotebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 8h13.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 10.28 21 11.12 21 12.8v1.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 19 17.88 19 16.2 19H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 16.72 3 15.88 3 14.2V8ZM3 8c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 5 5.068 5 6 5h2.343c.818 0 1.226 0 1.594.152.368.152.657.442 1.235 1.02L13 8H3Z"
      fill="currentColor"
    />
  </svg>
);

export default NotebookIcon;
