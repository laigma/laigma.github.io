<template>
  <div :class="dividerClass"></div>
</template>

<script lang="ts">
export default {
  name: "app-divider",
  props: {
    inset: { type: Boolean, default: false }
  },
  computed: {
    dividerClass() {
      return `app-divider ${this.inset ? "inset" : ""}`;
    },
  },
}
</script>

<style scoped>
.app-divider {
  height: 1px;
  background-color: var(--color-primary);
  margin: 10px;
}

.app-divider.inset {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
