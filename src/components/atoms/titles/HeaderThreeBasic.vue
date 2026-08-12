<script setup lang="ts">
    const props = withDefaults(defineProps<{
        name: string;
    }>(), {
        name: 'Name'
    })
</script>

<template>
    <h3 class="inline font-semibold text-sm">
        {{ props.name }}
    </h3>
</template>
