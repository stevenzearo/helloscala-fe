<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      test: "this is navigation header",
      timer: 0,
    }
  },
  created() {
    this.timer = setInterval(this.updateDuration, 500);
  },
  mounted() {
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    updateDuration() {
    }
  }
})

</script>

<template>
  <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Hello Scala</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="https://github.com/stevenzearo/helloscala-fe">Project on github</a></li>
    </ul>

    <ul id="nav-mobile" class="side-nav">
      <li><a href="https://github.com/stevenzearo/helloscala-fe">Project on github</a></li>
    </ul>
    <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
  </div>
</template>

<style scoped>
.header-background {
  background: linear-gradient(to right, #f44336 10%, #002157 29%);
}
</style>