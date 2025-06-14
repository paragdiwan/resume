<template>
  <div class="grid md:grid-cols-2 gap-8">
    <!-- Frontend Card -->
    <section class="rounded-xl bg-purple-50 p-6">
      <div class="flex items-center gap-2 mb-4">
        <span class="text-2xl">🎨</span>
        <h2 class="text-xl font-semibold">Frontend</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <span v-for="(tech, index) in frontend" :key="'frontend-' + index"
          class="px-3 py-1 text-center rounded-full text-xs bg-cyan-700 text-white ">
          {{ tech }}
        </span>
      </div>
    </section>

    <!-- Backend Card -->
    <section class="rounded-xl bg-purple-50 p-6">
      <div class="flex items-center gap-2 mb-4">
        <span class="text-2xl">🛠️</span>
        <h2 class="text-xl font-semibold">Backend & Misc</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <span v-for="(tech, index) in backend" :key="'backend-' + index"
          class="px-3 py-1 text-center rounded-full text-xs text-white bg-gradient-to-r from-green-600 to-teal-500 shadow-sm">
          {{ tech }}
        </span>
      </div>
    </section>

  </div>
</template>


<script setup>
const frontend = [
   "ReactJS", "CSS3", "HTML5", "Astro JS","Nuxt", "Next", "Vue3", "Vue2",
   "Typescript", "StencilJS", "Tailwind", "SASS", "RWD", "GraphQL"
];

const backend = ["NodeJS", "Drupal", "PHP", "MySQL", "CucumberJS", "Selenium", "Cypress" , "Git", "SSR", "SSG", "PWA", "AEM" ,"Core Java*"];
</script>

<style scoped>
/* No additional styles needed — all Tailwind */
</style>
