
<template>
  <main class="dialog">
    <div>
      {{ description }}
    </div>
  </main>
</template>

<script>
export default {
  name: "box-detail",
  props: {
    description: String,
  },
}
</script>

<style module>
.contentCard {
  color: var(--vp-c-bg);
}

.dialog {
  display: block;
  position: absolute;
  width: inherit;
  font-size: 14px;
  line-height: 1.2;
  top: 0;
  left: 0;
  border-radius: 10px;
  height: fit-content;
  padding: 20px;
  background-color: var(--vp-c-text-1);
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 99;
}
</style>
