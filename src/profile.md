---
layout: home
---

<!-- Barra de navegación de home -->
<AppToggle v-model="selectedTab" :options="toggleOptions"/>

<!-- <Bio v-if="selectedTab === 0"/> -->
<BoxesGrid v-if="selectedFeature" :title="selectedFeature.title" :renderData="selectedFeature.features" />

<script>
import features from './data/features.json';

import BoxesGrid from "./views/Features/BoxesGrid.vue"
import Bio from "./views/Bio.md"

export default {
  data() {
    return {
      selectedTab: 0,
      selectedFeature: null,
      toggleOptions: [
        // "Bio",
        ...features.map(e => e.title)
      ]
    }
  },
  components: {
    Bio,
    BoxesGrid
  },
  mounted() {
    console.log(this.toggleOptions)
    this.selectedFeature = features[this.selectedTab];
  },
  watch: {
    selectedTab() {
      console.log(this.selectedTab)


      this.selectedFeature = null;    
      
      // if (this.selectedTab === 0) return;
      this.selectedFeature = features[this.selectedTab];
    }
  }
}
</script>
