import type { Size } from '@/enums';
import type { UiInputTypes } from '../enums';

export interface BaseInputProps {
  id: string;
  label: string;
  type: UiInputTypes;
  name: string;
  attr: string;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  class: string | Record<string, boolean> | (string | Record<string, boolean>)[];
  modelValue: string | number | boolean | File[] | null;
}

export interface TextInputProps extends BaseInputProps {
  placeholder: string;
  maxlength: number;
  pattern: string;
  autocomplete: string;
}

export interface NumberInputProps extends BaseInputProps {
  min: number;
  max: number;
  step: number;
}

export interface DateInputProps extends BaseInputProps {
  min: string;
  max: string;
}

export interface ChoiceInputProps extends BaseInputProps {
  checked: boolean;
  value: string | number;
}

export interface FileInputProps extends BaseInputProps {
  accept: string;
  multiple: boolean;
}

export type UiInputPropsBinds =
  | Partial<TextInputProps>
  | Partial<NumberInputProps>
  | Partial<DateInputProps>
  | Partial<ChoiceInputProps>
  | Partial<FileInputProps>;

export type UiInputProps = UiInputPropsBinds & {
  clearable?: boolean;
  size?: Size;
  error?: string;
};
