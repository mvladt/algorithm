<script setup lang="ts">
const props = defineProps<{ caption?: string }>();
</script>

<template>
  <div class="my-table-wrapper">
    <table v-bind="$attrs">
      <caption v-if="props.caption">
        {{
          props.caption
        }}
      </caption>
      <thead>
        <slot name="head"></slot>
      </thead>
      <tbody>
        <slot name="body"></slot>
      </tbody>
      <tfoot>
        <slot name="foot"></slot>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
.my-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}
:slotted(tbody tr) {
  border-top: 1px solid darkgray;
}
</style>
