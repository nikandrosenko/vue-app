<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../assets/images/' + product_data.image)"
      alt="Catalog item image"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__about">{{ product_data.about }}</p>
    <div class="v-catalog-item__price-box">
      <p class="v-catalog-item__price">{{ product_data.price }}</p>
      <button class="v-catalog-item__add_to_cart_btn" @click="addToCart">
        add to cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  display: flex;
  flex-basis: 25%;
  flex-direction: column;
  justify-content: start;
  max-width: 300px;
  min-height: 220px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 8px 0 grey;
  background-color: #333333;
  border-radius: 5px;
  transition: 0.2s;
  text-overflow: clip;
  overflow-x: hidden;
  &:hover {
    background-color: #363636;
  }
  &__name {
    font-weight: 900;
    margin-bottom: 10px;
  }
  &__about {
    margin-bottom: 20px;
  }
  &__image {
    background-color: #222222;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  &__price-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }
  &__price {
    font-weight: 900;
    &::after {
      content: " \20BD";
    }
  }
  &__add_to_cart_btn {
    color: #eeeeee;
    padding: 10px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    transition: 0.1s;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 900;
    &:hover {
      background-color: #707070;
    }
    &:active {
      background-color: #eeeeee;
    }
  }
}
</style>
