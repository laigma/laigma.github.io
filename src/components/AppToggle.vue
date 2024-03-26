<template>
  <div class="toggle">
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

.toggle.je {
  justify-content: flex-end;
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
  font-size: calc(var(--font-size) * 0.9);
  font-weight: 600;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
}

.toggle button:hover {
  background-color: var(--vp-c-brand-soft);
}

.toggle button.active {
  background-color: #2196F3;
  color: white;
}
</style>
