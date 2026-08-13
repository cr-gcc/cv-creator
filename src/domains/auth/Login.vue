<script setup lang="ts">
    import ProgressBar from '@/components/atoms/loaders/ProgressBar.vue'

    const mainBanner = '/images/banners/Login_banner.png'
</script>

<template>
    <div class="h-screen w-full bg-cover bg-no-repeat bg-center" :style="`background-image: url('${mainBanner}');`">
        <div class="w-full h-screen flex items-center justify-center">
            <div class="bg-surface m-4 p-8 rounded-2xl border-2 border-primary-border w-full max-w-1/4 flex flex-col opacity-85">
                <!-- Header -->
                <div class="text-center mb-4">
                    <span class="text-primary-border text-4xl leading-none">Inicias Sesión</span>
                </div>
                
                <!-- Form -->
                <form class="flex flex-col gap-4 mb-2" @submit.prevent>
                    <div class="flex flex-col">
                        <label for="username" class="text-primary text-md font-semibold">Usuario</label>
                        <input 
                            id="username" 
                            type="text" 
                            placeholder="Ingresa tu usuario"
                            class="bg-background border border-primary rounded-lg px-2 py-1 text-emphasis font-semibold text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        >
                    </div>

                    <div class="flex flex-col">
                        <label for="password" class="text-primary text-md font-semibold">Contraseña</label>
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="Ingresa tu contraseña"
                            class="bg-background border border-primary rounded-lg px-2 py-1 text-emphasis font-semibold text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        >
                    </div>

                    <button 
                        type="submit" 
                        class="w-full bg-primary text-white font-semibold rounded-lg px-2 py-1 transition-colors cursor-pointer hover:bg-primary/80"
                    >
                        Ingresar
                    </button>
                </form>

                <!-- Progress Bar -->
                <div>
                    <ProgressBar />
                </div>
            </div>
        </div>
    </div>
</template>
