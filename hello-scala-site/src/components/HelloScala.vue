<script lang="ts">
import {defineComponent} from "vue";

const start = Date.parse("2024-01-28T06:00:00.000Z");
export default defineComponent({
      data() {
        return {
          siteTimerTip: "This site is running!",
          timer: 0
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
          const currentTime = new Date();
          const timeDiffInMs = Math.abs(currentTime.getTime() - start);
          const diffDays = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24));
          const diffHours = Math.floor((timeDiffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const diffMinutes = Math.floor((timeDiffInMs % (1000 * 60 * 60)) / (1000 * 60));
          const diffSeconds = Math.floor((timeDiffInMs % (1000 * 60)) / 1000);
          const durationStr = diffDays + "d " + diffHours + "h " + diffMinutes + "mins " + diffSeconds + "seconds"
          this.siteTimerTip = "This site has been running " + durationStr
        }
      }
    }
)
</script>

<template>
  <div class="section no-pad-bot">
    <div class="container">
      <br><br>
      <h1 class="header center  gradient-text">HELLO SCALA</h1>
      <div class="row center">
        <h5 id="site_duration" class="header col s12 light">{{ siteTimerTip }} !</h5>
      </div>
      <div class="row center">
        <h5 class="header col s12 light">A group of frantic geeks be crazy about coding in Scala!</h5>
      </div>
      <div class="row center">
        <a href="https://github.com/stevenzearo/helloscala-fe" id="download-button"
           class="btn-large waves-effect waves-light orange">CONTACT US</a>
      </div>
      <br><br>
    </div>
  </div>
</template>
<style scoped>
.container {
  height: fit-content;
}

.gradient-text {
  background: linear-gradient(to bottom, #f44336 20%, #1a237e 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>