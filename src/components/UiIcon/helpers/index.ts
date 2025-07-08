import { Size } from '@/enums';
import { IconName, IconSize, IconStyle, IconWeight } from '../enums';
import type { IconConfig } from '../types';
import type { UiIconProps } from './../types/UiIcon.props';

export const setConfig = (data: UiIconProps) => {
  if (data.config) {
    return data.config;
  }

  const {
    icon = IconName.Close,
    style = IconStyle.Sharp,
    weight = IconWeight.Light,
    size = Size.Small,
    color = 'var(--color-heading)',
  } = data;

  const sizeMap: Record<string, IconSize> = {
    [Size.Small]: IconSize.Small,
    [Size.Medium]: IconSize.Medium,
    [Size.Large]: IconSize.Large,
  };

  return {
    name: icon,
    style,
    weight,
    size: sizeMap[size],
    color,
  };
};

// Генерация класса для Material Icons
export function getIconClass(config: IconConfig): string {
  return `material-symbols-outlined ${config.style} ${config.weight} ${config.size}`;
}
