<script setup lang="ts">
import FormTwo from "../forms/FormTwo.vue";
import FormTwoFormula from "../FormTwoFormula.vue";
import FormTwoResult from "../FormTwoResult.vue";
</script>

<template>
  <section>
    <h2>Часть 2</h2>
    <p>Начальная точка отсчета прогноза (базовый) 2023 год.</p>
    <h3>Формула 2</h3>
    <FormTwoFormula />
    <h4>Расчёт</h4>
    <FormTwo />
    <FormTwoResult />
    <p>
      Расчет позволяет научно обосновать долгосрочную потребность субъекта в
      объемах подготовки кадров в части КЦП, а так же сколько дополнительно
      необходимо заключить договоров за счет регионального бюджета.
    </p>
  </section>
</template>

<style scoped></style>
