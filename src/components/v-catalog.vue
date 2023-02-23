<template>
  <div class="v-catalog">
    <h1 class="v-catalog__title">Catalog</h1>
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link_to_cart">
        <i class="medium material-icons">shopping_cart</i> {{ CART.length }}
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
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Данные пришли");
      }
    });
  },
};
</script>

<style lang="scss">
.v-catalog {
  margin-top: 15px;
  margin-bottom: 15px;
  &__title {
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 15px;
  }
}
</style>
