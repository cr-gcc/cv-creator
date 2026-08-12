<script setup lang="ts">
    import { computed } from 'vue'

    const props = defineProps<{
        data: string | HTMLElement,
    }>()

    const dataHtml = computed(() => {
        if (typeof props.data === 'string') {
            return props.data
        }
        return props.data.innerHTML
    })
</script>

<template>
    <p class="text-sm leading-tight" v-html="dataHtml"></p>
</template>