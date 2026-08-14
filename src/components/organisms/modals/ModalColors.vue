<script setup lang="ts">    
    import ModalBase from '@/components/molecules/modals/ModalBase.vue';
    import ButtonBase from '@/components/atoms/buttons/ButtonBase.vue';
    import { useStyleCvStore } from '@/stores/useStyleCvStore'

    const styleCvStore = useStyleCvStore()
    const isOpen = defineModel<boolean>({ default: false });
    const colors = [
        { name: 'Rojo', colorPrimary: 'red-950', colorSecondary: 'red-900' },
        { name: 'Naranja', colorPrimary: 'orange-950', colorSecondary: 'orange-900' },
        { name: 'Ambar', colorPrimary: 'amber-950', colorSecondary: 'amber-900' },
        { name: 'Amarillo', colorPrimary: 'yellow-950', colorSecondary: 'yellow-900' },
        { name: 'Lima', colorPrimary: 'lime-950', colorSecondary: 'lime-900' },
        { name: 'Esmeralda', colorPrimary: 'emerald-950', colorSecondary: 'emerald-900' },
        { name: 'Verde', colorPrimary: 'green-950', colorSecondary: 'green-900' },
        { name: 'Turquesa', colorPrimary: 'teal-950', colorSecondary: 'teal-900' },
        { name: 'Cian', colorPrimary: 'cyan-950', colorSecondary: 'cyan-900' },
        { name: 'Cielo', colorPrimary: 'sky-950', colorSecondary: 'sky-900' },
        { name: 'Azul', colorPrimary: 'blue-950', colorSecondary: 'blue-900' },
        { name: 'Indigo', colorPrimary: 'indigo-950', colorSecondary: 'indigo-900' },
        { name: 'Violeta', colorPrimary: 'violet-950', colorSecondary: 'violet-900' },
        { name: 'Rosa', colorPrimary: 'pink-950', colorSecondary: 'pink-900' },
        { name: 'Morado', colorPrimary: 'purple-950', colorSecondary: 'purple-900' },
        { name: 'Fiusha', colorPrimary: 'fuchsia-950', colorSecondary: 'fuchsia-900' },
        { name: 'Rosa', colorPrimary: 'pink-950', colorSecondary: 'pink-900' },
        { name: 'Rosado', colorPrimary: 'rose-950', colorSecondary: 'rose-900' },
        { name: 'Slate', colorPrimary: 'slate-950', colorSecondary: 'slate-900' },
        { name: 'Gris', colorPrimary: 'gray-950', colorSecondary: 'gray-900' },
        { name: 'Zinc', colorPrimary: 'zinc-950', colorSecondary: 'zinc-900' },
        { name: 'Carbón', colorPrimary: 'neutral-950', colorSecondary: 'neutral-900' },
        { name: 'Piedra', colorPrimary: 'stone-950', colorSecondary: 'stone-900' },
        { name: 'Malva', colorPrimary: 'mauve-950', colorSecondary: 'mauve-900' },
        { name: 'Niebla', colorPrimary: 'mist-950', colorSecondary: 'mist-900' },
        { name: 'Olivo', colorPrimary: 'olive-950', colorSecondary: 'olive-900' },
    ]
    const props = withDefaults(defineProps<{
        modalId?: string
    }>(), {
        modalId: 'modal-colors'
    })

    const selectColor = (colorPrimary: string, colorSecondary: string) => { 
        styleCvStore.setPrimaryColor(colorPrimary)
        styleCvStore.setSecondaryColor(colorSecondary)
    }

    const closeModal = () => {
        isOpen.value = false;
    }
</script>

<template>
    <ModalBase
        v-model="isOpen"
        :modalId="modalId"
        modalSize="w-full sm:w-1/2 lg:w-1/3"
        title="Paleta de colores"
        titleSize="text-xl"
        textColor="text-emphasis"
        @close="closeModal"
    >
        <template #modal-content>
            <p class="text-md leading-none text-primary text-justify mb-3">Seleccione uno de los colores de la paleta.</p>
            <div class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <ButtonBase 
                    v-for="(color, index) in colors" 
                    :key="index"
                    :id="`btn-color-${index}`"
                    :extraClassesButton="'w-full rounded-lg border border-white px-1 pt-0.5 flex items-center justify-center'"
                    :buttonColor="`bg-${color.colorPrimary}`"
                    :textColor="'text-white'"
                    @click.prevent="selectColor(color.colorPrimary, color.colorSecondary)"
                >
                    <template #button-content>
                        <span class="text-xs">{{ color.name }}</span>
                    </template>
                </ButtonBase>
            </div>
        </template>
    </ModalBase>
</template>