<script setup lang="ts">
    import ButtonIcon from '@/components/molecules/buttons/ButtonIcon.vue'
    import ButtonIconText from '@/components/molecules/buttons/ButtonIconText.vue'
    import LinkIconText from '@/components/molecules/links/LinkIconText.vue'
    import DropdownIconText from '@/components/molecules/dropdowns/DropdownIconText.vue'
    import ModalColors from '@/components/organisms/modals/ModalColors.vue'
    import { useStyleCvStore } from '@/stores/useStyleCvStore'
    import { fonts } from '@/data/fonts'
    import { ref } from 'vue'

    const isOpenModalColors = defineModel<boolean>({ default: false });
    const styleCvStore = useStyleCvStore();
    const companyName = ref<string>(import.meta.env.VITE_APP_NAME_SHORT);
    const sidebarOpen = ref<boolean>(true);
    const isMinimized = ref<boolean>(false);
    
    const changeTheme = () => {
        alert('changeTheme');
    }
    const openModalColors = () => {
        isOpenModalColors.value = true
    }
    const changeFont = (font: string) => {
        styleCvStore.setFontFamily(font);
    }
</script>

<template>
    <!-- Sidebar -->
    <aside
        v-if="sidebarOpen"
        :class="[
            'bg-surface m-4 rounded-2xl border border-primary-border sticky top-4 h-fit min-h-[calc(100vh-2rem)] shrink-0 z-40 flex flex-col transition-all duration-300',
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
                textColor="text-selected" 
                textSize="text-2xl" 
                icon="fa-solid fa-compress"
                @button-clicked="isMinimized = true" 
            />
            <ButtonIcon 
                v-else
                textColor="text-selected" 
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
                        :extraClassesLink="['w-full group gap-2 rounded-lg py-2 font-medium transition-all', isMinimized ? 'justify-center' : 'px-2']"
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
                        :extraClassesButton="['w-full group gap-2 rounded-lg py-2 font-medium transition-all', isMinimized ? 'justify-center' : 'px-2']"
                        textColor="text-primary"
                        textSize="text-md"
                        icon="fa-solid fa-circle-half-stroke"
                        @click="changeTheme()"
                    >
                        <template #text>
                            <span v-if="!isMinimized">Tema</span>
                        </template>
                    </ButtonIconText>
                </li>
                <li>   
                    <ButtonIconText
                        :extraClassesButton="['w-full group gap-2 rounded-lg py-2 font-medium transition-all', isMinimized ? 'justify-center' : 'px-2']"
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
                        :extraClassesButton="['w-full group gap-2 rounded-lg py-2 font-medium transition-all', isMinimized ? 'justify-center' : 'px-2']"
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
                    <ButtonIconText
                        :extraClassesButton="['w-full group gap-2 rounded-lg py-2 font-medium transition-all', isMinimized ? 'justify-center' : 'px-2']"
                        textColor="text-primary"
                        textSize="text-md"
                        icon="fa-solid fa-list"
                        @click="openModalSections()"
                    >
                        <template #text>
                            <span v-if="!isMinimized">Secciones</span>
                        </template>
                    </ButtonIconText>
                </li>
                <li>   
                    <ButtonIconText
                        :extraClassesButton="['w-full group gap-2 rounded-lg py-2 font-medium transition-all', isMinimized ? 'justify-center' : 'px-2']"
                        textColor="text-primary"
                        textSize="text-md"
                        icon="fa-solid fa-file-pdf"
                    >
                        <template #text>
                            <span v-if="!isMinimized">Descargar</span>
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