<template>
  <div class="py-1">
      <h2 class="text-2xl text-indigo-900 font-bold  pb-1  transition-all duration-300 hover:tracking-wider">
        {{ title }}
      </h2>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
/* No scoped styles needed unless you want custom animation or underline */
</style>
