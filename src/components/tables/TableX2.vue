<script setup lang="ts">
import { computed } from "vue";

import { useTable1Store } from "../../composables/useTable1Store.ts";
import { useTable2Store } from "../../composables/useTable2Store.ts";
import MyNumberInput from "../../uikit/MyNumberInput.vue";
import { рассчитатьКРЗ, рассчитатьКРЗна10тыщ } from "../../utils.ts";

const { baseRowTotal: t1BaseRowTotal, formState: t1FormState } =
  useTable1Store();

const { formState: t2FormState, population, computedColumn } = useTable2Store();

const baseRow = computed<number[]>(() => {
  const КРЗ = рассчитатьКРЗ(
    t1BaseRowTotal.value,
    computedColumn.value[0],
    t2FormState.АбсЧВ_УТМ,
    t2FormState.АбсЧВ_ЦН,
    t2FormState.АбсЧВ_ВП,
    t2FormState.АбсЧВ_ПТМ
  );
  const КРЗна10тыщ = рассчитатьКРЗна10тыщ(КРЗ, population.value[0]);

  return [
    t1FormState.baseYear,
    t1BaseRowTotal.value,
    computedColumn.value[0],
    t2FormState.АбсЧВ_УТМ,
    t2FormState.АбсЧВ_ЦН,
    t2FormState.АбсЧВ_ВП,
    t2FormState.АбсЧВ_ПТМ,
    population.value[0],
    КРЗ,
    КРЗна10тыщ,
  ];
});

const computedRows = computed<number[]>(() => {
  const result = [[...baseRow.value]];

  for (let i = 0; i <= population.value.length - 2; i += 1) {
    const row = [
      result[i][0] + 1,
      result[i][8],
      computedColumn.value[i],
      baseRow.value[3],
      baseRow.value[4],
      baseRow.value[5],
      baseRow.value[6],
      population.value[i + 1],
    ];

    const КРЗ = рассчитатьКРЗ(row[1], row[2], row[3], row[4], row[5], row[6]);
    const КРЗна10тыщ = рассчитатьКРЗна10тыщ(КРЗ, row[7]);

    row.push(КРЗ);
    row.push(КРЗна10тыщ);

    result.push(row);
  }

  return result;
});
</script>

<template>
  <div class="wrapper">
    <table>
      <caption>
        Расчёт КРЗ по годам
      </caption>

      <thead>
        <tr>
          <th>Год</th>
          <th>Врачей за пред. период (АбсЧВ_за_ГП)</th>
          <th>Врачей, убывших из профессии (АбсЧВ_СКУ)</th>
          <th>Убывших в результ. труд. миграц. (АбсЧВ_УТМ)</th>
          <th>Вернувшихся, после обуч. по целевому (АбсЧВ_ЦН)</th>
          <th>Вновь пришедших (АбсЧВ_ВП)</th>
          <th>Привлеченных в результ. труд. миграции (АбсЧВ_ПТМ)</th>
          <th>Численность населения (ЧислНас)</th>
          <th>Численность врачей</th>
          <th>КРЗ на 10 тыс. населения</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">
            <input
              v-model.number="t1FormState.baseYear"
              type="number"
              min="0"
            />
          </th>
          <td>
            {{ baseRow[1] }}
          </td>
          <td>
            {{ baseRow[2] }}
          </td>
          <td>
            <MyNumberInput v-model.number="t2FormState.АбсЧВ_УТМ" />
          </td>
          <td>
            <MyNumberInput v-model.number="t2FormState.АбсЧВ_ЦН" />
          </td>
          <td>
            <MyNumberInput v-model.number="t2FormState.АбсЧВ_ВП" />
          </td>
          <td>
            <MyNumberInput v-model.number="t2FormState.АбсЧВ_ПТМ" />
          </td>
          <td>{{ baseRow[7] }}</td>
          <td>
            {{ baseRow[8] }}
          </td>
          <td>
            {{ baseRow[9]?.toFixed(1) }}
          </td>
        </tr>
        <tr v-for="row in computedRows.slice(1)">
          <th scope="row">{{ row[0] }}</th>
          <td>{{ row[1] }}</td>
          <td>{{ row[2] }}</td>
          <td>{{ row[3] }}</td>
          <td>{{ row[4] }}</td>
          <td>{{ row[5] }}</td>
          <td>{{ row[6] }}</td>
          <td>{{ row[7] }}</td>
          <td>{{ row[8] }}</td>
          <td>{{ row[9].toFixed(1) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  overflow-x: auto;
}
th {
  font-size: 13px;
}
table input {
  width: 75px;
  text-align: right;
}
@media (max-width: 1024px) {
  table input {
    width: 55px;
  }
}
</style>
