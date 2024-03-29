<template>
  <img :class="avatarClass" :style="avatarStyle" :src="src" :alt="alt" />
</template>

<script lang="ts">
export default {
  name: "app-avatar",
  props: {
    src: String,
    alt: String,
    size: { type: String, default: "100px" },
  },
  computed: {
    avatarClass() {
      return `app-avatar ${this.size}`;
    },
    avatarStyle() {
      return {
        width: this.size,
        height: this.size,
      };
    },
  },
};
</script>

<style scoped>
.app-avatar {
  margin: 10%;
  width: 100%;
  height: 100%;
  max-height: min(70vh, 70vw);
  max-width: min(70vh, 70vw);
  object-fit: cover;
  border-radius: 20%;
  -webkit-box-shadow: 2px 6px 62px -13px var(--color-secondary);
  -moz-box-shadow: 2px 6px 62px -13px var(--color-secondary);
  box-shadow: 2px 6px 62px -13px var(--color-secondary);
}
</style>