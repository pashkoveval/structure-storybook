import type { UiInputProps } from './UiInput.props';

export interface UiInputEmits {
  'update:modelValue': [value: UiInputProps['modelValue']];
  clear: [value: null];
}
