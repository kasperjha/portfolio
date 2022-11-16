<script setup>
defineProps({
    link:String,
})

</script>

<template>
    <NuxtLink :to="link" class="hover:text-orange-700 underline">
        <slot/>
    </NuxtLink>
</template>