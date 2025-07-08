import { UiInputTypes } from '../enums';

export const PROPS_BY_TYPE_TEXT = ['type', 'placeholder', 'maxlength', 'pattern', 'autocomplete'];
export const PROPS_BY_TYPE_DATE = ['type', 'min', 'max'];
export const PROPS_BY_TYPE_NUMBER = [...PROPS_BY_TYPE_DATE, 'step'];
export const PROPS_BY_TYPE_BOOLEAN = ['type', 'checked', 'value'];
export const PROPS_BY_TYPE_FILE = ['type', 'accept', 'multiple'];
export const PROPS_BY_TYPE_REST = ['type'];

export const PROPS_BY_TYPE_ALL = [
  ...PROPS_BY_TYPE_TEXT,
  ...PROPS_BY_TYPE_DATE,
  ...PROPS_BY_TYPE_NUMBER,
  ...PROPS_BY_TYPE_BOOLEAN,
  ...PROPS_BY_TYPE_FILE,
  ...PROPS_BY_TYPE_REST,
];

export const PROPS_BY_TYPE = {
  // Текстовое поле
  [UiInputTypes.Text]: PROPS_BY_TYPE_TEXT,
  [UiInputTypes.Password]: PROPS_BY_TYPE_TEXT,
  [UiInputTypes.Search]: PROPS_BY_TYPE_TEXT,
  [UiInputTypes.Tel]: PROPS_BY_TYPE_TEXT,
  [UiInputTypes.Url]: PROPS_BY_TYPE_TEXT,
  [UiInputTypes.Email]: PROPS_BY_TYPE_TEXT,
  // Числовое поле
  [UiInputTypes.Number]: PROPS_BY_TYPE_NUMBER,
  [UiInputTypes.Range]: PROPS_BY_TYPE_NUMBER,
  // Дат\Время поле
  [UiInputTypes.Date]: PROPS_BY_TYPE_DATE,
  [UiInputTypes.DateTimeLocal]: PROPS_BY_TYPE_DATE,
  [UiInputTypes.Month]: PROPS_BY_TYPE_DATE,
  [UiInputTypes.Week]: PROPS_BY_TYPE_DATE,
  [UiInputTypes.Time]: PROPS_BY_TYPE_DATE,
  // Boolean поле
  [UiInputTypes.Checkbox]: PROPS_BY_TYPE_BOOLEAN,
  [UiInputTypes.Radio]: PROPS_BY_TYPE_BOOLEAN,
  // Файл поле
  [UiInputTypes.File]: PROPS_BY_TYPE_FILE,
  // Кнопки и цвет
  [UiInputTypes.Color]: PROPS_BY_TYPE_REST,
  [UiInputTypes.Button]: PROPS_BY_TYPE_REST,
  [UiInputTypes.Submit]: PROPS_BY_TYPE_REST,
  [UiInputTypes.Reset]: PROPS_BY_TYPE_REST,
  [UiInputTypes.Hidden]: PROPS_BY_TYPE_REST,
  [UiInputTypes.Image]: PROPS_BY_TYPE_REST,
};
