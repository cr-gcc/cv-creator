<script setup lang="ts">
    import ButtonBase from '@/components/atmos/buttons/ButtonBase.vue'
    
    withDefaults(defineProps<{
        extraClassesButton?: string[] | string;
        extraClassesIcon?: string;
        textColor?: string;
        textSize?: string;
        icon?: string;
        text?: string;
    }>(), {
        extraClassesButton: '',
        extraClassesIcon: '',
        textColor: 'text-primary',
        textSize: 'text-md',
        icon: '',
        text: '',
    })
</script>

<template>
    <ButtonBase
        :extraClassesButton="extraClassesButton"
        :textColor="textColor"
        :textSize="textSize"
    >
        <template #button-content>
            <i :class="[icon, extraClassesIcon]"></i>
            <slot name="text">{{ text }}</slot>
        </template>
    </ButtonBase>   
</template>