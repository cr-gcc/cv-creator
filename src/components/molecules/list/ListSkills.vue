<script setup lang="ts">
    import H3B from '@/components/atoms/titles/HeaderThreeBasic.vue';
    import { useStyleCvStore } from '@/stores/useStyleCvStore'
    import { info } from '@/data/info'
    import { computed } from 'vue'

    const styleCvStore = useStyleCvStore()
    const marker = computed(() => `marker:text-${styleCvStore.secondaryColor}`)
</script>

<template>
     <ul :class="'list-disc list-inside pl-0 '+marker">
        <li class="mb-1" v-for="(skill, index) in info.skills" :key="index">
            <H3B :name="skill.name" />
            <p class="text-sm leading-tight" v-for="(description, index) in skill.description" :key="index">{{ description }}</p>
        </li>
    </ul>

</template>