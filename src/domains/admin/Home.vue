<script setup lang="ts">
    import H2 from '@/components/atoms/titles/HeaderTwo.vue';
    import H3S from '@/components/atoms/titles/HeaderThreeSub.vue';
    import ListCompany from '@/components/molecules/list/ListCompany.vue'
    import ListSkills from '@/components/molecules/list/ListSkills.vue'
    import PInfo from '@/components/atoms/paragraphs/ParagraphInfo.vue'
    import { computed } from 'vue'
    import { useStyleCvStore } from '@/stores/useStyleCvStore'
    import { info } from '@/data/info'
    
    const styleCvStore = useStyleCvStore()

    const currentFont = computed(() => styleCvStore.fontFamily)
    const bgColor = computed(() => `bg-${styleCvStore.primaryColor}`)
</script>

<template>
    <div class="w-full">
        <h1 class="text-primary-border text-5xl font-semibold leading-none">Diseño</h1>
    </div>
    <div class="w-full mb-4">
        <p class="flex w-full justify-end items-center gap-2">
            <span class="text-emphasis font-semibold">Color y Fuente:</span>
            <span :class="bgColor + ' text-white px-3 py-1 rounded-lg text-sm'" :style="{ fontFamily: currentFont }">
                {{ styleCvStore.primaryColor }} <span class="mx-2">|</span> {{ currentFont }}
            </span>
        </p>
    </div>
    <div class=" mx-auto bg-gray-100 text-gray-900" :style="{ fontFamily: currentFont, width: '794px', height: '1123px' }">
        <!-- Header -->
        <div :class="bgColor + ' text-white px-6 pt-6 pb-2 items-center'">
            <div class="grid grid-cols-3">
                <div class="flex items-end col-span-2">
                    <h1 class="text-3xl uppercase">{{ info.name }}</h1>
                </div>
                <div class="text-right space-y-1 text-xs">
                    <p v-for="(personal, index) in info.personal" :key="index"><i :class="personal.icon + ' mr-2'"></i>{{ personal.data }}</p>
                </div>
                <div class="col-span-3 mt-2 border-t-2 border-white"></div>
                <p class="py-1 text-lg tracking-widest">{{ info.role }}</p>
            </div>
        </div>
        <!-- Info -->
        <div class="grid grid-cols-5 text-justify">
            <div class="col-span-3">
                <div class="w-full px-4 pt-3 pb-0">
                    <section class="mb-2">
                        <H2 title="Perfil Profesional" />
                        <PInfo :data="info.profile" />
                    </section>
                    <section>
                        <H2 title="Experiencia laboral" />
                        <H3S title="Tiempo completo" />
                        <div class="mb-3">
                            <ListCompany hired="Full-time" />      
                        </div>
                        <H3S title="Consultor/Freelancer" />
                        <div class="mb-3">
                            <ListCompany hired="Part-time" />    
                        </div>
                    </section>
                </div>
            </div>
            <div class="col-span-2">
                <div class="w-full px-4 pt-3 pb-0">
                    <section class="mb-2">
                        <H2 title="Formación Académica" />
                        <PInfo :data="info.education" />
                    </section>
                    <section class="mb-2">
                        <H2 title="Habilidades" />
                        <ListSkills/>
                    </section>
                    <section class="mb-2">
                        <H2 title="Repositorio" />
                        <PInfo :data="info.repository" />
                    </section>
                    <section class="mb-2">
                        <H2 title="Certificados" />
                        <PInfo :data="info.certificates" />
                    </section>
                    <section class="mb-2">
                        <H2 title="Información adicional" />
                        <PInfo :data="info.additional" />
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
