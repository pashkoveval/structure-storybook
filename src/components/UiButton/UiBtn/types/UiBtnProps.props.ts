import type { IconName } from '@/components/UiIcon/enums';
import type { ButtonType } from '../enums';
import type { UiIconProps } from '@/components/UiIcon/types';
import type { Colors, Size } from '@/enums';

export interface UiBtnProps extends Partial<UiIconProps> {
  label?: string;
  type?: ButtonType;
  icon?: IconName;
  color?: Colors;
  size?: Size;
  round?: boolean;
}
