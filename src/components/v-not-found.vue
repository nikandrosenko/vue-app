<template>
  <div class="v-not-found">
    <h1>404 Page not Found</h1>
  </div>
</template>

<script>
export default {
  name: "v-not-found",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.v-not-found {
  text-transform: uppercase;
  margin: 25% auto 0;
  & h1 {
    font-weight: 900;
  }
}
</style>
