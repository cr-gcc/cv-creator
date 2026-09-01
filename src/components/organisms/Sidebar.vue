<script setup lang="ts">
    import ButtonIcon from '@/components/molecules/buttons/ButtonIcon.vue'
    import ButtonIconText from '@/components/molecules/buttons/ButtonIconText.vue'
    import LinkIconText from '@/components/molecules/links/LinkIconText.vue'
    import DropdownIconText from '@/components/molecules/dropdowns/DropdownIconText.vue'
    import ModalColors from '@/components/organisms/modals/ModalColors.vue'
    import { ref, watchEffect, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { useStyleCvStore } from '@/stores/useStyleCvStore'
    import { useToastStore } from '@/stores/useToastStore'
    import { useThemeStore } from '@/stores/useThemeStore'
    import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
    import { fonts } from '@/data/fonts'
    import { usePdfExport } from '@/composables/usePdfExport'

    const isOpenModalColors = defineModel<boolean>({ default: false });
    const styleCvStore = useStyleCvStore();
    const toastStore = useToastStore();
    const themeStore = useThemeStore();
    const companyName = ref<string>(import.meta.env.VITE_APP_NAME_SHORT);
    const sidebarOpen = ref<boolean>(true);
    const isMinimized = ref<boolean>(false);

    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isMobile = breakpoints.smaller('md');
    const isTablet = breakpoints.between('md', 'lg');

    watchEffect(() => {
        if (isMobile.value) {
            sidebarOpen.value = false;
            isMinimized.value = false;
        } else if (isTablet.value) {
            sidebarOpen.value = true;
            isMinimized.value = true;
        } else {
            sidebarOpen.value = true;
            isMinimized.value = false;
        }
    });
    
    const route = useRoute()
    const currentView = computed(() => route.name)

    const changeTheme = () => {
        themeStore.toggleTheme();
    }
    const checkIsHomeView = (): boolean => {
        if (currentView.value !== "home") {
            toastStore.show("Acuda a la seccion de inicio para realizar los cambios", "fa-solid fa-triangle-exclamation", "text-emphasis");
            return false;
        }
        return true;
    }

    const openModalColors = () => {
        if (!checkIsHomeView()) return;
        isOpenModalColors.value = true
    }
    const changeFont = (font: string) => {
        if (!checkIsHomeView()) return;
        styleCvStore.setFontFamily(font);
    }

    const { isGenerating, downloadPDF } = usePdfExport()
</script>

<template>
    <!-- Sidebar -->
    <aside
        v-if="sidebarOpen"
        :class="[
            'bg-surface m-4 rounded-2xl border border-background sticky top-4 h-fit min-h-[calc(100vh-2rem)] shrink-0 z-40 flex flex-col transition-all duration-300',
            isMinimized ? 'w-20' : 'w-56'
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
                textColor="text-emphasis" 
                textSize="text-2xl" 
                icon="fa-solid fa-compress"
                @button-clicked="isMinimized = true" 
            />
            <ButtonIcon 
                v-else
                textColor="text-emphasis" 
                textSize="text-2xl" 
                icon="fa-solid fa-expand"
                @button-clicked="isMinimized = false" 
            />
        </div>
        <!-- Navigation -->
        <nav class="flex flex-1 flex-col px-4 py-3">
            <ul class="space-y-1 text-primary">
                <li>
                    <LinkIconText
                        :to="{ name: 'home' }"
                        :extraClassesLink="['w-full group gap-2 rounded-lg py-2 font-medium transition-all hover:bg-black/10', isMinimized ? 'justify-center' : 'px-2']"
                        textColor="text-primary"
                        textSize="text-md"
                        icon="fa-solid fa-home"
                    >
                        <template #text>
                            <span v-if="!isMinimized">Inicio</span>
                        </template>
                    </LinkIconText>
                </li>
                <li>   
                    <ButtonIconText
                        :extraClassesButton="['w-full group gap-2 rounded-lg py-2 font-medium transition-all hover:bg-black/10', isMinimized ? 'justify-center' : 'px-2']"
                        textColor="text-primary"
                        textSize="text-md"
                        :icon="themeStore.isDark ? 'fa-solid fa-moon' : 'fa-solid fa-circle'"
                        @click="changeTheme()"
                    >
                        <template #text>
                            <span v-if="!isMinimized">Tema</span>
                        </template>
                    </ButtonIconText>
                </li>
                <li>   
                    <ButtonIconText
                        :extraClassesButton="['w-full group gap-2 rounded-lg py-2 font-medium transition-all hover:bg-black/10', isMinimized ? 'justify-center' : 'px-2']"
                        textColor="text-primary"
                        textSize="text-md"
                        icon="fa-solid fa-palette"
                        @click="openModalColors()"
                    >
                        <template #text>
                            <span v-if="!isMinimized">Colores</span>
                        </template>
                    </ButtonIconText>
                </li>
                <li>
                    <DropdownIconText
                        :extraClassesButton="['w-full group gap-2 rounded-lg py-2 font-medium transition-all hover:bg-black/10', isMinimized ? 'justify-center' : 'px-2']"
                        textColor="text-primary"
                        textSize="text-md"
                        icon="fa-solid fa-font"
                        text="Fuentes"
                        :isMinimized="isMinimized"
                        :items="fonts"
                        @item-clicked="(font) => changeFont(font)"
                    />
                </li>
                <li>
                    <LinkIconText
                        :to="{ name: 'sections' }"
                        :extraClassesLink="['w-full group gap-2 rounded-lg py-2 font-medium transition-all hover:bg-black/10', isMinimized ? 'justify-center' : 'px-2']"
                        textColor="text-primary"
                        textSize="text-md"
                        icon="fa-solid fa-list"
                    >
                        <template #text>
                            <span v-if="!isMinimized">Secciones</span>
                        </template>
                    </LinkIconText>
                </li>
                <li>   
                    <ButtonIconText
                        :extraClassesButton="['w-full group gap-2 rounded-lg py-2 font-medium transition-all hover:bg-black/10', isMinimized ? 'justify-center' : 'px-2', isGenerating ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer']"
                        textColor="text-primary"
                        textSize="text-md"
                        :icon="isGenerating ? 'fa-solid fa-spinner fa-spin' : 'fa-solid fa-file-pdf'"
                        :disabled="isGenerating"
                        @click="downloadPDF"
                    >
                        <template #text>
                            <span v-if="!isMinimized">{{ isGenerating ? 'Generando...' : 'Descargar' }}</span>
                        </template>
                    </ButtonIconText>
                </li>
            </ul>
        </nav>
        <!-- User
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
        -->
    </aside>
    <ModalColors v-model="isOpenModalColors" modalId="modal-colors"/>
</template>