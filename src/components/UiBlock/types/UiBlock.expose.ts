import type { EmitFn, Ref } from 'vue';
import type { UiBlockEmits } from './UiBlock.emits';
import type { UiBlockProps } from './UiBlock.props';

export interface UiBlockExpose {
  uiBlockRef: Ref<HTMLElement | undefined>;
  props: UiBlockProps;
  emits: EmitFn<UiBlockEmits>;
  collapseValue: Ref<boolean>;
}
