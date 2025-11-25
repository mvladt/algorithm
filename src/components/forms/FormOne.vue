<script setup lang="ts">
import { useFormOneState } from "../../composables/useFormOneState.ts";

const { state } = useFormOneState();
</script>

<template>
  <form>
    <div>
      <label for="f1-Флв"><span>Число врачей</span></label>
      <input v-model="state.Флв" id="f1-Флв" type="number" />
    </div>
    <div>
      <label for="f1-Чн">Численность населения</label>
      <input v-model="state.Чн" id="f1-Чн" type="number" />
    </div>
  </form>
</template>

<style scoped>
label {
  width: 100%;
  font-size: 14px;
  line-height: 1;
}
input {
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>
