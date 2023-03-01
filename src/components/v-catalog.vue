<template>
  <div class="v-catalog">
    <h1 class="v-catalog__title">Catalog</h1>
    <router-link :to="{ name: 'cart' }">
      <div class="v-catalog__link_to_cart">
        <i class="medium material-icons">shopping_cart</i>
        <span v-if="CART.length > 0" class="v-catalog__cart-quantity">
          {{ CART_QUANTITY }}</span
        >
      </div>
    </router-link>
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: { vCatalogItem },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "CART_QUANTITY"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style scoped lang="scss">
.v-catalog {
  margin-bottom: 15px;
  &__title {
    margin-bottom: 15px;
    text-transform: uppercase;
    font-weight: 900;
  }
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;
    align-items: stretch;
  }
  &__link_to_cart {
    position: absolute;
    top: 5%;
    right: 5%;
    color: #eeeeee;
    & .material-icons {
      position: relative;
      padding: 15px;
      background-color: #333333;
      border: 1px solid #eeeeee;
      border-radius: 50%;
      font-size: 50px;
      &:hover,
      &:focus {
        background-color: #707070;
      }
      &:active {
        background-color: #eeeeee;
      }
    }
  }
  &__cart-quantity {
    position: absolute;
    min-width: 25px;
    bottom: 0;
    right: 0;
    padding: 1px 5px;
    background-color: #333333;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    font-size: 15px;
  }
}
</style>
