import type { Size } from '@/enums';
import type { IconName, IconSize, IconStyle, IconWeight } from '../enums';

// Полная конфигурация иконки
export interface IconConfig {
  name: IconName;
  style?: IconStyle;
  weight?: IconWeight;
  size?: Size | IconSize;
  color?: string;
}
