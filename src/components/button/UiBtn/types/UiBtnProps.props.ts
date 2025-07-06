import type { IconName } from '@/components/Icon/enums';
import type { ButtonType } from '../enums';
import type { UiIconProps } from '@/components/Icon/types';
import type { Colors } from '@/enums';

export interface UiBtnProps extends Partial<UiIconProps> {
  label?: string;
  type: ButtonType;
  icon?: IconName;
  color?: Colors;
  round?: boolean;
}
