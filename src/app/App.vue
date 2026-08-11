<script setup lang="ts">
    import BlankLayout from '@layouts/BlankLayout.vue'
    import MainLayout from '@layouts/MainLayout.vue'
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';

    const route = useRoute();
    const layouts = {
        main: MainLayout,
        blank: BlankLayout,
    };

    const currentLayout = computed(() => {
        const layoutName = (route.meta.layout as keyof typeof layouts) ?? 'main'
        return layouts[layoutName]
    });
</script>

<template>
    <component :is="currentLayout">
        <RouterView />
    </component>
</template>
