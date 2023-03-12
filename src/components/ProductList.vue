<script setup>
import Price from './Price.vue'

defineProps(['products', 'maks'])

function before(e) {
    e.className = 'd-none';
}

function enter(e) {
    var delay = e.dataset.index * 100
    setTimeout(() => {
        e.className = 'col-sm-12 mb-3 animate__animated animate__backInRight'
    }, delay)
}

function leave(e) {
    var delay = e.dataset.index * 100
    setTimeout(() => {
        e.className = 'col-sm-12 mb-3 animate__animated animate__backOutRight'
    }, delay)
}

</script>

<template>
    <transition-group class="row" name="animasi" tag="div" @before-enter="before" @enter="enter" @leave="leave">
        <div v-for="(item, index) in products" v-show="item.price <= Number(maks)" :key="item.id" :data-index="index">
            <div class="card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="item.image" :alt="item.image_title" class="card-img-top">
                    </div>
                    <div class="col-md-8 d-flex align-items-center">
                        <div class="card-body">
                            <h5 class="card-title text-primary">
                                <router-link :to="{ name: 'Detail', params: { id: item.id } }" class="text-decoration-none">
                                    {{ item.name }}
                                </router-link>
                            </h5>
                            <p class="card-text" v-html="item.description"></p>
                            <div class="d-flex justify-content-between align-items-center mt-lg-5 pe-lg-5">
                                <price :value="Number(item.price)" />
                                <button class="btn btn-primary" @click.stop="$emit('add-item', item)">Beli Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition-group>
</template>