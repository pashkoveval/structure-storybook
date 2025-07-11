import type { Preview } from '@storybook/vue3-vite';
import { setup } from '@storybook/vue3';
import { Icon } from '@iconify/vue';

setup((app) => {
  // Регистрируем компонент иконки глобально для Storybook
  app.component('IconifyIcon', Icon);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Глобальные настройки тем (опционально)
  globalTypes: {
    theme: {
      description: 'Глобальная смена темы',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: ['light', 'dark'],
      },
    },
  },
};

export default preview;
