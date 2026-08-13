<script setup lang="ts">
    import Sidebar from '@/components/organisms/Sidebar.vue'
</script>

<template>
    <div id="main-layout" class="bg-background">
        <div class="flex min-h-screen">
            <Sidebar />
            <main class="flex-1 overflow-x-hidden">
                <div class="p-4 sm:px-6 lg:px-8">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>