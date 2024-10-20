import * as React from "react";
const SvgTunnel = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={64}
    fill="none"
    {...props}
  >
    <path
      stroke="#78350F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M53.667 53.333 11 40m42.667 13.333H11V40zm0 0V32c0-11.782-9.552-21.333-21.334-21.333-2.118 0-4.164.308-6.095.883C17.426 14.173 11 22.336 11 32v8z"
    />
    <path
      stroke="#78350F"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M43 24v2.667M32.333 21.334V24M21.667 18.667v2.666"
    />
  </svg>
);
export default SvgTunnel;
