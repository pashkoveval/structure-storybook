<script setup lang="ts">
import { computed, ref } from 'vue';
import { getIconClass, setConfig } from './helpers';

import type { IconConfig, UiIconExpose, UiIconProps } from './types';

defineOptions({ name: 'UiIcon' });
const props = defineProps<UiIconProps>();

const uiIconRef = ref<HTMLElement | undefined>(undefined);

const configIcon = computed<IconConfig>(() => setConfig(props));
const classValue = computed<string>(() => getIconClass(configIcon.value));
const colorValue = computed<string>(() => configIcon.value.color || 'var(--color-heading)');

defineExpose<UiIconExpose>({
  uiIconRef,
  props,
});
// Все иконки
// https://fonts.google.com/icons?selected=Material+Symbols+Outlined:close:FILL@0;wght@400;GRAD@0;opsz@20&icon.size=16&icon.color=%23000000&icon.platform=web
</script>

<template>
  <div ref="uiIconRef" class="ui-icon" :class="classValue">
    {{ props.icon }}
  </div>

  {{ props }}
  {{ configIcon }}
</template>

<style scoped lang="scss">
.icon {
  color: v-bind(colorValue);

  padding: 2px;

  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
  .material-symbols-outlined {
    font-variation-settings: v-bind(configIcon);
    font-size: 16px;
    color: #000000;
  }
}
</style>
