<script setup lang="ts">
    const props = withDefaults(defineProps<{
        company: string;
        range: string;
    }>(), {
        company: 'Company',
        range: 'Range'
    })
</script>

<template>
    <h3 class="inline font-semibold leading-tight">
        {{ props.company }}
        <span class="text-sm px-2 font-bold">|</span>
        <span class="text-sm font-normal">{{ props.range }}</span>
    </h3>
</template>
