<template>
  <AppToggle :class="$style.tabClass" v-model="selectedTab" :options="options" />
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 0,
    }
  },
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
  },
  watch: {
    selectedTab() {
      this.inputVal = this.options[this.selectedTab]
    }
  }
}
</script>

<style module>
.tabClass {
  font-size: calc(var(--font-size) * 1.2);
}
</style>
