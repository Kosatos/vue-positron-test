<template>
  <div class="basket-total">
    <h3 class="basket-total__title">Итого</h3>
    <ul class="basket-total__list">
      <li class="basket-total__item item-total">
        <h5 class="item-total__title">Сумма заказа</h5>
        <span class="item-total__value">{{ prettifyTotal }} ₽</span>
      </li>
      <li class="basket-total__item item-total">
        <h5 class="item-total__title">Количество</h5>
        <span class="item-total__value">{{ quantity }} шт</span>
      </li>
      <li class="basket-total__item item-total">
        <h5 class="item-total__title">Установка</h5>
        <span class="item-total__value">{{ service ? 'Да' : 'Нет' }}</span>
      </li>
      <li class="basket-total__item item-total">
        <h5 class="item-total__title item-total__title_result">
          Стоимость товаров
        </h5>
        <span class="item-total__value item-total__value_result"
          >{{ prettifyTotal }} ₽</span
        >
      </li>
    </ul>
    <form class="basket-total__form" @submit.prevent="onSubmit">
      <button class="basket-total__btn">Оформить заказ</button>
      <button class="basket-total__btn basket-total__btn_oneclick" disabled>
        Купить в 1 клик
      </button>
    </form>
  </div>
</template>

<script>
import priceToString from '../utils/priceToString'
export default {
  emits: ['submitForm'],
  props: {
    total: Number,
    quantity: Number,
    service: Boolean
  },
  computed: {
    prettifyTotal () {
      return priceToString(this.total)
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submitForm', {
        total: this.total,
        quantity: this.quantity,
        service: this.service
      })
    }
  }
}
</script>

<style lang="scss">
.basket-total {
  width: 425px;
  padding: 35px 30px;
  margin-left: 55px;
  background-color: #f6f8fa;
  border-radius: 5px;
  // .basket-total__title

  &__title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  // .basket-total__list

  &__list {
    margin-bottom: 30px;
  }

  // .basket-total__item

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-child {
      border-top: 1px solid #aeb0b6;
      padding-top: 10px;
      margin-top: 28px;
    }

    &:not(:last-child) {
      margin-bottom: 17px;
    }
  }

  // .basket-total__form

  &__form {
  }

  // .basket-total__btn

  &__btn {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 5px;
    background-color: #0069b4;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    transition: background-color 0.4s ease;

    &:hover {
      background-color: #004170;
    }

    &:not(:last-child) {
      margin-bottom: 12px;
    }
    // .basket-total__btn_oneclick

    &_oneclick {
      border: 1px solid #0069b4;
      background-color: #fff;
      color: #0069b4;
      &:hover {
        background-color: #f6f8fa;
      }
    }
  }
}
.item-total {
  // .item-total__title

  &__title {
    font-size: 16px;
    font-weight: 500;
    // .item-total__title_result

    &_result {
      font-weight: 600;
    }
  }

  // .item-total__value

  &__value {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    // .item-total__value_result

    &_result {
      font-size: 28px;
      font-weight: 700;
    }
  }
}
</style>
