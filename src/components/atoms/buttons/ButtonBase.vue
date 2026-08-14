<script setup lang="ts">
    withDefaults(defineProps<{
        type?: 'submit' | 'button' | 'reset';
        extraClassesButton?: string | string[];
        buttonColor?: string;
        textColor?: string;
        textSize?: string;
    }>(), {
        type: 'button',
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
        :type="type"
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
