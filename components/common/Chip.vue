<template>
<span
    class="ml-2 inline-block bg-black text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm align-middle"
>
    {{title}}
</span>
</template>



<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
/* No scoped styles needed unless you want custom animation or underline */
</style>
