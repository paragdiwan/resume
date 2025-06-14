<template>
  <div class="min-h-screen flex items-start justify-center py-6 px-4">
    <div class="rounded-xl container">
      <div class="flex flex-col lg:flex-row gap-5">
        <aside class="lg:basis-1/4 rounded-lg">
          <PersonalInformation />
        </aside>
        <main class="lg:basis-3/4 space-y-6">
          <WorkExperience />
          <Skills />
          <Projects />
          <Education />
          <Awards />
          <Employers />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Parag Diwan | Resume',
  description:
    'Parag Diwan is a Frontend Architect with 19 years of experience. He is master of React,Vue,Nuxt,Next JS with Responsive Web Design.',
  ogDescription:
    'Parag Diwan is a Frontend Architect with 19 years of experience. He is master of React,Vue,Nuxt,Next JS with Responsive Web Design.',
  ogTitle: 'Parag Diwan | Resume',
});
</script>

<style lang="scss" scoped></style>
