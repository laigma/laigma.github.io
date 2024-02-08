
<template>
  <main :class="$style.customContainer">
    <div :class="$style.typewriter">
      <h1>Welcome! These are the tools I'm used to work with</h1>
    </div>

    <section v-for="section in contentData" :key="section.title">
      <div :class="$style.divider"></div>

      <BoxesView :title="section.title" :renderData="section.features" />
    </section>
  </main>
</template>

<script>
import features from '../../mocks/features.json';

import BoxesView from './BoxesGrid.vue';

export default {
  name: "boxes-view",
  data() {
    return {
      contentData: features,
    }
  },
  components: { BoxesView }
}
</script>

<style module>
.customContainer {
  padding: 20px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: var(--vp-c-brand);
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  opacity: 0.2;
}

.typewriter h1 {
  padding-left: 20px;
  margin-top: 60px !important;
  max-width: fit-content;
  color: var(--vp-c-brand);
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .12em;
  animation:
    typing 15.5s steps(630, end),
    blink-caret .5s step-end infinite;
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: orange
  }
}

@media screen and (max-width: 1366px) {
  .typewriter h1 {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 1024px) {
  .typewriter h1 {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 768px) {
  .typewriter h1 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .typewriter h1 {
    font-size: 0.6rem;
  }
}
</style>
