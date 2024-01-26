
<template>
  <main :class="$style.customBox">
    <div :class="$style.iconContainer">
      <i v-if="typeof feature.icon === 'string'" v-html="feature.icon"></i>
      <img v-else :class="$style.svgIcon" :src="darkMode ? feature.icon.dark : feature.icon.light" alt="icon" />
    </div>

    <span :class="$style.labelContainer">{{ feature.title }}</span>
  </main>
</template>

<script>
export default {
  name: "box-content",
  props: {
    feature: Object,
    darkMode: Boolean
  },
}
</script>

<style module>
.iconContainer {
  width: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.labelContainer {
  width: 80%;
  font-weight: bold;
  margin: 12px;
  display: flex;
  justify-content: start;
  align-items: center;
}

.customBox {
  width: calc((100% / 5) - 24px);
  box-sizing: border-box;
  margin: 12px;
  padding: 12px;
  border-radius: 20px;
  display: flex;
  background-color: var(--vp-c-brand-soft);
}

@media screen and (max-width: 1366px) {
  .customBox {
    width: calc(100% / 4);
  }
}

@media screen and (max-width: 1024px) {
  .customBox {
    width: calc(100% / 3);
  }
}

@media screen and (max-width: 480px) {
  .customBox {
    width: calc(100% / 2);
  }
}

@media screen and (max-width: 480px) {
  .customBox {
    width: 100%;
  }
}

.customBox:hover {
  background-color: var(--vp-c-brand-3);
  transform: scale(1.5);
  transition: background-color 0.5s, transform 0.5s;
}

.svgIcon {
  width: 20px;
  height: 20px;
}
</style>
