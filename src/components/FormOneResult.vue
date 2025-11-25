<script setup lang="ts">
import { computed } from "vue";
import { useFormOneState } from "../composables/useFormOneState.ts";

const { state } = useFormOneState();

const result = computed(() => {
  return (state.Флв / state.Чн) * 10000;
});
</script>

<template>
  <p>
    Результат:
    {{ Number(result).toLocaleString("ru-RU", { maximumFractionDigits: 6 }) }}
  </p>
</template>

<style scoped></style>
