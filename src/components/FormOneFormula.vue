<script setup lang="ts"></script>

<template>
  <div>
    <p class="mathml">
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow>
          <mi>ОВ</mi>
          <mo>=</mo>
          <mrow>
            <mfrac>
              <mi>Флв</mi>
              <mi>Чн</mi>
            </mfrac>
            <mo>×</mo>
            <mn>10000</mn>
          </mrow>
        </mrow>
      </math>
    </p>
    <p>Где:</p>
    <p>ОВ – Обеспеченность врачами населения;</p>
    <p>Флв – Число врачей (физических лиц);</p>
    <p>Чн – Численность населения, согласно данным Росстата.</p>
  </div>
</template>

<style scoped>
.mathml {
  font-size: 18px;
}
</style>
