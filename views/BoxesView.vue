
<template>
  <main>
    <span :class="$style.customFeaturesTitle">{{ title }}</span>

    <section :class="$style.customFeaturesContainer">
      <BoxContent v-for="feature in renderData" :key="feature.title" :feature="feature" :darkMode="isDarkMode" />
    </section>
  </main>
</template>

<script>
import BoxContent from "./BoxContent.vue";

export default {
  name: "boxes-view",
  data() {
    return {
      isDarkMode: true,
    };
  },
  components: { BoxContent },
  props: {
    title: String,
    renderData: Array
  },
  created() {
    const observer = new MutationObserver(this.checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Comprueba el estado inicial
    this.checkDarkMode();
  },
  methods: {
    checkDarkMode() {
      this.isDarkMode = document.documentElement.classList.contains('dark');
    }
  },
}
</script>

<style module>
.customFeaturesTitle {
  font-size: 1.2rem;
  font-weight: 700;
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
  margin-left: 80px;
  margin-right: 80px;
  z-index: 99;
}
</style>
