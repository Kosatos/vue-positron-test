import { createStore } from 'vuex'
import { products } from '@/data/products'

export default createStore({
  state: {
    products: products,
    basket: {
      products: [],
      service: false,
      total: 0
    }
  },
  getters: {
    totalPrice (state) {
      return state.basket.products.reduce(
        (prev, curr) => prev + curr.price * curr.quantity,
        0
      )
    },
    totalQuantity (state) {
      return state.basket.products.reduce(
        (prev, curr) => prev + curr.quantity,
        0
      )
    }
  },
  mutations: {
    addProduct (state, product) {
      const { id, title, specs, currentPrice: price, article, img } = product
      state.basket.products.push({
        id,
        title,
        specs,
        price,
        img,
        article,
        quantity: 1
      })
    },
    decrement ({ basket }, id) {
      basket.products.forEach((p) => {
        if (p.id === id) {
          p.quantity--
        }
      })
    },
    increment ({ basket }, id) {
      basket.products.forEach((p) => {
        if (p.id === id) {
          p.quantity++
        }
      })
    },
    removeProduct ({ basket }, id) {
      basket.products = basket.products.filter((p) => p.id !== id)
    },
    clearBasket ({ basket }) {
      basket.products = []
      basket.total = 0
    },
    toggleService ({ basket }, service) {
      basket.service = service
    }
  },
  actions: {},
  modules: {}
})
