<script setup lang="ts">
import { computed } from 'vue';
import { ButtonType } from './enums';
import { IconName } from '@/components/Icon/enums';
import { Colors } from '@/enums';
import type { UiBtnProps } from './types';
import type { UiIconProps } from '@/components/Icon/types';
import type { ClassType } from '@/types/ClassType';
import UiIcon from '@/components/Icon/UiIcon.vue';

defineOptions({ name: 'UiBtn' });
const props = defineProps<UiBtnProps>();

const btnType = computed<ButtonType>(() => props.type ?? ButtonType.Text);
const btnClass = computed<ClassType>(() => {
  const color = `color-${props.color || Colors.Base}`;
  const type = `type-${props.type}`;

  return {
    [`ui-btn_${color} ${color}`]: true,
    [`ui-btn_${type} ${type}`]: true,
    [`ui-btn_round round`]: props.round,
  };
});

const isIconBtn = computed<boolean>(() => btnType.value === ButtonType.Icon);
const iconBtnProps = computed<UiIconProps>(() => ({
  icon: props.icon || IconName.Close,
  config: props.config,
}));
</script>

<template>
  <button class="ui-btn" :class="btnClass">
    <slot>
      <UiIcon v-if="isIconBtn" v-bind="iconBtnProps" />
      <template v-else>
        {{ props.label }}
      </template>
    </slot>
  </button>
</template>

<style scoped lang="scss">
.ui-btn {
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
}
</style>
