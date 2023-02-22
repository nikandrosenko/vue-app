<template>
  <div id="app">
    <vMainWrapper />
  </div>
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
  position: relative;
  background-color: #222222;
  box-sizing: border-box;
}
</style>
