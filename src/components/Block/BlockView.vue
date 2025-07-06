<script setup lang="ts">
defineOptions({ name: 'BlockView' });
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="block-view">
    <div class="block-view--header">
      <h2>{{ props.title }}</h2>

      <span></span>
    </div>

    <div class="block-view--body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
