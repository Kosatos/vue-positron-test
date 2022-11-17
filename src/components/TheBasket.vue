<template>
  <div class="basket">
    <div class="basket__header">
      <h2 class="basket__title">Ваша корзина</h2>
      <span class="basket__quantity">
        {{ $store.getters.totalQuantity }} {{ declension }}
      </span>
      <a href="#" class="basket__clear" @click="onClear">Очистить корзину</a>
    </div>
    <p v-if="!basket.products.length" class="basket__alert">
      {{ submitSuccess ? 'Заказ успешно отправлен' : 'Корзина пуста' }}
    </p>
    <div v-else class="basket__body">
      <div class="basket__list">
        <app-products-list :products="basket.products"></app-products-list>
        <app-basket-service :service="basket.service"></app-basket-service>
      </div>
      <the-basket-total
        :total="totalPrice"
        :quantity="$store.getters.totalQuantity"
        :service="basket.service"
        @submitForm="placeAnOrder"
      ></the-basket-total>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppProductsList from './AppProductsList.vue'
import AppBasketService from './AppBasketService.vue'
import TheBasketTotal from './TheBasketTotal.vue'
export default {
  props: {
    basket: Object
  },
  data () {
    return {
      submitSuccess: false
    }
  },
  computed: {
    declension () {
      const totalProductsCount = this.$store.getters.totalQuantity
      if (totalProductsCount === 1) {
        return 'товар'
      } else if (
        totalProductsCount === 2 ||
        totalProductsCount === 3 ||
        totalProductsCount === 4
      ) {
        return 'товара'
      } else {
        return 'товаров'
      }
    },
    ...mapGetters(['totalQuantity', 'totalPrice'])
  },
  methods: {
    onClear () {
      this.$store.commit('clearBasket')
    },
    async placeAnOrder ({ total, qauntity, service }) {
      const body = {
        products: this.basket.products,
        total,
        qauntity,
        service
      }
      try {
        await fetch(
          'https://vue-positron-test-default-rtdb.firebaseio.com/orders.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          }
        )
        this.submitSuccess = true
        this.onClear()
        setTimeout(() => {
          this.submitSuccess = false
        }, 3000)
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  components: {
    AppProductsList,
    AppBasketService,
    TheBasketTotal
  }
}
</script>

<style lang="scss">
.basket {
  padding: 110px 0 95px;
  // .basket__header

  &__header {
    display: flex;
    align-items: flex-end;
    max-width: 800px;
    margin-bottom: 35px;
  }

  // .basket__title

  &__title {
    font-size: 44px;
    font-weight: 700;
    margin-right: 22px;
  }

  // .basket__quantity

  &__quantity {
    font-size: 18px;
    color: #797b86;
    padding-bottom: 3px;
  }

  // .basket__clear

  &__clear {
    margin-left: auto;
    font-size: 14px;
    color: #797b86;
    text-decoration-line: underline;
    transition: color 0.3s ease;

    &:hover {
      color: #2d2d2d;
    }
  }

  // .basket__alert

  &__alert {
    padding: 50px 0;
    text-align: center;
    font-size: 28px;
  }

  // .basket__body

  &__body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__list {
    padding-top: 15px;
  }
}
</style>
