<script setup>
import { defineEmits } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './Navbar.vue'
import Price from './Price.vue'

defineProps([
    'cart',
    'cartQty',
    'cartTotal',
    'products',
    'status'
])

const route = useRoute()
const id = route.params.id

const emit = defineEmits(['toggle', 'add', 'delete'])

function deleteItem(index) {
    emit('delete', index)
}

</script>

<template>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @delete-item="deleteItem" />
    <div class="container py-3">
        <div class="card p-lg-5 p-1" v-for="item in products" v-show="item.id === id">
            <img :src="item.image" :alt="item.image_title" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-primary">{{ item.name }}</h5>
                <p class="card-text" v-html="item.description"></p>
                <p class="card-text">
                    <price :value="Number(item.price)" />
                </p>
                <div class="d-flex justify-content-center my-3">
                    <button class="btn btn-primary mx-2" @click.stop="$emit('add', item)">Beli Sekarang</button>
                    <router-link to="/" class="btn btn-primary mx-2">Kembali</router-link>
                </div>
            </div>
        </div>
    </div>
</template>