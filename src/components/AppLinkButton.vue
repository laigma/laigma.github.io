<template>
  <a :class="buttonClass" :href="link">
    <span class="app-link-button-label"> {{ label }} </span>
  </a>
</template>

<script lang="ts">
export default {
  name: "app-link-button",
  props: {
    label: String,
    link: String,
    disabled: { type: Boolean, default: false }
  },
  computed: {
    buttonClass() {
      return `app-link-button-container ${this.disabled ? "disabled" : ""}`;
    }
  },
}
</script>

<style scoped>
.app-link-button-container {
  height: 100%;
  max-height: 100%;
  min-height: 36px;
  margin: 1%;
  padding: 1%;
  background-color: var(--color-primary);
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px var(--color-secondary);
  display: flex;
  align-items: center;
  align-content: center;
  overflow: hidden;
  cursor: pointer;
}

.app-link-button-container.disabled {
  background-color: #a1a1a1;
  cursor: not-allowed;
  pointer-events: none;
}

.app-link-button-label {
  margin: calc(var(--font-size) * 0.2);
  padding: calc(var(--font-size) * 0.2);
  color: var(--vp-c-text-dark);
  font-size: calc(var(--font-size) * 0.9);
  font-weight: 500;
}
</style>
