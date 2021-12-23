import { ThemeProvider, DefaultTheme } from 'styled-components';
import { ColorsType, FontSizesType, SpacingType } from 'theme/types';

export const fontSizes: FontSizesType = {
  large: '18px',
  default: '16px',
  body: '14px',
};

export const colors: ColorsType = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#5e6c84',
  gray_dark: '#6b778c',
  gray_light: '#ebecf0',
  blue: '#007AC0',
};

export const spacing: SpacingType = {
  0: '4px',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
  9: '72px',
  10: '80px',
};

const theme: DefaultTheme = {
  colors,
  fontSizes,
  spacing,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
