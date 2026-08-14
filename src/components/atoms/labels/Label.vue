<script setup lang="ts">
    const props = withDefaults(defineProps<{
        htmlFor?: string,
        text?: string,
        textSize?: string
    }>(), {
        htmlFor: '',
        text: '',
        textSize: 'text-md'
    })
</script>

<template>
    <label 
        :for="htmlFor" 
        :class="`${textSize} text-primary font-semibold`"
    >
        {{ text }}
    </label>
</template>