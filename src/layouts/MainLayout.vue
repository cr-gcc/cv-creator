<script setup lang="ts">
    import Sidebar from '@layouts/Sidebar.vue'
</script>

<template>
    <div id="main-layout">
        <div class="min-h-screen flex flex-col">
            <Sidebar />
            <main class="flex-1">
                <slot />
            </main>
        </div>
    </div>
</template>