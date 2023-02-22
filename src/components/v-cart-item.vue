<template>
  <div class="v-cart-item">
    <vCatalog />
    <vCart />
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";
import vCart from "./v-cart.vue";

export default {
  name: "v-cart-item",
  components: { vCatalog, vCart },
  props: {},
  data() {
    return {
      title: "good evening",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log("Hello! Im alive!");
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-basis: 25%;
  align-items: center;
  box-shadow: 0 0 8px 0 grey;
  padding: 20px;
  margin: 20px;
}
</style>
