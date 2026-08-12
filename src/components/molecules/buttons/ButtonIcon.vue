<script setup lang="ts">
    import ButtonBase from '@/components/atoms/buttons/ButtonBase.vue'
    
    withDefaults(defineProps<{
        extraClassesButton?: string | string[];
        extraClassesIcon?: string;
        buttonColor?: string;
        textColor?: string;
        textSize?: string;
        icon?: string;
    }>(), {
        extraClassesButton: '',
        extraClassesIcon: '',
        buttonColor: '',
        textColor: 'text-primary',
        textSize: 'text-md',
        icon: '',
    })

    const emit = defineEmits(['button-clicked'])

    const handleClick = () => {
        emit('button-clicked')
    }
</script>

<template>
    <ButtonBase
        :buttonColor="buttonColor"
        :extraClassesButton="extraClassesButton"
        :textColor="textColor"
        :textSize="textSize"
        @button-clicked="handleClick"
    >
        <template #button-content>
            <i :class="[icon, extraClassesIcon]"></i> 
        </template>
    </ButtonBase>   
</template>