<script setup lang="ts">
    import { ref } from 'vue'
    import ButtonIconText from '@/components/molecules/buttons/ButtonIconText.vue'
    
    const props = withDefaults(defineProps<{
        extraClassesButton?: string[] | string;
        extraClassesIcon?: string;
        textColor?: string;
        textSize?: string;
        icon?: string;
        text?: string;
        items?: string[];
        isMinimized?: boolean;
    }>(), {
        extraClassesButton: '',
        extraClassesIcon: '',
        textColor: 'text-secondary',
        textSize: 'text-md',
        icon: '',
        text: '',
        items: () => [],
        isMinimized: false
    })

    const emit = defineEmits(['item-clicked'])
    const isOpen = ref(false)

    const toggleDropdown = () => {
        if (!props.isMinimized) {
            isOpen.value = !isOpen.value
        } else {
            // Optional behavior when minimized
            isOpen.value = !isOpen.value
        }
    }
    const selectItem = (value: string) => {
        emit('item-clicked', value)
        isOpen.value = false
    }
</script>

<template>
    <div class="w-full">
        <ButtonIconText
            :extraClassesButton="extraClassesButton"
            :textColor="textColor"
            :textSize="textSize"
            :icon="icon"
            @click="toggleDropdown"
        >
            <template #text>
                <div v-if="!isMinimized" class="flex flex-1 items-center justify-between">
                    <span>{{ text }}</span>
                    <i :class="['fa-solid fa-chevron-down transition-transform text-xs', { 'rotate-180': isOpen }]"></i>
                </div>
            </template>
        </ButtonIconText>
        <div v-show="isOpen" :class="['overflow-hidden transition-all', isMinimized ? 'px-1' : 'pl-8 pr-2']">
            <div class="py-1 space-y-1">
                <button 
                    v-for="(item, index) in items" 
                    :key="index"
                    class="w-full text-secondary text-left py-1.5 px-2 rounded-md hover:bg-black/10 text-sm font-medium transition-colors cursor-pointer"
                    :class="[isMinimized ? 'text-center text-xs' : '']"
                    @click="selectItem(item)"
                >
                    <span v-if="!isMinimized">{{ item }}</span>
                    <span v-else>{{ item.substring(0, 2) }}</span>
                </button>
            </div>
        </div>
    </div>
</template>
