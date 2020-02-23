<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-track-click="clickAboutButton">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      clickAboutButton: "clickAboutButton",
      input: ""
    };
  }
};
</script>
