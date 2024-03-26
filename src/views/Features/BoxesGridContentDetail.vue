<template>
  <main class="dialog">
    <div :class="$style.descriptionBox">
      {{ description }}
    </div>

    <div :class="$style.levelWrapper">
      <div :class="$style.levelLabel">Skills</div>
      <div :class="$style.levelBackground"></div>
      <div :class="$style.levelProgress" :style="{ width: progressWidth }"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "box-detail",
  props: {
    description: String,
    level: Number,
  },
  computed: {
    progressWidth() {
      return `${this.level * 0.90}%`
    },
  },
}
</script>

<style module>
.descriptionBox {
  width: 100%;
  min-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10px;
  color: inherit;
  background-color: inherit;
  font-size: inherit;
}

.levelWrapper {
  width: 100%;
  height: 20%;
  position: relative;
  background-color: white;
}

.levelLabel {
  position: absolute;
  top: 0;
  right: 0;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--font-size) * 0.8);
  color: black;
}

.levelBackground {
  position: absolute;
  top: 50%;
  left: 5%;
  width: 90%;
  height: 45%;
  border-radius: 10px;
  background-color: gray;
}

.levelProgress {
  position: absolute;
  top: 50%;
  left: 5%;
  width: 90%;
  height: 45%;
  border-radius: 10px;
  background-color: green;
}
</style>
