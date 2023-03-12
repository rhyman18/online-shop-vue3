<script setup>
import Price from './Price.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps(['cart', 'cartQty', 'cartTotal'])
</script>

<template>
    <nav class="navbar bg-black py-2 px-5 sticky-top" data-bs-theme="dark">
        <div class="container-fluid">
            <h1 class="fs-2 fw-bold">My Shop</h1>
            <div class="d-flex">
                <button class="btn btn-primary position-relative me-2" @click="$emit('toggle-slide')">
                    <font-awesome-icon icon="fa-arrow-up-wide-short" />
                </button>
                <div class="dropdown">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <font-awesome-icon icon="cart-shopping" />
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            v-show="cart.length">
                            {{ cartQty }}
                            <span class="visually-hidden">unshopping</span>
                        </span>
                    </button>
                    <ul v-show="cart.length" class="dropdown-menu dropdown-menu-end">
                        <li v-for="(item, index) in cart" :key="item.product.id">
                            <div class="dropdown-item d-flex justify-content-between">
                                <a href="#" class="text-decoration-none me-3">{{ item.product.name }}</a>
                                <span>
                                    <span>{{ item.qty }} * </span>
                                    <price :value="Number(item.product.price * item.qty)" />
                                    <button class="btn btn-primary btn-sm py-0 ms-2 text-align-top"
                                        @click.stop="$emit('delete-item', index)">
                                        <font-awesome-icon icon="fa-minus" />
                                    </button>
                                </span>
                            </div>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <a href="#" class="dropdown-item d-flex justify-content-between">
                                <span class="me-2">Total Belanja :</span>
                                <price :value="Number(cartTotal)" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>