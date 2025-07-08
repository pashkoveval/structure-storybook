import type { Meta, StoryObj } from '@storybook/vue3-vite';

import UiBlock from '@/components/UiBlock/UiBlock.vue';

const meta = {
  // Название кнопки в меню Storybook
  title: 'Примеры/UiBlock',
  // Сам компонент
  component: UiBlock,
  // Авто-документация - https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Настройки отображения и типов Props компонента
  argTypes: {},
  // Props компонента
  args: {
    title: 'Блок',
    rounded: false,
    bordered: false,
    cascadeColored: false,
    accordion: false,
  },
} satisfies Meta<typeof UiBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const Bordered: Story = {
  args: {
    bordered: true,
  },
};

export const CascadeColored: Story = {
  args: {
    cascadeColored: true,
  },
};

export const Accordion: Story = {
  args: {
    accordion: true,
  },
};
