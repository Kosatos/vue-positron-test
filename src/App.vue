<template>
  <header class="header">
    <div class="container header__container">
      <the-basket-preview
        :quantity="$store.state.basket.products.length"
        :total="$store.getters.totalPrice"
      ></the-basket-preview>
    </div>
  </header>
  <main class="main">
    <div class="container main__container">
      <the-basket :basket="$store.state.basket"></the-basket>
      <div class="main__slider">
        <the-products-slider></the-products-slider>
      </div>
    </div>
  </main>
</template>

<script>
import TheBasketPreview from './components/TheBasketPreview.vue'
import TheBasket from './components/TheBasket.vue'
import TheProductsSlider from './components/TheProductsSlider.vue'

export default {
  name: 'App',
  beforeMount () {
    const initBasket = this.$store.state.products.slice(0, 3)
    initBasket.forEach((p) => this.$store.commit('addProduct', p))
  },

  components: {
    TheBasketPreview,
    TheBasket,
    TheProductsSlider
  }
}
</script>

<style lang="scss">
.header {
  &__container {
    display: flex;
    justify-content: flex-end;
  }
}
.main {
  padding-bottom: 115px;
}
</style>
