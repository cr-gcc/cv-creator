<script setup lang="ts">
    import LinkBase from '@/components/atoms/links/LinkBase.vue'
    
    withDefaults(defineProps<{
        to: string | object;
        extraClassesLink?: string[] | string;
        extraClassesIcon?: string;
        textColor?: string;
        textSize?: string;
        icon?: string;
        text?: string;
    }>(), {
        extraClassesLink: '',
        extraClassesIcon: '',
        textColor: 'text-primary',
        textSize: 'text-md',
        icon: '',
        text: '',
    })
</script>

<template>
    <LinkBase
        :to="to"
        :extraClassesLink="extraClassesLink"
        :textColor="textColor"
        :textSize="textSize"
    >
        <template #link-content>
            <i :class="[icon, extraClassesIcon]"></i>
            <slot name="text">{{ text }}</slot>
        </template>
    </LinkBase>   
</template>
