import type { Meta, StoryObj } from '@storybook/vue3-vite';

import UiBtn from '@btn/UiBtn/UiBtn.vue';
import { ButtonType } from '@/components/UiButton/UiBtn/enums';
import { IconName } from '@/components/UiIcon/enums';
import { Colors, Size } from '@/enums';

const meta = {
  // Название кнопки в меню Storybook
  title: 'Примеры/UiBtn',
  // Сам компонент
  component: UiBtn,
  // Авто-документация - https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Настройки отображения и типов Props компонента
  argTypes: {
    type: { control: 'select', options: Object.values(ButtonType) },
    icon: { control: 'select', options: Object.values(IconName) },
    color: { control: 'select', options: Object.values(Colors) },
    size: { control: 'select', options: Object.values(Size) },
  },
  // Props компонента
  args: {
    label: 'Кнопка',
    icon: IconName.Add,
    color: Colors.Base,
    round: false,
  },
} satisfies Meta<typeof UiBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rounded: Story = {
  args: {
    label: 'Кнопка',
    type: ButtonType.Text,
  },
};

export const Bordered: Story = {
  args: {
    label: 'Кнопка',
    type: ButtonType.Text,
  },
};
