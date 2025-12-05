<script setup lang="ts">
const model = defineModel<number>();
</script>

<template>
  <input
    v-model.number="model"
    type="number"
    step="10"
    min="0"
    v-bind="$attrs"
  />
</template>

<style scoped></style>
