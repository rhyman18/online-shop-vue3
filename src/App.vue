<script setup>
import { computed, ref } from 'vue'

let products = ref([])
let cart = ref([])
let status = ref(false)

fetch('https://hplussport.com/api/products/order/price')
  .then((res) => res.json())
  .then((data) => {
    products.value = data
  })

function addToCart(added) {
  let productIndex
  let productExist = cart.value.filter(function (item, index) {
    if (item.product.id == Number(added.id)) {
      productIndex = index
      return true
    } else {
      return false
    }
  })

  if (productExist.length) {
    cart.value[productIndex].qty++
  } else {
    cart.value.push({ product: added, qty: 1 })
  }
}

function deleteCart(del) {
  if (cart.value[del].qty > 1)
    cart.value[del].qty--
  else
    cart.value.splice(del, 1)
}

function slider() {
  status.value = !status.value
}

const cartTotal = computed(() => {
  let sum = 0
  for (let key in cart.value) {
    sum += (cart.value[key].product.price * cart.value[key].qty)
  }
  return sum
})

const cartQty = computed(() => {
  let qty = 0
  for (let key in cart.value) {
    qty += cart.value[key].qty
  }
  return qty
})
</script>

<template>
  <router-view :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" :products="products" :status="status"
    @toggle="slider" @add="addToCart" @delete="deleteCart" />
</template>