<template>
  <div class="v-cart-item">
    <div class="v-cart-item__box">
      <img
        class="v-cart-item__image"
        :src="require('../assets/images/' + cart_item_data.image)"
        alt="Cart item image"
      />
      <div class="v-cart-item__content">
        <p>
          <span class="v-cart-item__article">{{ cart_item_data.article }}</span>
          <span class="v-cart-item__name">{{ cart_item_data.name }}</span>
        </p>
        <p>{{ cart_item_data.about }}</p>
      </div>
    </div>
    <div class="v-cart-item__result">
      <div class="v-cart-item__quantity-box">
        <button @click="decProduct" class="v-cart-item__quantity-btn">
          <i class="material-icons">remove</i>
        </button>
        <span class="v-cart-item__quantity">
          {{ cart_item_data.quantity }}
        </span>
        <button @click="incProduct" class="v-cart-item__quantity-btn">
          <i class="material-icons">add</i>
        </button>
      </div>
      <div class="v-cart-item__price">
        {{ cart_item_data.price * cart_item_data.quantity }}
      </div>
    </div>
    <button @click="deleteFromCart" class="v-cart-item__delete-btn">
      <i class="material-icons">delete</i>
    </button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      title: "good evening",
    };
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    incProduct() {
      this.$emit("incProduct", this.cart_item_data);
    },
    decProduct() {
      this.$emit("decProduct", this.cart_item_data);
    },
  },
};
</script>

<style scoped lang="scss">
.v-cart-item {
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  margin: 20px;
  align-items: center;
  box-shadow: 0 0 8px 0 grey;
  background-color: #333333;
  border-radius: 5px;
  &__box {
    display: flex;
    align-items: center;
  }
  &__content {
    max-width: 400px;
    text-align: left;
    & p {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__result {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 20px;
  }
  &__quantity-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  &__quantity {
    margin: 0 10px;
  }
  &__quantity-btn {
    color: #eeeeee;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    transition: 0.1s;
    &:hover,
    &:focus {
      background-color: #707070;
    }
    &:active {
      background-color: #eeeeee;
    }
  }
  &__name {
    font-weight: 900;
  }
  &__article {
    margin-right: 10px;
    &::after {
      content: ")";
    }
  }
  &__image {
    background-color: #222222;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-right: 30px;
  }
  &__price {
    font-weight: 900;
    &::after {
      content: " \20BD";
    }
  }
  &__delete-btn {
    color: #eeeeee;
    padding: 10px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    transition: 0.1s;
    & .material-icons {
      font-size: 45px;
    }
    &:hover,
    &:focus {
      background-color: #707070;
    }
    &:active {
      background-color: #eeeeee;
    }
  }
}
</style>
