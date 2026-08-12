<script setup lang="ts">
    import ButtonIcon from '@/components/molecules/buttons/ButtonIcon.vue'
    import ButtonIconText from '@/components/molecules/buttons/ButtonIconText.vue'
    import { ref } from 'vue'

    const companyName = ref<string>(import.meta.env.VITE_APP_NAME_SHORT)
    const sidebarOpen = ref<boolean>(true)
    const isMinimized = ref<boolean>(false)
    const options = [
        {
            name: 'Tema',
            icon: 'fa-solid fa-circle-half-stroke',
            href: '#',
            current: false,
        },
        {
            name: 'Inicio',
            icon: 'fa-solid fa-house',
            href: '#',
            current: false,
        },
        {
            name: 'Fuentes',
            icon: 'fa-solid fa-font',
            href: '#',
            current: false,
        },
        {
            name: 'Colores',
            icon: 'fa-solid fa-palette',
            href: '#',
        },
        {
            name: 'Secciones',
            icon: 'fa-solid fa-list',
            href: '#',
        },
        {
            name: 'Descargar',
            icon: 'fa-solid fa-file-pdf',
            href: '#',
        },
    ]
</script>

<template>
    <!-- Sidebar -->
    <aside
        v-if="sidebarOpen"
        :class="[
            'bg-surface mx-4 my-4 rounded-2xl border border-primary-border fixed inset-y-0 left-0 z-50 flex flex-col transition-all duration-300 lg:translate-x-0',
            isMinimized ? 'w-20' : 'w-48'
        ]"
    >
        <!-- Logo -->
        <div class="flex h-16 shrink-0 items-center px-4" :class="[isMinimized ? 'justify-center' : 'justify-between']">
            <div v-if="!isMinimized" class="flex items-center">
                <span class="text-primary text-3xl font-semibold leading-none">
                    {{ companyName }}
                </span>
            </div>
            <ButtonIcon 
                v-if="!isMinimized"
                textColor="text-secondary" 
                textSize="text-2xl" 
                icon="fa-solid fa-compress"
                @button-clicked="isMinimized = true" 
            />
            <ButtonIcon 
                v-else
                textColor="text-secondary" 
                textSize="text-2xl" 
                icon="fa-solid fa-expand"
                @button-clicked="isMinimized = false" 
            />
        </div>
        <!-- Navigation -->
        <nav class="flex flex-1 flex-col overflow-y-auto px-4 py-3">
            <ul class="space-y-1 text-primary">
                <li
                    v-for="item in options"
                    :key="item.name"
                >
                    <ButtonIconText
                        :extraClassesButton="['w-full group gap-2 rounded-lg py-2 font-medium transition-all', isMinimized ? 'justify-center' : 'px-2']"
                        :textColor="'text-primary'"
                        :textSize="'text-md'"
                        :icon="item.icon"
                    >
                        <template #text>
                            <span v-if="!isMinimized">{{ item.name }}</span>
                        </template>
                    </ButtonIconText>
                </li>
            </ul>
        </nav>
        <!-- User -->
        <div class="p-4">
            <button
                type="button"
                class="flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-black/20"
                :class="[isMinimized ? 'justify-center p-0' : '']"
            >
                <div
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600"
                >
                    CG
                </div>

                <div class="min-w-0 flex-1" v-if="!isMinimized">
                    <p class="truncate text-sm font-semibold text-gray-200">
                        Cristobal Gutierrez
                    </p>
                </div>

                <i v-if="!isMinimized" class="fa-solid fa-ellipsis-vertical text-gray-400"></i>
            </button>
        </div>
    </aside>
</template>