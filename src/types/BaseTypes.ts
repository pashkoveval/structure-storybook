export type BaseKeyValueBoolean<T extends string = string> = {
  [key in T]: boolean;
};

/**
 * Базовые свойства компонента в виде boolean флагов
 */
export type BaseProps = BaseKeyValueBoolean;

/**
 * Классы компонента в виде boolean флагов
 * (альтернативное название для лучшей семантики)
 */
export type ClassType = BaseKeyValueBoolean;
