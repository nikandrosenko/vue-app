<template>
  <div class="v-cart">
    <h2 class="v-cart__title">Cart title</h2>
  </div>
</template>

<script>
export default {
  name: "v-cart",
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.v-cart {
  &__title {
    text-transform: capitalize;
    text-decoration: line-through;
  }
}
</style>
