<template>
  <div class="basket-service">
    <label class="basket-service__checkbox">
      <input type="checkbox" v-model="newService" @change="onChange" />
      <div class="basket-service__icon">
        <img src="../assets/icons/service-icon.png" alt="service icon" />
      </div>
    </label>
    <div class="basket-service__body">
      <h5 class="basket-service__title">Установка</h5>
      <p class="basket-service__description">
        Отметьте, если Вам необходима консультация профессионала по монтажу
        выбранных товаров.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: Boolean
  },
  data () {
    return {
      newService: this.service
    }
  },
  methods: {
    onChange () {
      this.$store.commit('toggleService', this.newService)
    }
  }
}
</script>

<style lang="scss">
.basket-service {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 28px 25px;
  background-color: #f6f8fa;

  // .basket-service__checkbox

  &__checkbox {
    display: flex;
    align-items: center;
    margin-right: 20px;

    input {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
  }

  // .basket-service__icon

  &__icon {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // .basket-service__title

  &__title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 2px;
    line-height: 1.5em;
  }

  // .basket-service__description

  &__description {
    font-size: 14px;
    color: #797b86;
    line-height: 1.5em;
  }
}
</style>
