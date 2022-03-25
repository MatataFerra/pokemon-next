import { FC } from "react";

interface ArrowSvgProps {
  style?: {
    transform: string;
  };
}

const ArrowSvg: FC<ArrowSvgProps> = (props) => (
  <svg height={21} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m6.5 12.5 4-4 4 4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowSvg;
