export interface FontSizesType {
  default: string;
  large: string;
  body: string;
}

export interface ColorsType {
  white: string;
  black: string;
  gray: string;
  gray_dark: string;
  gray_light: string;
  blue: string;
}

export interface SpacingType {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
}

export interface ThemeType {
  fontSizes: FontSizesType;
  colors: ColorsType;
  spacing: SpacingType;
}
