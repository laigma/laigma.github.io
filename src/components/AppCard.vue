<template>
  <main>
    <div class="cardTitle">
      <slot name="cardTitle"></slot>
    </div>

    <div class="cardSubtitle">
      <slot name="cardSubtitle"></slot>
    </div>

    <div class="cardContent">
      <slot name="cardContent"></slot>
    </div>

    <AppDivider />

    <div class="actions">
      <div class="row je">
        <slot name="actions"></slot>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppCard',
};
</script>

<style scoped>
.cardTitle {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
  font-size: calc(var(--font-size) * 3.5);
  font-weight: 700;
  height: calc(var(--font-size) * 5);
  display: flex;
  align-items: center;
}

.cardSubtitle {
  font-size: calc(var(--font-size) * 1.2);
  letter-spacing: -0.4px;
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.cardContent {
  padding-top: 5%;
  padding-bottom: 5%;
  line-height: 1.2;
  font-size: calc(var(--font-size) * 0.9);
  color: var(--vp-c-text-2);
}
</style>