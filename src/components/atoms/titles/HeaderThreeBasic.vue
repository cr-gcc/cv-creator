<script setup lang="ts">
    const props = withDefaults(defineProps<{
        name: string;
        textSize?: string;
        textColor?: string;
    }>(), {
        name: 'Name',
        textSize: 'text-sm',
        textColor: 'text-dark'
    })
</script>

<template>
    <h3 :class="`${textSize} ${textColor} font-semibold inline`">
        {{ props.name }}
    </h3>
</template>
