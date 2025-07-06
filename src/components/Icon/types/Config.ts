import type { IconName, IconSize, IconStyle, IconWeight } from '../enums';

// Полная конфигурация иконки
export interface IconConfig {
  name: IconName;
  style?: IconStyle;
  weight?: IconWeight;
  size?: IconSize;
  color?: string;
}
