<script setup>
defineProps({
    value: Number,
})
</script>

<template>
    <b>Rp. {{ Number.parseFloat(this.value).toFixed(3) }}</b>
</template>