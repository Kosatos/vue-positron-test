<template>
  <div class="product-card">
    <div class="product-card__image">
      <img :src="product.img" :alt="product.title" />
    </div>
    <div class="product-card__info">
      <h4 class="product-card__title">{{ product.shortTitle }}</h4>
      <p class="product-card__description">{{ product.description }}</p>
    </div>
    <div class="product-card__footer">
      <div class="product-card__price product-price">
        <p class="product-price__ruble">
          {{ prettifyMinRub }} - {{ prettifyMaxRub }} ₽
        </p>
        <p class="product-price__euro">
          {{ prettifyMinEu }} - {{ prettifyMaxEu }} €
        </p>
      </div>
      <button class="product-card__btn">Подробнее</button>
    </div>
  </div>
</template>

<script>
import priceToString from '../utils/priceToString'
export default {
  props: {
    product: Object
  },
  computed: {
    prettifyMinRub () {
      return priceToString(this.product.minPriceInRubles)
    },
    prettifyMaxRub () {
      return priceToString(this.product.maxPriceInRubles)
    },
    prettifyMinEu () {
      return priceToString(this.product.minPriceInEuro.toFixed(2))
    },
    prettifyMaxEu () {
      return priceToString(this.product.maxPriceInEuro.toFixed(2))
    }
  }
}
</script>

<style lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  max-width: 305px;
  height: 563px;
  padding: 25px;
  background-color: #f6f8fa;
  border-radius: 5px;
  // .product-card__image

  &__image {
    max-width: 245px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  // .product-card__info

  &__info {
    margin-top: 5px;
    text-align: left;
  }

  // .product-card__title

  &__title {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2em;
  }

  // .product-card__description

  &__description {
    font-size: 14px;
    margin-top: 10px;
    line-height: 1.5em;
  }

  // .product-card__price

  &__footer {
    margin-top: auto;
  }

  // .product-card__price

  &__price {
    margin-top: 10px;
    text-align: left;
  }

  // .product-card__btn

  &__btn {
    margin-top: 20px;
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 4px;
    background-color: #0069b4;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    transition: background-color 0.4s ease;

    &:hover {
      background-color: #004170;
    }
  }
}
.product-price {
  // .product-price__ruble

  &__ruble {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3em;
  }

  // .product-price__euro

  &__euro {
    font-size: 16px;
    color: #797b86;
    margin-top: 3px;
    line-height: 1.5em;
  }
}
</style>
