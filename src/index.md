---
layout: home
---
<AppAnimation v-if="showAnimation" />

<Home class="vpHomeWrap" />

<script>
import FeaturesLayout from "./views/Features/FeaturesLayout.vue"
import Home from "./views/Home.vue"

export default {
  components: {
    FeaturesLayout,
    Home
  },
  computed: {
    showAnimation() {
      if (!localStorage.getItem('showAnimation')) return true;

      return false;
    }
  },
  mounted() {
    this.hideAnimation();
  },
  methods: {
    hideAnimation() {
      setTimeout(() => {
        localStorage.setItem('showAnimation', 'false');
      }, 5000);
    }
  }
}
</script>
