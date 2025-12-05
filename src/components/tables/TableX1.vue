<script setup lang="ts">
import { useTable1Store } from "../../composables/useTable1Store.ts";

const { formState, computedRows2, size } = useTable1Store();
</script>

<template>
  <div class="wrapper">
    <table>
      <caption>
        Расчет СКУ по годам
      </caption>

      <thead>
        <tr>
          <th scope="row">Год</th>
          <th>До&nbsp;36</th>
          <th>36&nbsp;―&nbsp;45</th>
          <th>46&nbsp;―&nbsp;50</th>
          <th>51&nbsp;―&nbsp;55</th>
          <th>56&nbsp;―&nbsp;60</th>
          <th>Старше&nbsp;61</th>
          <th>Итого</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">
            <input v-model.number="formState.baseYear" type="number" />
          </th>
          <td>
            <input v-model.number="formState.under36" type="number" />
          </td>
          <td>
            <input v-model.number="formState.age36_45" type="number" />
          </td>
          <td>
            <input v-model.number="formState.age46_50" type="number" />
          </td>
          <td>
            <input v-model.number="formState.age51_55" type="number" />
          </td>
          <td>
            <input v-model.number="formState.age56_60" type="number" />
          </td>
          <td>
            <input v-model.number="formState.over61" type="number" />
          </td>
          <td>
            <strong>{{
              Number(formState.under36) +
              Number(formState.age36_45) +
              Number(formState.age46_50) +
              Number(formState.age51_55) +
              Number(formState.age56_60) +
              Number(formState.over61)
            }}</strong>
          </td>
        </tr>
        <tr v-for="row in computedRows2" :key="row.year">
          <th scope="row">{{ row.year }}</th>
          <td>{{ row.values.find((v) => v.key === "under36")?.value }}</td>
          <td>{{ row.values.find((v) => v.key === "age36_45")?.value }}</td>
          <td>{{ row.values.find((v) => v.key === "age46_50")?.value }}</td>
          <td>{{ row.values.find((v) => v.key === "age51_55")?.value }}</td>
          <td>{{ row.values.find((v) => v.key === "age56_60")?.value }}</td>
          <td>{{ row.values.find((v) => v.key === "over61")?.value }}</td>
          <td>{{ row.values.reduce((acc, i) => (acc += i.value), 0) }}</td>
        </tr>
        <tr>
          <th scope="row">{{ formState.baseYear + size + 1 }}</th>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
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
