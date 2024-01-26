
<template>
  <main>
    <!-- {{ title }} -->

    <section :class="$style.customContainer">
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
.customContainer {
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
