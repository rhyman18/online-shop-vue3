<script setup>

defineProps(['slider', 'maks'])

</script>

<template>
    <transition name="slider">
        <div class="mt-2" v-show="slider">
            <div class="d-flex bg-secondary rounded p-2 align-items-center">
                <label for="" class="fw-bold text-white mr-2">Price</label>
                <input type="number" class="form-control mx-2" style="width: 75px; text-align: center;" min="0" max="200"
                    :value="Number(maks)" @change="(event) => $emit('update:maks', event.target.value)">
                <input type="range" class="form-range" min="0" max="200" :value="Number(maks)"
                    @input="(event) => $emit('update:maks', event.target.value)">
            </div>
        </div>
    </transition>
</template>

<style>
.slider-enter-from,
.slider-leave-to {
    opacity: 0;
}

.slider-enter-active,
.slider-leave-active {
    transition: all 1s ease-in-out;
}
</style>