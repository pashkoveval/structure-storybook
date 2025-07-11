import type { Color } from 'storybook/internal/theming';
import type { IconName } from '../enums';
import type { Size } from '@/enums';

export interface UiIconProps {
  icon: IconName;
  size?: Size;
  color?: Color;
}
