<template>
  <div>

    <figcaption class="flex flex-col items-center space-x-4">
      <img
        src="https://media.licdn.com/dms/image/C5603AQHTx2GLN_MKAQ/profile-displayphoto-shrink_800_800/0/1590039615862?e=1726704000&v=beta&t=Tn63i2Ha33W-ZXxn0zZo5xJ4nqI0C-951OiT3fQWJ9U"
        alt="" class="text-center w-24 h-24 rounded-full object-contain" loading="lazy" decoding="async" />

      <div class="">
        <div class="text-base mt-4">
          <a href="#" class="text-indigo-100 ml-4 my-4 tracking-wider text-2xl font-semibold" tabindex="0">
            Parag Diwan</a>
        </div>
        <div class="fa-fa-map-marker mt-1 ml-4 text-sm font-bold text-slate-200">
          <div>
            <font-awesome icon="location-dot" />
            &nbsp;Pune, MH, INDIA.
          </div>

          <div class="flex flex-row mt-4">
            <NuxtLink href="https://www.linkedin.com/in/paragdiwan/" target="_blank" class="text-slate-200 mr-3">
              <NuxtImg src="LinkedIn.png" width="40" height="40" />
            </NuxtLink>

            <NuxtLink href="https://www.github.com/paragdiwan" target="_blank" class="text-slate-200">
              <NuxtImg src="GitHub.png" width="40" height="40" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </figcaption>
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped></style>
