<template>
  <div class="bg-gray-900 p-4 mx-auto bg-center h-full">
    <div class="container">
      <div class="flex flex-row gap-7">
        <div class="basis-1/3 bg-teal-900 py-6 rounded-lg">
          <PersonalInformation />
        </div>
        <div class="basis-3/4 divide-y divide-emerald-400 divide-dashed">
          <WorkExperience />
          <Skills />
          <Projects />
          <!-- <PriorProjects /> -->
          <Education />
          <Awards />
          <Employers />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

useSeoMeta({
  title: 'Parag Diwan | Resume',
  description: 'Parag Diwan is a Frontend Architect with 19 years of experience. He is master of React,Vue,Nuxt,Next JS with Responsive Web Design.',
  ogDescription: 'Parag Diwan is a Frontend Architect with 19 years of experience. He is master of React,Vue,Nuxt,Next JS with Responsive Web Design.',
  ogTitle: 'Parag Diwan | Resume'
});


</script>

<style lang="scss" scoped></style>
