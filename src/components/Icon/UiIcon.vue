<script setup lang="ts">
import { computed, ref } from 'vue';
import { getIconClass, setConfig } from './helpers';

import type { UiIconProps } from './types';

defineOptions({ name: 'UiIcon' });
const props = defineProps<UiIconProps>();

const configIcon = ref(props.config ?? setConfig(props.icon));
const classValue = computed<string>(() => getIconClass(configIcon.value));
const colorValue = computed<string>(() => configIcon.value.color || 'var(--color-heading)');

// Все иконки
// https://fonts.google.com/icons?selected=Material+Symbols+Outlined:close:FILL@0;wght@400;GRAD@0;opsz@20&icon.size=16&icon.color=%23000000&icon.platform=web
</script>

<template>
  <div class="ui-icon" :class="classValue">
    {{ props.icon }}
  </div>
</template>

<style scoped lang="scss">
.icon {
  color: v-bind(colorValue);
}
</style>
