<template>
  <div class="products-slider">
    <h3 class="products-slider__title">Просмотренные товары</h3>
    <div class="products-slider__navigation">
      <button class="products-slider__action" @click="prev"></button>
      <p class="products-slider__counter">
        <span class="products-slider__current">{{ currentSlide + 1 }}</span>
        /
        {{ slidesCount }}
      </p>
      <button
        class="products-slider__action products-slider__action_next"
        @click="next"
      ></button>
    </div>
  </div>
  <carousel
    v-model="currentSlide"
    :items-to-show="4"
    :itemsToScroll="1"
    :wrapAround="true"
    :snapAlign="'start'"
    ref="carousel"
  >
    <slide v-for="product in this.$store.state.products" :key="product.id">
      <app-product-card :product="product"></app-product-card>
    </slide>
  </carousel>
</template>

<script>
import AppProductCard from './AppProductCard.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
export default {
  data () {
    return {
      currentSlide: 0
    }
  },
  computed: {
    slidesCount () {
      return this.$store.state.products.length
    }
  },
  methods: {
    next () {
      this.$refs.carousel.next()
      // this.currentSlide++
      // if (this.currentSlide > this.slidesCount) {
      //   this.currentSlide = 1
      // }
    },
    prev () {
      this.$refs.carousel.prev()
      // this.currentSlide--
      // if (this.currentSlide < 1) {
      //   this.currentSlide = this.slidesCount
      // }
    }
  },
  components: {
    AppProductCard,
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
.products-slider {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 47px;
  // .products-slider__title

  &__title {
    font-size: 30px;
    font-weight: 600;
  }

  // .products-slider__navigation

  &__navigation {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  // .products-slider__action

  &__action {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: #90a2b5;
    background-image: url(../assets/icons/shevron.svg);
    background-repeat: no-repeat;
    background-position: 18px center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgb(100, 100, 100);
    }

    // .products-slider__action_next

    &_next {
      transform: rotate(180deg);
    }
  }

  // .products-slider__counter

  &__counter {
    font-size: 18px;
    color: #797b86;
  }

  // .products-slider__current

  &__current {
    font-size: 24px;
    color: #212121;
  }
}
</style>
