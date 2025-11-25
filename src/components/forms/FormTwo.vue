<script setup lang="ts">
import { useFormTwotate } from "../../composables/useFormTwoState.ts";

const { state } = useFormTwotate();
</script>

<template>
  <form>
    <div>
      <label for="f1-АбсЧВ_за_ГП">Врачей за пред. период (АбсЧВ_за_ГП)</label>
      <input v-model="state.АбсЧВ_за_ГП" id="f1-АбсЧВ_за_ГП" type="number" />
    </div>
    <div>
      <label for="f1-АбсЧВ_СКУ">Врачей, убывших из профессии (АбсЧВ_СКУ)</label>
      <input v-model="state.АбсЧВ_СКУ" id="f1-АбсЧВ_СКУ" type="number" />
    </div>
    <div>
      <label for="f1-АбсЧВ_УТМ"
        >Убывших в результ. труд. миграц. (АбсЧВ_УТМ)</label
      >
      <input v-model="state.АбсЧВ_УТМ" id="f1-АбсЧВ_УТМ" type="number" />
    </div>
    <div>
      <label for="f1-АбсЧВ_ЦН"
        >Вернувщихся, после обуч. по целевому (АбсЧВ_ЦН)</label
      >
      <input v-model="state.АбсЧВ_ЦН" id="f1-АбсЧВ_ЦН" type="number" />
    </div>
    <div>
      <label for="f1-АбсЧВ_ВП">Вновь пришедших (АбсЧВ_ВП)</label>
      <input v-model="state.АбсЧВ_ВП" id="f1-АбсЧВ_ВП" type="number" />
    </div>
    <div>
      <label for="f1-АбсЧВ_ПТМ"
        >Привлеченных в результ. труд. миграции (АбсЧВ_ПТМ)</label
      >
      <input v-model="state.АбсЧВ_ПТМ" id="f1-АбсЧВ_ПТМ" type="number" />
    </div>
    <div>
      <label for="f1-ЧислНас">Численность населения (ЧислНас)</label>
      <input v-model="state.ЧислНас" id="f1-ЧислНас" type="number" />
    </div>
  </form>
</template>

<style scoped>
label {
  width: 100%;
  display: block;
  font-size: 14px;
  line-height: 1.2;
}
input {
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>
