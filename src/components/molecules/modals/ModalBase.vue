<script setup lang="ts">
    import ButtonBase from '@/components/atoms/buttons/ButtonBase.vue';
    import { ref, watch, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { onClickOutside } from '@vueuse/core';

    const router = useRouter();
    const isOpen = defineModel<boolean>({ default: false });
    const dialogRef = ref<HTMLDialogElement | null>(null);
    const modalContentRef = ref<HTMLElement | null>(null);
    const props = withDefaults(defineProps<{
        modalSize?: string
        modalId: string
        title: string
        titleSize?: string
        textColor?: string
        urlRedirect?: string;
    }>(), {
        modalSize: 'w-full',
        modalId: 'modal',
        title: 'Title',
        titleSize: 'text-lg',
        textColor: 'text-emphasis',
        urlRedirect: ''
    })

    const emit = defineEmits(['close']);

    watch(isOpen, (newValue) => {
        if (!dialogRef.value) return;
        if (newValue) {
            if (!dialogRef.value.open) {
                dialogRef.value.showModal();
            }
        } else {
            if (dialogRef.value.open) {
                dialogRef.value.close();
            }
        }
    });

    const close = () => {
        isOpen.value = false;
        if (props.urlRedirect) {
            router.push(props.urlRedirect);
        }
        emit('close');
    };

    onClickOutside(modalContentRef, () => {
        if (isOpen.value) {
            close();
        }
    });

    onMounted(() => {
        if (isOpen.value && dialogRef.value && !dialogRef.value.open) {
            dialogRef.value.showModal();
        }
    });
</script>

<template>
    <Teleport to="body">
        <dialog
            ref="dialogRef"
            :id="modalId"
            @cancel.prevent
            @close="close"
            :class="[modalSize, 'backdrop:bg-black/60 bg-transparent border-0 outline-none p-0 m-auto transition-all duration-300 sm:h-full md:h-auto']"
        >
            <div ref="modalContentRef" class="bg-selected border border-border text-black px-3 py-1.5 rounded-sm flex flex-col">
                <!-- Header -->
                <div id="modal-header" class="flex items-center justify-between mb-2">
                    <span :class="[titleSize, textColor, 'font-medium']">{{ title }}</span>
                </div>
                <!-- Content -->
                <div id="modal-content" class="mb-3">
                    <slot name="modal-content"></slot>
                </div>
                <!-- Footer -->
                <div id="modal-footer" class="flex justify-end gap-1">
                    <slot name="modal-footer"></slot>
                    <ButtonBase 
                        extraClassesButton="w-auto text-sm border border-emphasis rounded-sm px-2 pb-0.2"
                        buttonColor="bg-emphasis"
                        textColor="text-white"
                        @button-clicked="close()"
                    >
                        <template #button-content>
                            <span>Cerrar</span>
                        </template>
                    </ButtonBase>
                </div>
            </div>
        </dialog>
    </Teleport>
</template>