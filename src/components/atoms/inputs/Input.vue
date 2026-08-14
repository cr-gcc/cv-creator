<script setup lang="ts">
    const props = withDefaults(defineProps<{
        inputId?: string,
        type?: string,
        placeholder?: string,
        textSize?: string,
        inputWidth?: string,
        py?: string
    }>(), {
        inputId: '',
        type: 'text',
        placeholder: '',
        textSize: 'text-sm',
        inputWidth: 'w-full',
        py: 'py-1'
    })
</script>

<template>
    <input 
        :id="inputId" 
        :type="type" 
        :placeholder="placeholder"
        :class="`${textSize} ${inputWidth} ${py} bg-background border border-primary rounded-lg px-2 text-primary font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`"
    >
</template>
