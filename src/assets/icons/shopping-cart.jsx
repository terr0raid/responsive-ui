import * as React from "react";
const SvgShoppingCart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M10 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4m7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4M3.962 5.923a.962.962 0 0 1 0-1.923h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H9.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L19.5 13.12a1.92 1.92 0 0 1-1.866 1.457h-7.512a3.846 3.846 0 0 1-3.755-3.012L5.113 5.923z"
    />
  </svg>
);
export default SvgShoppingCart;
