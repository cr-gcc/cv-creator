<script setup lang="ts">
    import HeaderThreeBasic from '@/components/atoms/titles/HeaderThreeBasic.vue'
    import Input from '@/components/atoms/inputs/Input.vue';
    import TextBox from '@/components/atoms/inputs/TextBox.vue';
    import { info } from '@/data/info';
    import { companies } from '@/data/companies';
</script>

<template>
    <div class="w-full mb-2">
        <h1 class="text-emphasis text-5xl font-semibold leading-none">Secciones</h1>
    </div>
    <div class="w-full mb-4">
        <div class="bg-surface p-4 border-2 border-background rounded-xl">
            <div class="grid grid-cols-6 gap-2">
                <div class="col-span-6">
                    <HeaderThreeBasic name="Datos generales" textSize="text-lg" textColor="text-primary" />
                </div>
                <div class="col-span-3">
                    <Input 
                        :value="info.name"
                        inputId="sec-name"
                        placeholder="Nombre"
                        type="text"
                        textSize="text-sm"
                        inputWidth="w-full"
                        py="py-0.5"
                        mb="mb-1"
                    />
                </div>
                <div class="col-span-3">
                    <Input 
                        :value="info.role"
                        inputId="sec-role"
                        placeholder="Rol"
                        type="text"
                        textSize="text-sm"
                        inputWidth="w-full"
                        py="py-0.5"
                        mb="mb-1"
                    />
                </div>
                <div class="col-span-2">
                    <Input 
                        :value="info.personal[0].data"
                        inputId="sec-email"
                        placeholder="Email"
                        type="email"
                        textSize="text-sm"
                        inputWidth="w-full"
                        py="py-0.5"
                        mb="mb-1"
                    />
                </div>
                <div class="col-span-2">
                    <Input 
                        :value="info.personal[1].data"
                        inputId="sec-phone"
                        placeholder="Telefono"
                        type="tel"
                        textSize="text-sm"
                        inputWidth="w-full"
                        py="py-0.5"
                        mb="mb-1"
                    />
                </div>
                <div class="col-span-2">
                    <Input 
                        :value="info.personal[2].data"
                        inputId="sec-location"
                        placeholder="Location"
                        type="text"
                        textSize="text-sm"
                        inputWidth="w-full"
                        py="py-0.5"
                        mb="mb-1"
                    />
                </div>
                <div class="col-span-2">
                    <Input 
                        :value="info.repository"
                        inputId="sec-repository"
                        placeholder="Repositorio"
                        type="text"
                        textSize="text-sm"
                        inputWidth="w-full"
                        py="py-0.5"
                        mb="mb-1"
                    />
                </div>
                <div class="col-span-2">
                    <Input 
                        :value="info.certificates"
                        inputId="sec-certificates"
                        placeholder="Certificados"
                        type="text"
                        textSize="text-sm"
                        inputWidth="w-full"
                        py="py-0.5"
                        mb="mb-1"
                    />
                </div>
                <div class="col-span-2">
                    <Input 
                        :value="info.additional"
                        inputId="sec-additional"
                        placeholder="Información adicional"
                        type="text"
                        textSize="text-sm"
                        inputWidth="w-full"
                        py="py-0.5"
                        mb="mb-1"
                    />
                </div>
                <div class="col-span-3">
                    <TextBox 
                        :value="info.profile"
                        inputId="sec-profile"
                        placeholder="Perfil profesional"
                        textSize="text-sm"
                        inputWidth="w-full"
                        py="py-0.5"
                    />
                </div>
                <div class="col-span-3">
                    <TextBox 
                        :value="info.education"
                        inputId="sec-education"
                        placeholder="Formación Académica"
                        textSize="text-sm"
                        inputWidth="w-full"
                        py="py-0.5"
                    />
                </div>
                <div class="col-span-6">
                    <HeaderThreeBasic name="Compañias" textSize="text-lg" textColor="text-primary" />
                </div>
                <div v-for="(company, index) in companies" :key="index" class="col-span-6">
                    <div class="grid grid-cols-4 gap-2">
                        <div>
                            <Input 
                                :value="company.name"
                                :inputId="`sec-company-name-${index}`"
                                placeholder="Empresa"
                                type="text"
                                textSize="text-sm"
                                inputWidth="w-full"
                                py="py-0.5"
                                mb="mb-1"
                            />
                        </div>
                        <div>
                            <Input 
                                :value="company.range"
                                :inputId="`sec-company-range-${index}`"
                                placeholder="Fechas"
                                type="text"
                                textSize="text-sm"
                                inputWidth="w-full"
                                py="py-0.5"
                                mb="mb-1"
                            />
                        </div>
                        <div>
                            <Input 
                                :value="company.role"
                                :inputId="`sec-company-role-${index}`"
                                placeholder="Rol"
                                type="text"
                                textSize="text-sm"
                                inputWidth="w-full"
                                py="py-0.5"
                                mb="mb-1"
                            />
                        </div>
                        <div>
                            <Input 
                                :value="company.type"
                                :inputId="`sec-company-type-${index}`"
                                placeholder="Tipo"
                                type="text"
                                textSize="text-sm"
                                inputWidth="w-full"
                                py="py-0.5"
                                mb="mb-1"
                            />
                        </div>
                        <div class="col-span-4">
                            <TextBox 
                                :value="company.description"
                                :inputId="`sec-company-description-${index}`"
                                placeholder="Descripción"
                                textSize="text-sm"
                                inputWidth="w-full"
                                py="py-0.5"
                            />
                        </div>
                        <div class="col-span-4"></div>  
                    </div>
                </div>
                <div class="col-span-6">
                    <HeaderThreeBasic name="Habilidades" textSize="text-lg" textColor="text-primary" />
                </div>
                 <div v-for="(item, index) in info.skills" :key="index" class="col-span-6">
                    <HeaderThreeBasic :name="item.name" textSize="text-md" textColor="text-emphasis" />
                    <div class="grid grid-cols-4 gap-2">
                        <div v-for="(skill, index) in item.description" :key="index">
                            <Input 
                                :value="skill"
                                :inputId="`sec-skill-name-${index}`"
                                placeholder="Habilidad"
                                type="text"
                                textSize="text-sm"
                                inputWidth="w-full"
                                py="py-0.5"
                                mb="mb-1"
                            />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>