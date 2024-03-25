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
  font-size: 56px;
  font-weight: 700;
  height: 100px;
  display: flex;
  align-items: center;
}

.cardSubtitle {
  font-size: 1.2em;
  letter-spacing: -0.4px;
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.cardContent {
  padding-top: 12px;
  padding-bottom: 12px;
  line-height: 1.2;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>