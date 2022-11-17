<template>
  <li class="basket-product">
    <div class="basket-product__preview">
      <div class="basket-product__image">
        <img :src="product.img" :alt="product.title" />
      </div>
      <div class="basket-product__info">
        <h4 class="basket-product__title">{{ product.title }}</h4>
        <p class="basket-product__specs">{{ product.specs }}</p>
        <p class="basket-product__article">{{ product.article }}</p>
      </div>
    </div>

    <div class="basket-product__counter counter">
      <button
        class="counter__part counter__part_decrement"
        :disabled="product.quantity <= 1"
        @click="onChange('decrement')"
      ></button>
      <span class="counter__part">{{ product.quantity }}</span>
      <button
        class="counter__part counter__part_increment"
        @click="onChange('increment')"
      ></button>
      <span v-show="product.quantity > 1" class="counter__unit-price"
        >{{ prettifyUnitPrice }} ₽/шт.</span
      >
    </div>
    <span class="basket-product__total">{{ prettifyTotal }} ₽</span>
    <button
      class="basket-product__close"
      @click="onChange('removeProduct')"
    ></button>
  </li>
</template>

<script>
import priceToString from '../utils/priceToString'
export default {
  props: {
    product: Object
  },
  computed: {
    total () {
      return this.product.price * this.product.quantity
    },
    prettifyUnitPrice () {
      return priceToString(this.product.price)
    },
    prettifyTotal () {
      return priceToString(this.total)
    }
  },
  methods: {
    priceToString (price) {},
    onChange (action) {
      this.$store.commit(action, this.product.id)
    }
  }
}
</script>

<style lang="scss">
.basket-product {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 55px 20px 15px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 25px;
    border-bottom: solid 1px #c4c4c4;
  }

  // .basket-product__preview

  &__preview {
    display: flex;
  }

  // .basket-product__image

  &__image {
    width: 100px;
    height: 100px;
    margin-right: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // .basket-product__info

  &__info {
    max-width: 265px;
  }

  // .basket-product__title

  &__title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 6px;
    line-height: 1.5em;
  }

  // .basket-product__specs

  &__specs {
    font-size: 12px;
    color: #2c3242;
    margin-bottom: 7px;
    line-height: 1.5em;
  }

  // .basket-product__article

  &__article {
    font-size: 14px;
    color: #797b86;
    line-height: 1.5em;
  }

  // .basket-product__counter

  &__counter {
    display: flex;
    gap: 2px;
    position: relative;
  }

  // .basket-product__total

  &__total {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
  }

  // .basket-product__close

  &__close {
    padding: 10px;
    position: absolute;
    top: -8px;
    right: 0;
    background-color: transparent;
    transition: transform 0.3s linear;

    &:before,
    &:after {
      position: absolute;
      content: '';
      height: 12px;
      width: 2px;
      background-color: #2c3242;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:hover {
      transform: scale(1.2);
    }
  }
}
.counter {
  // .counter__part

  &__part {
    background-color: #f6f8fa;
    width: 34px;
    height: 34px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 34px;
    color: #1f2432;
    position: relative;
    transition: background-color 0.3s ease;

    &_decrement {
      border-radius: 4px 0 0 4px;

      &:before {
        content: '';
        width: 8px;
        height: 2px;
        background-color: #33374e;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
      }
      &:hover {
        background-color: #e2e2e2;
      }
    }
    &_increment {
      border-radius: 0 4px 4px 0;

      &:before {
        content: '';
        width: 8px;
        height: 2px;
        background-color: #33374e;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
      }

      &:after {
        content: '';
        width: 2px;
        height: 8px;
        background-color: #33374e;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -3px);
      }

      &:hover {
        background-color: #e2e2e2;
      }
    }
  }

  // .counter__unit-price

  &__unit-price {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    text-align: center;
  }
}
</style>
