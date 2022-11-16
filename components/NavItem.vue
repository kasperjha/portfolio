<template>
    <NuxtLink 
        :to="destination" 
        class="hover:underline" 
        :class="{ 'text-gray-500':isSelected, 'disabled':isSelected, 'cursor-default':isSelected, 'pointer-events-none':isSelected }"
    >
        {{name}}<svg v-if="external" class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    </NuxtLink>
</template>

<script setup>
    const route = useRoute();

    var isSelected = computed(() => {
        return route.name == props.name;
    }) 
    const props = defineProps({
        name: String,
        destination: String,
        external: Boolean
    })
</script>