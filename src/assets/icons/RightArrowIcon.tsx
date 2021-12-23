import React from 'react';
import { colors } from 'theme';

export const RightArrowIcon: React.FunctionComponent<
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
    <path d="M4.49998 4L0.499985 0V8L4.49998 4Z" />
  </svg>
);
