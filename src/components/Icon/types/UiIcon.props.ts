import type { IconName } from '../enums';
import type { IconConfig } from './Config';

export interface UiIconProps {
  icon: IconName;
  config?: IconConfig;
}
