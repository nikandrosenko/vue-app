<template>
  <vMainWrapper />
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper.vue";
export default {
  name: "app",
  components: {
    vMainWrapper,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";

#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eeeeee;
}
* {
  margin: 0;
}
body {
  background-color: #222222;
  box-sizing: border-box;
}
</style>
