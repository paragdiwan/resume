<template>
    <div class="grid grid-cols-12 mb-4">
        <div v-for="(icon, index) in iconPath" :key="index">
            <div class="flex flex-col">
                <NuxtImg :src="icon.name" :alt="icon.name" width="30" height="30" />
                <p v-if="displayText" class="text-sky-100 text-xs mt-4">{{ icon.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    displayText: Boolean,
    required: false
});

const iconPath = ref([
    {
        name: "JavaScript.png",
        text: "CoreJS",
    },
    {
        name: "React.png",
        text: "ReactJS",
    },
    {
        name: "CSS3.png",
        text: "CSS3",
    },
    { name: "HTML5.png", text: "HTML5" },
    { name: "Nuxt JS.png", text: "Nuxt" },
    { name: "Next.js.png", text: "Next" },
    { name: "Vue.js.png", text: "VueJS" },
    { name: "Typescript.png", text: "Typescript" },
    { name: "stencil.png", text: "Stencil" },
    { name: "Tailwind CSS.png", text: "Tailwind" },
    { name: "Sass.png", text: "SASS" },
    // { name: "Cucumber.png", text: "BDD-E2E" },
    { name: "Node.js.png", text: "NodeJS" },
]);
</script>

<style lang="scss" scoped></style>
