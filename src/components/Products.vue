<script setup>
import { ref, defineEmits } from 'vue'
import ProductList from './ProductList.vue'
import PriceSlider from './PriceSlider.vue'
import Checkout from './Checkout.vue'
import Navbar from './Navbar.vue'

defineProps([
    'cart',
    'cartQty',
    'cartTotal',
    'products',
    'status'
])

let maks = ref(100)

const emit = defineEmits(['toggle', 'add', 'delete'])

function toggleSlider() {
    emit('toggle')
}

function addItem(item) {
    emit('add', item)
}

function deleteItem(index) {
    emit('delete', index)
}

</script>

<template>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @toggle-slide="toggleSlider" @delete-item="deleteItem" />
    <div class="container">
        <price-slider v-model:maks="maks" :slider="status" />
        <div class="accordion mt-2" id="accordionEx">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Checkout Pesanan Anda
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionEx">
                    <div class="accordion-body">
                        <checkout :cart="cart" :cartTotal="cartTotal" @add-item="addItem" @delete-item="deleteItem" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        Belanja Sekarang
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionEx">
                    <div class="accordion-body">
                        <product-list :products="products" :maks="maks" @add-item="addItem" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>