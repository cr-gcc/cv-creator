<script setup lang="ts">
    import Label from '@/components/atoms/labels/Label.vue'
    import Input from '@/components/atoms/inputs/Input.vue'

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
    <div class="flex flex-col">
        <Label 
            :htmlFor="inputId" 
            :text="placeholder"
            :textSize="textSize"
        />
        <Input 
            :inputId="inputId" 
            :type="type" 
            :placeholder="placeholder"
            :textSize="textSize"
            :inputWidth="inputWidth"
            :py="py"
        />
    </div>
</template>
