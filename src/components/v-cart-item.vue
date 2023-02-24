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
    <div class="v-cart-item__quantity">
      <p>
        <span class="v-cart-item__price"> {{ cart_item_data.price }} </span> *
        <span>{{ cart_item_data.quantity }}</span>
      </p>
      <button class="v-cart-item__delete-btn" @click="deleteFromCart">
        Delete
      </button>
    </div>
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
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  watch: {},
  mounted() {
    console.log("Hello! Im alive!");
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
  &__quantity {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__delete-btn {
    color: #eeeeee;
    padding: 10px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    transition: 0.1s;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 900;
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
