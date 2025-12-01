<script setup lang="ts">
import Table1 from "../tables/Table1.vue";
import Table2 from "../tables/Table2.vue";
import Table3 from "../tables/Table3.vue";
</script>

<template>
  <section>
    <h2>Раздел 3</h2>
    <h3>
      Расчёт прогнозируемого значения обеспеченности врачами (ОВ) до 2041 г.
    </h3>

    <h4>Исходные данные</h4>
    <Table1 style="margin-bottom: 2rem" />

    <h4>Итоговый расчёт</h4>

    <Table2 style="margin-bottom: 2rem" />

    <Table3 style="margin-bottom: 2rem" />

    <p>
      Расчет позволяет научно обосновать долгосрочную потребность субъекта в
      объемах подготовки кадров в части КЦП, а так же сколько дополнительно
      необходимо заключить договоров за счет регионального бюджета.
    </p>
  </section>
</template>

<style scoped></style>
