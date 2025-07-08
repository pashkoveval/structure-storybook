<script setup lang="ts">
import { computed, ref } from 'vue';
import { ButtonType } from './enums';
import { IconName } from '@/components/UiIcon/enums';
import { Colors, Size } from '@/enums';
import type { UiBtnProps } from './types';
import type { UiIconExpose, UiIconProps } from '@/components/UiIcon/types';
import type { ClassType } from '@/types/ClassType';
import UiIcon from '@/components/UiIcon/UiIcon.vue';
import { setConfig } from '@/components/UiIcon/helpers';

defineOptions({ name: 'UiBtn' });
const props = defineProps<UiBtnProps>();

const uiIconRef = ref<UiIconExpose | undefined>(undefined);

const btnType = computed<ButtonType>(() => props.type ?? ButtonType.Text);
const btnClass = computed<ClassType>(() => {
  const color = `color-${props.color || Colors.Base}`;
  const size = `size-${props.size || Size.Small}`;
  const type = `type-${btnType.value}`;

  return {
    [`ui-btn_${color} ${color}`]: true,
    [`ui-btn_${type} ${type}`]: true,
    [`ui-btn_${size} ${size}`]: true,
    [`ui-btn_round round`]: props.round,
  };
});

const isIconBtn = computed<boolean>(() => btnType.value === ButtonType.Icon);
const iconBtnProps = computed<UiIconProps>(() => {
  let iconConfig: UiIconProps['config'] = props.config;

  if (!props.config) {
    const iconProps: UiIconProps = {
      icon: props.icon || IconName.Close,
    };

    (Object.keys(uiIconRef.value?.props || {}) as (keyof UiIconProps)[]).forEach((key) => {
      iconProps[key] = props[key] as never;
    });

    iconConfig = setConfig(iconProps);
  }

  const iconPropsToReturn: UiIconProps = {
    icon: props.icon || IconName.Close,
    config: iconConfig,
  };

  return iconPropsToReturn;
});
</script>

<template>
  <button class="ui-btn" :class="btnClass">
    <slot>
      <UiIcon v-if="isIconBtn" ref="uiIconRef" v-bind="iconBtnProps" />
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

  display: flex;
  align-items: center;
  justify-content: center;

  &_icon {
    .size_small {
      padding: 2px;
    }
    .size_medium {
      padding: 4px;
    }
    .size_large {
      padding: 4px;
    }
  }
  &_text {
    .size_small {
    }
    .size_medium {
    }
    .size_large {
    }
  }
  &_link {
    .size_small {
    }
    .size_medium {
    }
    .size_large {
    }
  }
}
</style>
