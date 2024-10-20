import * as React from "react";
const SvgTv = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={64}
    fill="none"
    {...props}
  >
    <path
      stroke="#78350F"
      strokeWidth={1.5}
      d="M6 53.333V24a5.333 5.333 0 0 1 5.333-5.334H54A5.333 5.333 0 0 1 59.333 24v29.333A5.333 5.333 0 0 1 54 58.667H11.333A5.333 5.333 0 0 1 6 53.332Z"
    />
    <path
      stroke="#78350F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M23.333 6.667 32.667 16 42 6.667"
    />
  </svg>
);
export default SvgTv;
