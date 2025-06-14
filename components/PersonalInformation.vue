<template>
  <div class="max-w-md mx-auto text-black">
    <div class="flex flex-col items-center text-center">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQG2XzIxpxomig/profile-displayphoto-shrink_400_400/B4DZWMwczUGcAg-/0/1741823267021?e=1754524800&v=beta&t=jE9JTlClZMWns6r4iIwHiSq31CjJFdtYTCNPe_vS2tI"
        alt="Parag Diwan"
        class="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
        loading="lazy"
        decoding="async"
      />

      <h1 class="mt-4 text-2xl font-bold">Parag Diwan</h1>

      <p class="mt-1 text-sm flex items-center gap-2">
        <font-awesome icon="location-dot" class="" />
        Pune, MH, INDIA
      </p>
      <p class="mt-1 text-sm  flex items-center gap-2">
        +91 8805026370
      </p>

      <div class="mt-4 flex gap-4">
        <NuxtLink
          href="https://www.linkedin.com/in/paragdiwan/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <NuxtImg src="LinkedIn.png" width="36" height="36" class="hover:scale-110 transition" />
        </NuxtLink>

        <NuxtLink
          href="https://www.github.com/paragdiwan"
          target="_blank"
          aria-label="GitHub"
        >
          <NuxtImg src="GitHub.png" width="36" height="36" class="hover:scale-110 transition" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script logic needed for this component
</script>

<style scoped>
/* Optional: You can add custom styles here */
</style>
