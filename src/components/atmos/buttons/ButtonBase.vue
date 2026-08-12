<script setup lang="ts">
    withDefaults(defineProps<{
        extraClassesButton?: string | string[];
        buttonColor?: string;
        textColor?: string;
        textSize?: string;
    }>(), {
        extraClassesButton: '',
        buttonColor: '',
        textColor: 'text-primary',
        textSize: 'text-md',
    })

    const emit = defineEmits(['button-clicked'])

    const handleClick = () => {
        emit('button-clicked')
    }
</script>

<template>
    <button 
        :class="[
            'flex items-center cursor-pointer',
            buttonColor,
            textColor,
            textSize,
            extraClassesButton
        ]"
        @click="handleClick()"
    >
        <slot name="button-content" />
    </button>
</template>
