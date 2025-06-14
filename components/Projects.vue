<template>
    <div class="">
        <!-- Section Heading -->
        <Heading title="My Current Work @ BandhanLife" />

        <!-- Content Card -->
        <div class="leading-relaxed1">
            <!-- Introduction -->
            <section>
                <p class="mb-2">
                    I currently lead the frontend architecture and delivery of
                    end-to-end digital services. The focus is on delivering
                    seamless, performant, and accessible policy-buying journeys
                    for users across all devices.
                </p>
            </section>

            <!-- Key Achievements -->
            <section class="">
                <h2 class="text-xl font-semibold border-slate-300 pb-2">
                    Key Achievements - Seamless Policy Buying Journey Experience
                </h2>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white border rounded-xl p-6 shadow-sm">
                        <div
                            class="inline-block bg-cyan-700 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                            Technical
                        </div>
                        <ul class="list-disc text-sm list-inside space-y-3">
                            <li>
                                Created a Design System using Stencil JS &
                                Tailwind CSS aligned with branding and
                                accessibility.
                            </li>
                            <li>
                                Maintained a scalable Monorepo integrating
                                reusable components in Vue and Stencil.
                            </li>
                            <li>
                                Built a dynamic JSON-driven form engine with
                                live validation and async rules.
                            </li>
                            <li>Improved app performance using <code><b>useCallback</b></code>,
                                <code><b>useMemo</b></code>, and lazy-loaded components.
                            </li>
                            <li>
                                Built a WASM pricing engine in Rust to optimize
                                speed and reduce vendor dependency.
                                <Chip title="Ideation" />
                            </li>

                            <li>
                                Developed static pages with Next.js SSG for
                                better SEO and faster load times.
                            </li>
                            <li>
                                Implemented a BDD testing framework using
                                Cucumber and Cypress for E2E automation.
                            </li>
                            <li>
                                Implemented re-usable Vue3
                                <b>composables</b> for common tasks like form
                                validation, data fetching, and UI state
                                management.
                            </li>
                        </ul>
                    </div>

                    <!-- Delivery Column -->
                    <div class="bg-white border rounded-xl p-6 shadow-sm">
                        <div
                            class="inline-block text-sm bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                            Delivery
                        </div>
                        <ul class="list-disc text-sm list-inside space-y-2 text-slate-700">
                            <li>
                                Established a scalable framework to rapidly
                                develop insurance products in no time.
                            </li>
                            <li>
                                Created a Scaffolder to generate new product
                                skeletons instantly with minimal inputs.
                            </li>
                            <li>
                                Established technical governance practices like
                                code standards, reviews, and automation
                                pipelines.
                            </li>
                            <li>
                                Participated in sprint planning, UX improvements
                                & A/B testing to ensure optimal user experience.
                            </li>
                            <li>
                                Collaborated with cross-functional teams to
                                understand Requirement specifications and plan for implementation.
                            </li>
                        </ul>
                    </div>
                </div>

                <p class="divide" />
            </section>

            <section class="divide-x divide-slate-300"></section>

            <section class="py-3">
                <h2 class="text-xl font-semibold border-slate-300 pb-2">
                    Key Achievements - Prior Experience
                </h2>

                <div class="">
                    <div class="bg-sky-50 text-sm border rounded-xl p-6 shadow-sm">
                        <ul class="list-disc text-sm list-inside space-y-3">
                            <li>
                                Led the revamp of digital tariff and device
                                buying journeys, improving user experience and
                                engagement.
                                <Chip title="O2 Telefonica,UK" />
                            </li>
                            <li>
                                Established technical governance and led a team
                                effectively to deliver key milestones.
                                <Chip title="Overall" />
                            </li>
                            <li>
                                Delivered pixel-perfect, reusable components
                                aligned with brand guidelines and ensured
                                zero-defect rollouts.
                                <Chip title="Overall" />
                            </li>

                            <li>
                                Stakeholder engagement and communication
                                <Chip title="Overall" />
                            </li>
                        </ul>

                        <ul class="list-disc mt-2 list-inside space-y-2 mb-6">
                            <li>Developed a multilingual enterprise portal with minimal CMS configuration.
                                <Chip title="Samsung" />
                            </li>
                            <li>Engagement with Sales team to drive several RFPs and provided estimations for future
                                projects.
                                <Chip title="Congnizant, Capgemini" />
                            </li>
                            <li>When was part of Research & Development team, Developed inhouse projects to deliver with
                                zero-defect rollouts.
                                <Chip title="Capgemini" />
                            </li>
                            <li>Worked on several Non-Functional Requirements (NFRs) including performance optimization,
                                security hardening, accessibility compliance, and scalability of frontend applications.
                                <Chip title="Overall" />
                            </li>
                        </ul>

                    </div>

                    <!-- Delivery Column -->
                </div>

                <p class="divide" />
            </section>


            <section class="py-3">
                <h2 class="text-xl font-semibold border-slate-300 pb-2">
                    React Experience
                </h2>

                <div class="bg-zinc-100">
                    <div class="text-sm border rounded-xl p-6 shadow-sm">
                        <ul class="list-disc text-sm list-inside space-y-3">
                            <li>
                                Optimized rendering performance of dynamic forms using React.memo, useCallback, and
                                JSON-driven configuration
                            </li>
                            <li>
                                Built reusable hooks for debounced API calls, pagination, and race-condition safe
                                fetching using AbortController.
                            </li>
                            <li>
                                Architected global context-based state management for theme/language/feature toggles
                                with persistence
                            </li>

                            <li>
                                Reduced unnecessary re-renders in a large product listing by 80% through smart
                                memoization and list virtualization
                            </li>

                            <li>
                                Improved error handling by implementing ErrorBoundary wrappers and external logging via
                                Sentry
                            </li>

                            <li>
                                Abstracted complex logic into custom hooks like usePrevious, useFormField, improving
                                maintainability and reusability
                            </li>

                            <li>
                                Hold complex UI state in Redux , Redux Toolkit.
                            </li>
                        </ul>


                    </div>

                    <!-- Delivery Column -->
                </div>

                <p class="divide" />
            </section>


            <section class="py-3">
                <h2 class="text-xl font-semibold border-slate-300 pb-2">
                    Vue Experience
                </h2>

                <div class="bg-teal-50">
                    <div class="text-sm border rounded-xl p-6 shadow-sm">
                        <ul class="list-disc text-sm list-inside space-y-3">
                            <li>
                                Reusable components.
                            </li>
                            <li>
                                Migrated Vuex store to Pinia to simplify store structure and improve TypeScript support.
                                Utilized storeToRefs and defineStore for modular state management and better
                                testability.
                            </li>
                            <li>
                                Implemented route-level code splitting with Vue Router and Webpack to reduce initial
                                bundle size. Lazy-loaded views and leveraged dynamic imports to optimize load times in
                                large-scale enterprise SPA.
                            </li>
                            <li>
                                Leveraged @vueuse/core and wrote custom composables like useCurrency, useFetch, and
                                useDebouncedSearch. Promoted reusability and testability in large codebases.
                            </li>

                            <li>
                                Mixins in Vue2 to share across components.
                            </li>

                            <li>
                                Vuex store shared state across app.
                            </li>

                            <li>
                                Created stencil wrapper components in Vue to be able to use it in Vue.
                            </li>
                        </ul>


                    </div>

                    <!-- Delivery Column -->
                </div>

                <p class="divide" />
            </section>
        </div>
    </div>
</template>

<script setup>
import Chip from '@/components/common/Chip.vue';
</script>

<style scoped></style>
