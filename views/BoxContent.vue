
<template>
  <main :class="$style.customBox" @click="toggleContentCard" @mouseleave="hideContentCard">
    <div :class="$style.iconContainer">
      <i v-if="!isSvgIcon(feature.icon)" :class="$style.svgIconCustom" v-html="feature.icon"></i>
      <img v-else :class="`svgIcon ${$style.svgIconCustom}`" :src="feature.icon" alt="icon" />

      <BoxDetail v-if="showContentCard" :description="feature.description" />
    </div>

    <div :class="$style.labelContainer"> {{ feature.title }}</div>
  </main>
</template>

<script>
import BoxDetail from "./BoxDetail.vue";

export default {
  name: "box-content",
  data() {
    return {
      showContentCard: false
    }
  },
  components: { BoxDetail },
  props: {
    feature: Object,
    darkMode: Boolean
  },
  methods: {
    isSvgIcon(icon) {
      if (icon.includes("<i")) {
        return false;
      }
      return true;
    },
    toggleContentCard() {
      if (!this.feature.description) return;

      this.showContentCard = !this.showContentCard;
    },
    hideContentCard() {
      this.showContentCard = false;
    }
  }
}
</script>

<style module>
.iconContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.labelContainer {
  width: 100%;
  font-weight: bold;
  font-size: 0.8rem;
  /* margin: 12px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.customBox {
  width: calc((100% / 5) - 24px);
  box-sizing: border-box;
  margin: 12px;
  padding: 12px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
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
  transform: scale(1.2);
  transition: background-color 0.5s, transform 0.5s;
}

.svgIconCustom {
  height: 90px;
  font-size: 90px;
}
</style>
