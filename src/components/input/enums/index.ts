export enum UiInputTypes {
  // Основные текстовые типы
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Search = 'search',
  Tel = 'tel',
  Url = 'url',

  // Числовые типы
  Number = 'number',
  Range = 'range',

  // Типы даты/времени
  Date = 'date',
  DateTimeLocal = 'datetime-local',
  Time = 'time',
  Month = 'month',
  Week = 'week',

  // Выбор цвета
  Color = 'color',

  // Выбор вариантов
  Checkbox = 'checkbox',
  Radio = 'radio',

  // Загрузка файлов
  File = 'file',

  // Скрытые поля
  Hidden = 'hidden',

  // Кнопки
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
  Image = 'image',
}

// Отдельный enum для специальных атрибутов
export enum UiInputSpecialAttributes {
  Multiple = 'multiple',
  MinMax = 'minmax',
  Step = 'step',
  Pattern = 'pattern',
}
