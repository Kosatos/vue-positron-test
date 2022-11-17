<template>
  <ul>
    <app-basket-product
      v-for="product in products"
      :product="product"
      :key="product.id"
    ></app-basket-product>
  </ul>
</template>

<script>
import AppBasketProduct from './AppBasketProduct.vue'
export default {
  props: {
    products: Array
  },
  components: {
    AppBasketProduct
  }
}
</script>

<style></style>
