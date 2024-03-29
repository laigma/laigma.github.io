---
layout: home
---

<BoxesGrid class="vpHomeWrap" v-if="selectedFeature" :title="selectedFeature" :renderData="content" />

<section class="customFooter">
  <AppTab v-model="selectedFeature" :options="toggleOptions" />
</section>

<script>
import features from './data/features.json';

import BoxesGrid from "./views/Features/BoxesGrid.vue"

export default {
  data() {
    return {
      selectedFeature: "",
      toggleOptions: [ ...features.map(e => e.title)],
      content: []
    }
  },
  components: {
    BoxesGrid
  },
  mounted() {
    this.selectedFeature = features[0].title;
  },
  watch: {
    selectedFeature() {
      this.content = features.find(e => e.title === this.selectedFeature).features;
    }
  }
}
</script>

<style scoped>
  .vpHomeWrap {
    height: calc(100vh - 64px - 50px);
    overflow-y: auto;
  }

  .customFooter {
    width: 100vw;
    height: 50px;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    right: 0;
    /* background-color: var(--vp-c-bg); */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
</style>