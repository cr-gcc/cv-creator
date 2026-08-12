<script setup lang="ts">
    withDefaults(defineProps<{
        color?: string;
        iconSize?: string;
        icon?: string;
    }>(), {
        color: 'text-primary',
        iconSize: 'text-md',
        icon: '',
    })

    const emit = defineEmits(['button-clicked'])

    const handleClick = () => {
        emit('button-clicked')
    }
</script>

<template>
    <button class="flex items-center cursor-pointer" @click="handleClick()">
        <i :class="[color, iconSize, icon]"></i>
    </button>
</template>
