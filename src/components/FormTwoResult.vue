<script setup lang="ts">
import { computed } from "vue";
import { useFormTwotate } from "../composables/useFormTwoState.ts";

const { state } = useFormTwotate();

const result = computed(() => {
  return (
    ((state.АбсЧВ_за_ГП -
      state.АбсЧВ_СКУ -
      state.АбсЧВ_УТМ +
      state.АбсЧВ_ЦН +
      state.АбсЧВ_ВП +
      state.АбсЧВ_ПТМ) /
      state.ЧислНас) *
    10000
  );
});
</script>

<template>
  <p>
    Результат:
    {{ Number(result).toLocaleString("ru-RU", { maximumFractionDigits: 6 }) }}
  </p>
</template>

<style scoped></style>
