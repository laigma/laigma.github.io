<template>
  <div class="toggle">
    <button v-for="(option, index) in options" :key="index" :class="{ active: option === selectedOption }"
      @click="selectOption(option)">
      {{ option }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      selectedOption: this.value
    };
  },
  watch: {
    value(newValue) {
      this.selectedOption = newValue;
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.$emit('input', option);
    }
  }
};
</script>

<style scoped>
.toggle {
  display: flex;
  justify-content: center;
}

.toggle button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px 16px;
  margin: 0 4px;
  font-size: 16px;
}

.toggle button.active {
  background-color: #2196F3;
  color: white;
}
</style>
