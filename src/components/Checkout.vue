<script setup>
import Price from './Price.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps(['cart', 'cartTotal'])
</script>

<template>
    <div class="container py-2">
        <div v-if="cart.length">
            <table class="table table-hover mb-0">
                <caption class="text-end fs-5">
                    <b>Total :</b>
                    <price class="d-block text-success fw-light" :value="Number(cartTotal)" />
                </caption>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Item</th>
                        <th scope="col" class="text-center">Qty</th>
                        <th scope="col" class="text-end">Price</th>
                        <th scope="col" class="text-end">Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in cart" :key="item.product.id">
                        <td class="text-center">
                            <div class="btn-group">
                                <button @click="$emit('add-item', item.product)" class="btn btn-info">
                                    <font-awesome-icon icon="fa-plus" />
                                </button>
                                <button @click="$emit('delete-item', index)" class="btn btn-outline-info">
                                    <font-awesome-icon icon="fa-minus" />
                                </button>
                            </div>
                        </td>
                        <th scope="row">{{ item.product.name }}</th>
                        <th class="text-center">{{ item.qty }}</th>
                        <th class="text-end">
                            <price :value="Number(item.product.price)" />
                        </th>
                        <th class="text-end">
                            <price :value="Number(item.product.price * item.qty)" />
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="alert alert-danger mb-0" role="alert" v-else>
            Anda belum Memasukan Keranjang, Silahkan Belanja Terlebih Dahulu!
        </div>
        <!-- <div class="d-flex justify-content-center mt-5">
            <router-link to="/" class="btn btn-info">Kembali</router-link>
        </div> -->
    </div>
</template>