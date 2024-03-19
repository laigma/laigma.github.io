---
layout: home
---

<AppAnimation />

<!-- Barra de navegación de home -->
<AppToggle :options="toggleOptions"/>

<Bio />
<FeaturesLayout />

<script>
import features from './src/data/features.json';

import FeaturesLayout from "./src/views/Features/FeaturesLayout.vue"
import Bio from "./src/views/Bio.md"

export default {
  data() {
    return {
      toggleOptions: [
        "Bio",
        ...features.map(e => e.title)
      ]
    }
  },
  components: {
    Bio,
    FeaturesLayout
  },
  mounted() {
    console.log(this.toggleOptions)
  }
}
</script>
