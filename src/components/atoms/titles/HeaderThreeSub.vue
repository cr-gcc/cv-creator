<script setup lang="ts">
    const props = withDefaults(defineProps<{
        title: string
    }>(), {
        title: 'Title'
    })
</script>

<template>
    <h3 class="font-bold text-sm mb-2 uppercase text-gray-700">
        {{ props.title }}
    </h3>
</template>
