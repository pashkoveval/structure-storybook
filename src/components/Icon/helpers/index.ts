import { IconName, IconSize, IconStyle, IconWeight } from '../enums';
import type { IconConfig } from '../types';

export const setConfig = (
  name: IconName = IconName.Close,
  style: IconStyle = IconStyle.Sharp,
  weight: IconWeight = IconWeight.Light,
  size: IconSize = IconSize.Large,
  color: string = 'var(--color-heading)',
) => ({
  name,
  style,
  weight,
  size,
  color,
});

// Генерация класса для Material Icons
export function getIconClass(config: IconConfig): string {
  return `material-symbols-outlined ${config.style} ${config.weight} ${config.size}`;
}
