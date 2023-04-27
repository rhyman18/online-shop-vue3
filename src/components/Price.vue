<script setup>
defineProps({
    value: Number,
    satuan: {
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
    <b>{{ this.satuan + Number.parseFloat(this.value).toFixed(this.precision) }}</b>
</template>