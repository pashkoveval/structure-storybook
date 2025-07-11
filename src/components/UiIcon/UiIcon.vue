<script setup lang="ts">
import { computed, ref } from 'vue';

import type { UiIconExpose, UiIconProps } from './types';
import { Colors, Size } from '@/enums';
import type { ClassType } from '@/types';
import { IconName } from './enums';

defineOptions({ name: 'UiIcon' });
const props = defineProps<UiIconProps>();

const uiIconRef = ref<HTMLElement | undefined>(undefined);

const icon = ref<IconName>(props.icon || IconName.Close);

const classValue = computed<ClassType>(() => ({
  [`ui-icon__color-${props.color || Colors.Base}`]: true,
  [`ui-icon__size-${props.size || Size.Small}`]: true,
}));

defineExpose<UiIconExpose>({
  uiIconRef,
  props,
});
</script>

<template>
  <IconifyIcon ref="uiIconRef" class="ui-icon" :class="classValue" :icon="icon" />
</template>

<style scoped lang="scss">
.ui-icon {
  // padding: 2px;
  &__color {
    &-base {
      color: $color-base;
    }
  }
  &__size {
    &-small {
      width: 16px;
      height: 16px;
    }
    &-medium {
      width: 20px;
      height: 20px;
    }
    &-large {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
