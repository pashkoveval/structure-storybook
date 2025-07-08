import type { Ref } from 'vue';
import type { UiIconProps } from './UiIcon.props';

export interface UiIconExpose {
  uiIconRef?: Ref<HTMLElement | undefined>;
  props?: UiIconProps;
}
