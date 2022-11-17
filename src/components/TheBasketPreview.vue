<template>
  <div class="basket-preview">
    <div class="basket-preview__icon">
      <img src="../assets/icons/basket-icon.png" alt="basket icon" />
    </div>
    <div class="basket-preview__info">
      <h5 class="basket-preview__title">Ваша корзина</h5>
      <p class="basket-preview__quantity">{{ quantity }} {{ declension }}</p>
      <p class="basket-preview__price">{{ totalToString }} ₽</p>
    </div>
  </div>
</template>

<script>
import priceToString from '../utils/priceToString'
export default {
  props: {
    quantity: Number,
    total: Number
  },
  computed: {
    totalToString () {
      return priceToString(this.total)
    },
    declension () {
      const productsCount = this.$store.state.basket.products.length
      if (productsCount === 1) {
        return 'товар'
      } else if (
        productsCount === 2 ||
        productsCount === 3 ||
        productsCount === 4
      ) {
        return 'товара'
      } else {
        return 'товаров'
      }
    }
  }
}
</script>

<style lang="scss">
.basket-preview {
  display: flex;
  align-items: center;
  padding-top: 65px;
  padding-bottom: 25px;

  &__icon {
    width: 32px;
    height: 32px;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__title {
    font-size: 14px;
    line-height: 1.5em;
  }

  &__quantity {
    font-size: 12px;
    color: #797b86;
    line-height: 1.5em;
  }

  &__price {
    font-size: 12px;
    line-height: 1.5em;
  }
}
</style>
