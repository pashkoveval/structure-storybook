<script setup lang="ts">
import { ref } from 'vue';
import type { UiBlockProps, UiBlockEmits, UiBlockExpose } from './types';

defineOptions({ name: 'UiBlock' });
const emits = defineEmits<UiBlockEmits>();
const props = defineProps<UiBlockProps>();

const uiBlockRef = ref<HTMLElement | undefined>(undefined);

const collapseValue = ref<boolean>(false);

const clickOnHeader = () => {
  emits('clickOnHeader', collapseValue.value);
};

defineExpose<UiBlockExpose>({
  uiBlockRef,
  props,
  emits,
  collapseValue,
});
</script>

<template>
  <div ref="uiBlockRef" class="ui-block">
    <div class="ui-block--header" @click="clickOnHeader">
      <h2>{{ props.title }}</h2>

      <span></span>
    </div>

    <div class="ui-block--body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
