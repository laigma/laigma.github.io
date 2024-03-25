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
  margin: 2px;
  padding: 2px;
  background-color: var(--color-primary);
  border-radius: 5px;
  border: 0px;
  box-shadow: 0px 0px 5px 0px var(--color-secondary);
  width: fit-content;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  min-height: 36px;
  padding: 2px;
  color: white;
  align-items: center;
  align-content: center;
  display: flex;
  cursor: pointer;
}

.app-link-button-container.disabled {
  background-color: #a1a1a1;
  cursor: not-allowed;
  pointer-events: none;
}

.app-link-button-label {
  margin: 0px 10px;
  padding: 5px;
}
</style>
