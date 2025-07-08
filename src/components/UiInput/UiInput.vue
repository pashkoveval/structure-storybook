<script setup lang="ts">
import { computed, ref, toRaw } from 'vue';
import { makeId, pick } from '@/helpers';
import { UiInputTypes } from './enums';
import { PROPS_BY_TYPE, PROPS_BY_TYPE_ALL } from './constants';
import type { UiInputProps, UiInputEmits, UiInputPropsBinds } from './types';
import type { ClassType } from '@/types';
import UiClearableBtn from '@/components/UiButton/UiClearableBtn/UiClearableBtn.vue';

defineOptions({ name: 'UiInput' });

const props = defineProps<UiInputProps>();
const emits = defineEmits<UiInputEmits>();

const uiInputRef = ref<HTMLElement | undefined>(undefined);

const inputId = ref<string>(makeId(props.id || UiInputTypes.Text, props.attr));
const inputType = ref<UiInputTypes>(props.type || UiInputTypes.Text);
const inputClass = computed<ClassType>(() => {
  const type = `type-${inputType.value}`;

  return {
    [`ui-input_${type} ${type}`]: true,
    [`ui-input_disabled disabled`]: props.disabled,
    [`ui-input_readonly readonly`]: props.readonly,
  };
});
const inputProps = computed<UiInputPropsBinds>(() => {
  const list = PROPS_BY_TYPE?.[inputType.value] ?? PROPS_BY_TYPE_ALL;
  const propsList = pick(toRaw(props), list) as Partial<UiInputPropsBinds>;

  if (!propsList.type) {
    propsList.type = inputType.value;
  }

  return propsList;
});

const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(v: typeof props.modelValue) {
    emits('update:modelValue', v);
  },
});

const clear = () => {
  const { disabled = false, readonly = false } = props || {};
  if (!disabled && !readonly) {
    localValue.value = null;
    emits('clear', null);
  }
};

defineExpose({
  uiInputRef,
  props,
  inputProps,
  emits,
  localValue,
});
</script>

<template>
  <div ref="uiInputRef" class="ui-input" :class="inputClass">
    <label :for="inputId" class="ui-input--wrapper">
      <span v-if="props.label" class="ui-input--label">{{ props.label }}</span>

      <div class="ui-input--main">
        <slot name="prepend" />

        <template v-if="readonly">
          <p class="ui-input--value">{{ localValue }}</p>
        </template>
        <template v-else>
          <input :id="inputId" v-model="localValue" v-bind="inputProps" class="ui-input--input" />

          <UiClearableBtn v-if="props.clearable" class="ui-input--clearable" @click="clear" />
        </template>

        <slot name="append" />
      </div>
    </label>
  </div>
</template>

<style scoped lang="scss">
.ui-input {
  &--wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &--main {
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;

    @media (hover: hover) {
      &:hover {
        .clearable {
          opacity: 1;
        }

        .ui-input--input {
          &:not(&:disabled) {
            border: 1px solid var(--color-border-hover);
          }
        }
      }
    }
  }

  &--label {
    color: var(--color-text);
  }

  &--input {
    width: 100%;
    padding: 8px 10px;

    background: var(--color-background-soft);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    color: var(--color-heading);

    font-size: 16px;

    outline: none;
    transition: all ease-in-out 0.2s;
  }

  &_disabled {
    .ui-input--clearable {
      display: none;
    }
  }
  &_readonly {
    .ui-input--main {
      width: 100%;
      padding: 2px 10px;

      background: var(--color-background-soft);
      border: 1px solid var(--color-border);
      border-radius: 4px;

      transition: all ease-in-out 0.2s;
      min-height: 36px;
    }
    .ui-input--value {
      color: var(--color-heading);
      font-size: 16px;
    }
  }
}
</style>
