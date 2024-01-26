
<template>
  <div :class="$style.typewriter">
    <h1>Welcome! These are the tools I'm used to work with</h1>
    <h1>Bienvenido! Estas son mis herramientas de trabajo</h1>
  </div>

  <BoxesView :title="title" :renderData="features" />
</template>

<script>
import BoxesView from './BoxesView.vue';

export default {
  name: "boxes-view",
  data() {
    return {
      title: "Lenguajes y Frameworks",
      features: [
        { icon: '<i class="fab fa-vuejs"></i>', title: 'VueJS' },
        { icon: '<i class="fab fa-node-js"></i>', title: 'NodeJS' },
        { icon: '<i class="fab fa-aws"></i>', title: 'AWS Cloud' },
        { icon: { dark: '/logos/azure-dark.svg', light: '/logos/azure-light.svg' }, title: 'Azure' },
        { icon: { dark: '/logos/postgres-dark.svg', light: '/logos/postgres-light.svg' }, title: 'PostgreSQL' },
        { icon: { dark: '/logos/mongodb-dark.svg', light: '/logos/mongodb-light.svg' }, title: 'MongoDB' },
        { icon: { dark: '/logos/vitejs-dark.svg', light: '/logos/vitejs-light.svg' }, title: 'ViteJS' },
        { icon: { dark: '/logos/fastapi-dark.svg', light: '/logos/fastapi-light.svg' }, title: 'FastApi' },
      ]
    }
  },
  components: { BoxesView }
}
</script>

<style module>
.typewriter h1 {
  padding-left: 20px;
  max-width: fit-content;
  color: var(--vp-c-brand);
  overflow: hidden;
  /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange;
  /* The typwriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */
  letter-spacing: .12em;
  /* Adjust as needed */
  animation:
    typing 15.5s steps(630, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
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
