<script setup lang="ts">
    const props = withDefaults(defineProps<{
        inputId?: string,
        type?: string,
        placeholder?: string,
        textSize?: string,
        inputWidth?: string,
        py?: string,
        mb?: string,
        textColor?: string
    }>(), {
        inputId: '',
        placeholder: '',
        textSize: 'text-sm',
        inputWidth: 'w-full',
        py: 'py-1',
        mb: '',
        textColor: 'text-dark'
    })
</script>

<template>
    <textarea 
        :id="inputId" 
        :placeholder="placeholder"
        :class="`${textSize} ${inputWidth} ${py} ${mb} ${textColor} field-sizing-content bg-background border border-primary rounded-lg px-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`"
    />
</template>