<template>
  <div id="app">
    <div class="header">
      <img alt="Vue logo" src="./assets/logo.png" v-track-click="clickLogo" />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>

    <div class="footer">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => {
    return {
      clickLogo: "clickLogo",
      index: 1 // check if we can access data from component
    };
  }
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  display: flex;
  height: 100%;
  width: 100%;
  text-align: center;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #f0f0f0;

  img {
    height: 80%;
  }
}

.content {
  flex: 1;
}

.footer {
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 8px;
  }
}
</style>
