<script setup lang="ts">
    import { RouterLink } from 'vue-router'

    withDefaults(defineProps<{
        to: string | object;
        extraClassesLink?: string | string[];
        linkColor?: string;
        textColor?: string;
        textSize?: string;
    }>(), {
        extraClassesLink: '',
        linkColor: '',
        textColor: 'text-primary',
        textSize: 'text-md',
    })
</script>

<template>
    <router-link 
        :to="to"
        :class="[
            'flex items-center cursor-pointer',
            linkColor,
            textColor,
            textSize,
            extraClassesLink
        ]"
    >
        <slot name="link-content" />
    </router-link>
</template>
