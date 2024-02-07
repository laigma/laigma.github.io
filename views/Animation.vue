<template>
  <div :class="$style.logoOutter">
    <img :class="$style.logoInner" :src="logo" />
  </div>
</template>

<script>
export default {
  name: 'FadeInAndOut',
  data() {
    return {
      logo: 'logos/lp-dark.png',
    }
  },
};
</script>

<style module>
.logoOutter {
  animation: fadeOut 3s ease-in-out 2s forwards, zoomIn 3s forwards;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-position: center;
}

.logoInner {
  animation: zoomOut 3s forwards;
}

@keyframes zoomOut {
  0% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0.8);
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.2);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    scale: 1;
    z-index: 30;
  }

  /* 80% {
    opacity: 1;
    z-index: 30;
  } */

  100% {
    opacity: 0;
    z-index: -1;
    scale: 1.2;
  }
}
</style>
