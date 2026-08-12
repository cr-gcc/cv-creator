<script setup lang="ts">
    import H3L from '@/components/atoms/titles/HeaderThreeList.vue';
    import { useStyleCvStore } from '@/stores/useStyleCvStore'
    import { companies } from '@/data/companies'
    import { computed } from 'vue'

    const styleCvStore = useStyleCvStore()

    const props = withDefaults(defineProps<{
        hired?: string
    }>(), {
        hired: 'Type'
    })

    const textColor = computed(() => `text-${styleCvStore.secondaryColor}`)
    const filteredCompanies = computed(() => companies.filter(c => c.type === props.hired))
</script>

<template>
    <ul :class="'list-disc list-inside pl-0 marker:'+textColor">
        <li 
            v-for="(company, index) in filteredCompanies" :key="index"
            class="mb-1">
            <H3L :company="company.name" :range="company.range" />
            <p class="text-sm leading-none">
                <span class="font-semibold">{{ company.role }}:</span>
                {{ company.description }}
            </p>
        </li>
    </ul>
</template>