<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <table>
      <caption>
        Число врачей по возрастным группам, 2018–2023 гг.
      </caption>
      <thead>
        <tr>
          <th>Год</th>
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
          <th scope="row">2018</th>
          <td>845</td>
          <td>571</td>
          <td>401</td>
          <td>513</td>
          <td>606</td>
          <td>990</td>
          <td><strong>3926</strong></td>
        </tr>
        <tr>
          <th scope="row">2019</th>
          <td>903</td>
          <td>531</td>
          <td>374</td>
          <td>460</td>
          <td>432</td>
          <td>1077</td>
          <td><strong>3777</strong></td>
        </tr>
        <tr>
          <th scope="row">2020</th>
          <td>988</td>
          <td>529</td>
          <td>358</td>
          <td>445</td>
          <td>394</td>
          <td>1076</td>
          <td><strong>3790</strong></td>
        </tr>
        <tr>
          <th scope="row">2021</th>
          <td>983</td>
          <td>545</td>
          <td>353</td>
          <td>397</td>
          <td>378</td>
          <td>1056</td>
          <td><strong>3712</strong></td>
        </tr>
        <tr>
          <th scope="row">2022</th>
          <td>1001</td>
          <td>538</td>
          <td>354</td>
          <td>378</td>
          <td>361</td>
          <td>1062</td>
          <td><strong>3694</strong></td>
        </tr>
        <tr>
          <th scope="row">2023</th>
          <td>1021</td>
          <td>529</td>
          <td>311</td>
          <td>368</td>
          <td>342</td>
          <td>1096</td>
          <td><strong>3667</strong></td>
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
</style>
