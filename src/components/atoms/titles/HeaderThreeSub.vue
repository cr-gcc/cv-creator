<script setup lang="ts">
    const props = withDefaults(defineProps<{
        title: string
    }>(), {
        title: 'Title'
    })
</script>

<template>
    <h3 class="font-bold text-md mb-0 uppercase text-dark">
        {{ props.title }}
    </h3>
</template>
