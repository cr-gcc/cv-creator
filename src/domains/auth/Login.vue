<script setup lang="ts">
    import LabelInput from '@/components/molecules/inputs/LabelInput.vue'
    import ButtonBase from '@/components/atoms/buttons/ButtonBase.vue'
    import ProgressBar from '@/components/atoms/loaders/ProgressBar.vue'

    const mainBanner = '/images/banners/Login_banner.png'
</script>

<template>
    <div class="h-screen w-full bg-cover bg-no-repeat bg-center" :style="`background-image: url('${mainBanner}');`">
        <div class="w-full h-screen flex items-center justify-center">
            <div class="bg-surface m-4 p-8 rounded-2xl border-2 border-primary-border w-full max-w-1/4 flex flex-col opacity-85">
                <div class="text-center mb-4">
                    <span class="text-primary-border text-4xl leading-none">Inicias Sesión</span>
                </div>
                <form class="flex flex-col gap-3 mb-2" @submit.prevent>
                    <div class="flex flex-col">
                        <LabelInput 
                            :inputId="'username'"
                            :placeholder="'Usuario'"
                            :type="'text'"
                            :textSize="'text-sm'"
                            :inputWidth="'w-full'"
                            py="py-0.5"
                        />
                    </div>
                    <div class="flex flex-col">
                        <LabelInput 
                            :inputId="'password'"
                            :placeholder="'Contraseña'"
                            :type="'password'"
                            :textSize="'text-sm'"
                            :inputWidth="'w-full'"
                            py="py-0.5"
                        />
                    </div>
                    <div class="flex">
                        <ButtonBase 
                            extraClassesButton="w-full flex justify-center items-center font-semibold rounded-lg py-1 px-2 transition-colors cursor-pointer hover:bg-primary/80"
                            buttonColor="bg-primary"
                            textColor="text-white"
                            textSize="text-sm"
                        >
                            <template #button-content>
                                <span>Ingresar</span>
                            </template>
                        </ButtonBase>
                    </div>
                </form>
                <div>
                    <ProgressBar />
                </div>
            </div>
        </div>
    </div>
</template>
