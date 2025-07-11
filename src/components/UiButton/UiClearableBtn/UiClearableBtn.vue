<script setup lang="ts">
import { ref } from 'vue';
import { IconName } from '@/components/UiIcon/enums';
import { ButtonType } from '../UiBtn/enums';
import UiBtn from '../UiBtn/UiBtn.vue';
import { Size } from '@/enums';

defineOptions({ name: 'UiClearableBtn' });

const icon = ref<IconName>(IconName.Close);
const type = ref<ButtonType>(ButtonType.Icon);
const size = ref<Size>(Size.Medium);
</script>

<template>
  <UiBtn :icon="icon" :type="type" :size="size" class="clearable" />
</template>

<style scoped lang="scss">
.clearable {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 1;
  top: 50%;
  right: 4px;
  transform: translate(0px, -50%);

  opacity: 0;
  transition: all ease-in-out 0.2s;

  color: var(--color-border-hover);
  background: var(--color-background-soft);

  cursor: pointer;

  &.show {
    opacity: 1;
  }

  &[disabled] {
    cursor: text;
  }

  @media (hover: hover) {
    &:hover {
      color: var(--color-heading);
    }
  }
}
</style>
