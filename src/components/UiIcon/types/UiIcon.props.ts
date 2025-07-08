import type { IconName } from '../enums';
import type { IconConfig } from './Config';

export interface UiIconProps extends Partial<IconConfig>{
  icon: IconName;
  config?: IconConfig;
}
