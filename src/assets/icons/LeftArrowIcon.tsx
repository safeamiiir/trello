import React from 'react';
import { colors } from 'theme';

export const LeftArrowIcon: React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
> = (props) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 5 8"
    fill={colors.black}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0.5 4L4.5 0V8L0.5 4Z" />
  </svg>
);
