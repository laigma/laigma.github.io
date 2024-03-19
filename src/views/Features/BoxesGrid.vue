
<template>
  <main>
    <span :class="$style.customFeaturesTitle">{{ title }}</span>

    <section :class="$style.customFeaturesContainer">
      <BoxContent v-for="feature in renderData" :key="feature.title" :feature="feature" />
    </section>
  </main>
</template>

<script>
import BoxContent from "./BoxesGridContent.vue";

export default {
  name: "boxes-view",
  components: { BoxContent },
  props: {
    title: String,
    renderData: Array
  },
}
</script>

<style module>
.customFeaturesTitle {
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  color: var(--vp-c-brand);
  margin: 20px;
  margin-left: 80px;
  margin-right: 80px;
  text-align: center;
}

.customFeaturesContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  margin: 20px;
  margin-left: 120px;
  margin-right: 120px;
  z-index: 29;
}

@media (max-width: 1200px) {
  .customFeaturesContainer {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
