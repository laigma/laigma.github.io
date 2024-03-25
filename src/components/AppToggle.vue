<template>
  <div class="toggle av">
    <button v-for="(option, index) in options" :key="index" :class="{ active: option === options[inputVal] }"
      @click="inputVal = index">
      {{ option }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    options: {
      type: Array,
      required: true
    },

  },
  computed: {
    inputVal: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
  },
};
</script>

<style scoped>
.toggle {
  display: flex;
  justify-content: center;
}

/* .toggle.av {
  position: absolute;
  flex-direction: column;
} */

.toggle button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px 16px;
  margin: 0 4px;
  font-size: 16px;
}

.toggle button:hover {
  background-color: var(--vp-c-brand);
}

.toggle button.active {
  background-color: #2196F3;
  color: white;
}
</style>
