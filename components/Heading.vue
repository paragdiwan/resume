<template>
  <div>
    <div class="text-xl py-2 text-slate-200 font-bold"># {{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped></style>
