<script setup lang="ts">
    import { useStyleCvStore } from '@/stores/useStyleCvStore'
    import { computed } from 'vue'

    const styleCvStore = useStyleCvStore()

    const props = withDefaults(defineProps<{
        title: string
    }>(), {
        title: 'Title'
    })

    const borderColor = computed(() => `border-${styleCvStore.primaryColor}`)
</script>

<template>
    <h2 :class="borderColor + ' mb-2 text-lg font-bold border-b-2 uppercase tracking-widest'">
        {{ props.title }}
    </h2>
</template>
