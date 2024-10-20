import * as React from "react";
const SvgTrophy = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <path
      stroke="#78350F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.988 10.667h28.18s-2.348 35.352-14.09 35.352c-5.736 0-9.23-8.436-11.304-17.067-2.172-9.036-2.786-18.286-2.786-18.286"
    />
    <path
      stroke="#78350F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M46.169 10.666S48.625 8.046 50.667 8c4-.09 4.74 2.666 4.74 2.666.782 1.626 1.408 5.852-2.35 9.753s-7.963 7.314-9.675 8.533M17.987 10.667S15.427 8.017 13.333 8c-4-.031-4.74 2.667-4.74 2.667-.782 1.625-1.408 5.851 2.35 9.752s8.119 7.315 9.83 8.534M22.684 53.333c0-4.876 9.394-7.314 9.394-7.314s9.394 2.438 9.394 7.314z"
    />
  </svg>
);
export default SvgTrophy;
