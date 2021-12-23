import React from 'react';
import { colors } from 'theme';

export const UpArrowIcon: React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
> = (props) => (
  <svg
    width="5"
    height="8"
    viewBox="0 0 8 5"
    fill={colors.black}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 0.5L0 4.5H8L4 0.5Z" />
  </svg>
);
