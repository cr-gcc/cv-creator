<script setup lang="ts">
    import Sidebar from '@/components/organisms/Sidebar.vue'
</script>

<template>
    <div id="main-layout" class="bg-background">
        <div class="min-h-screen">
            <Sidebar />
            <main class="lg:pl-56">
                <div class="px-4 py-6 sm:px-6 lg:px-8">
                    <div class="mt-6">
                        <slot />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>