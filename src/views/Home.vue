<template>
  <div class="home">
    <h1>This is a home page</h1>
    <input v-model="input" v-track-change="changeInput" />
    <button v-on:click="logInput" v-track-click="clickButton">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      changeInput: "changeInput",
      clickButton: "clickButton",
      input: ""
    };
  },
  methods: {
    logInput() {
      console.log(this.input);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
