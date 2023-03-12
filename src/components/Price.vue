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
    <b>{{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}</b>
</template>