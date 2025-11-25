<script setup lang="ts">
import { computed } from "vue";
import { useFormOneState } from "../composables/useFormOneState.ts";
import { numberToString } from "../utils.ts";

const { state } = useFormOneState();

const result = computed(() => {
  return numberToString((state.Флв / state.Чн) * 10000);
});
</script>

<template>
  <p>
    Результат:
    {{ result }}
  </p>
</template>

<style scoped></style>
