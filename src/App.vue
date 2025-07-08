<script setup lang="ts">
import { ref } from 'vue';
import UiInput from './components/UiInput/UiInput.vue';
import type { UiInputProps } from './components/UiInput/types/UiInput.props';

const uiInputRef = ref<HTMLElement | undefined>(undefined);
const uiInputProps = ref<Omit<UiInputProps, 'modelValue'>>({
  label: 'Поле ввода текстового значения',
  id: 'uiInput',
  attr: 'form.uiInput',
  clearable: true,
});

const form = ref({
  uiInput: '',
});
</script>

<template>
  <h1>Components:</h1>

  <div class="ui-input">
    <UiInput ref="uiInputRef" v-model="form.uiInput" v-bind="uiInputProps" />

    <pre>uiInputRef: {{ uiInputRef }}</pre>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
