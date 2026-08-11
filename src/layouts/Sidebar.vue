<script setup lang="ts">
    import { ref } from 'vue'
    const companyName = ref<string>(import.meta.env.VITE_APP_NAME)
    const sidebarOpen = ref<boolean>(false)
    const options = [
        {
            name: 'Inicio',
            icon: 'fa-solid fa-house',
            href: '#',
            current: true,
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
    <!-- Mobile backdrop -->
    <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
        @click="sidebarOpen = false"
    />

    <!-- Sidebar -->
    <aside
        :class="[
            'fixed inset-y-0 left-0 z-50 flex w-56 flex-col border-r border-gray-200 bg-white transition-transform duration-200 lg:translate-x-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        ]"
    >
        <!-- Logo -->
        <div class="flex h-16 shrink-0 items-center border-b border-gray-200 px-6">
            <a href="#" class="flex items-center gap-3">
                <div
                    class="flex h-9 w-9 items-center justify-center rounded-lg bg-red-800 text-white"
                >
                    <i class="fa-solid fa-user-tie"></i>
                </div>

                <span class="text-lg font-semibold text-gray-900">
                    {{ companyName }}
                </span>
            </a>

            <button
                type="button"
                class="ml-auto text-gray-400 hover:text-gray-600 lg:hidden"
                @click="sidebarOpen = false"
            >
                <i class="fa-solid fa-xmark text-lg"></i>
            </button>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-1 flex-col overflow-y-auto px-4 py-5">
            <!-- Main -->
            <div>
                <ul class="space-y-1">
                    <li
                        v-for="item in options"
                        :key="item.name"
                    >
                        <a
                            :href="item.href"
                            class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                        >
                            <i
                                :class="[
                                    item.icon,
                                    'w-5 text-center text-gray-400 group-hover:text-gray-600',
                                ]"
                            />

                            <span>{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- User -->
        <div class="border-t border-gray-200 p-4">
            <button
                type="button"
                class="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-gray-50"
            >
                <div
                    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600"
                >
                    CG
                </div>

                <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-semibold text-gray-900">
                        Cristobal Gutierrez
                    </p>

                    <p class="truncate text-xs text-gray-500">
                        Administrador
                    </p>
                </div>

                <i class="fa-solid fa-ellipsis-vertical text-gray-400"></i>
            </button>
        </div>
    </aside>

    <!-- Mobile button -->
    <button
        type="button"
        class="fixed left-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm lg:hidden"
        @click="sidebarOpen = true"
    >
        <i class="fa-solid fa-bars"></i>
    </button>
</template>