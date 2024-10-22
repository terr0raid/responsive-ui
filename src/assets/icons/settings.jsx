import * as React from "react";
const SvgSettings = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#0F172A"
      d="M9 12V1a1 1 0 0 1 2 0v11h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2zm7-10V1a1 1 0 0 1 2 0v1h1a1 1 0 1 1 0 2h-1v11a1 1 0 0 1-2 0V4h-1a1 1 0 1 1 0-2zM4 5h1a1 1 0 0 1 0 2H4v8a1 1 0 1 1-2 0V7H1a1 1 0 0 1 0-2h1V1a1 1 0 0 1 2 0z"
    />
  </svg>
);
export default SvgSettings;
