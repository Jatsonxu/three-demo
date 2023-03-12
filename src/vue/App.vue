<template>
  <h2>Hello Vue!</h2>
  <p>{{ message }}</p>
  <hello-world/>
</template>

<script>
import HelloWorld from "./HelloWorld.vue"

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      title: "Hello World",
      message: "hahaha"
    }
  }
}
</script>

<style>

</style>