<script setup>
defineProps({
    value: Number,
    prefix: {
        type: String,
        default: 'Rp. '
    },
    precision: {
        type: Number,
        default: 3
    }
})
</script>

<template>
    <b>{{ prefix + Number.parseFloat(value).toFixed(precision) }}</b>
</template>