<template>
  <div class="v-cart">
    <router-link :to="{ name: 'cart' }">
      <div class="v-cart__link_to_cart">
        <i class="medium material-icons">shopping_cart</i>
        <span v-if="CART.length > 0" class="v-cart__cart-quantity">
          {{ CART_QUANTITY }}</span
        >
      </div>
    </router-link>
    <router-link :to="{ name: 'catalog' }">
      <div class="v-cart__back_to_catalog">
        <i class="material-icons">arrow_back</i>
      </div>
    </router-link>
    <h2 class="v-cart__title">Cart</h2>
    <p v-if="!CART.length">You haven't got any products...</p>
    <vCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @incProduct="incProduct(index)"
      @decProduct="decProduct(index)"
    />
    <p v-if="CART.length" class="v-cart__total">Total: {{ TOTAL_COST }}</p>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-cart",
  components: { vCartItem },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  computed: {
    ...mapGetters(["CART", "CART_QUANTITY", "TOTAL_COST"]),
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART", "INCREASE_PRODUCT", "DECREASE_PRODUCT"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    incProduct(index) {
      this.INCREASE_PRODUCT(index);
    },
    decProduct(index) {
      this.DECREASE_PRODUCT(index);
    },
  },
};
</script>

<style scoped lang="scss">
.v-cart {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 20px;
  margin-bottom: 50px;
  &__title {
    text-transform: uppercase;
    font-weight: 900;
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
  &__back_to_catalog {
    position: absolute;
    top: 5%;
    left: 5%;
    color: #eeeeee;
    transition: 0.1s;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 900;
    & .material-icons {
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
  &__total {
    align-self: flex-start;
    margin-left: 20px;
    text-transform: uppercase;
    font-weight: 900;
    &::after {
      content: " \20BD";
    }
  }
}
p {
  text-align: center;
  font-size: 26px;
}
</style>
