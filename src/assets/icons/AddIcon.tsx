import React from 'react';
import { colors } from 'theme';

export const AddIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill={colors.white}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H7V1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V7Z" />
  </svg>
);
