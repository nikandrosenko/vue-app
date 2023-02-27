<template>
  <div class="v-main-wrapper">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v-main-wrapper",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("v-main-wrapper mounted successfully");
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
  color: #eeeeee;
}
</style>
