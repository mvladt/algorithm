<script setup lang="ts">
import { computed } from "vue";
import { useFormTwotate } from "../composables/useFormTwoState.ts";
import { numberToString } from "../utils.ts";

const { state } = useFormTwotate();

const result = computed(() => {
  return numberToString(
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
  <p class="result">Результат: {{ result }}</p>
</template>

<style scoped>
.result {
  font-size: large;
}
</style>
