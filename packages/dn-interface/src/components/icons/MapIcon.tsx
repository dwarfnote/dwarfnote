import { SVGProps } from "react";

export const MapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={6}
      y={13}
      width={4}
      height={4}
      rx={2}
      transform="rotate(90 6 13)"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
    />
    <rect
      x={17}
      y={12}
      width={4}
      height={4}
      rx={2}
      transform="rotate(-90 17 12)"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m18 11-1.5 1.5c-1.017 1.017-1.526 1.526-2.137 1.638-.24.045-.486.045-.726 0-.611-.112-1.12-.62-2.137-1.638-1.017-1.017-1.526-1.526-2.137-1.638a2.002 2.002 0 0 0-.726 0c-.611.112-1.12.62-2.137 1.638L5 14"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default MapIcon;
