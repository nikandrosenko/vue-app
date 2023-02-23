<template>
  <div class="v-catalog">
    <h1 class="v-catalog__title">Catalog Title</h1>
    <div class="v-catalog__items">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @sendDataToParent="showArticleFromChild"
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
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    showArticleFromChild(article) {
      console.log(article);
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
  }
  &__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
  }
}
</style>
