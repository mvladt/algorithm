<script setup lang="ts">
import { useFormTwotate } from "../../composables/useFormTwoState.ts";

const { state } = useFormTwotate();
</script>

<template>
  <form>
    <div>
      <label for="f1-АбсЧВ_за_ГП">АбсЧВ_за_ГП</label>
      <input v-model="state.АбсЧВ_за_ГП" id="f1-АбсЧВ_за_ГП" type="number" />
    </div>
    <div>
      <label for="f1-АбсЧВ_СКУ">АбсЧВ_СКУ</label>
      <input v-model="state.АбсЧВ_СКУ" id="f1-АбсЧВ_СКУ" type="number" />
    </div>
    <div>
      <label for="f1-АбсЧВ_УТМ">АбсЧВ_УТМ</label>
      <input v-model="state.АбсЧВ_УТМ" id="f1-АбсЧВ_УТМ" type="number" />
    </div>
    <div>
      <label for="f1-АбсЧВ_ЦН">АбсЧВ_ЦН</label>
      <input v-model="state.АбсЧВ_ЦН" id="f1-АбсЧВ_ЦН" type="number" />
    </div>
    <div>
      <label for="f1-АбсЧВ_ВП">АбсЧВ_ВП</label>
      <input v-model="state.АбсЧВ_ВП" id="f1-АбсЧВ_ВП" type="number" />
    </div>
    <div>
      <label for="f1-АбсЧВ_ПТМ">АбсЧВ_ПТМ</label>
      <input v-model="state.АбсЧВ_ПТМ" id="f1-АбсЧВ_ПТМ" type="number" />
    </div>
    <div>
      <label for="f1-ЧислНас">ЧислНас</label>
      <input v-model="state.ЧислНас" id="f1-ЧислНас" type="number" />
    </div>
  </form>
</template>

<style scoped>
label {
  width: 100%;
}
input {
  width: 100%;
}
</style>
