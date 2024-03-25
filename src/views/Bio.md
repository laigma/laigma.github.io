<template>
<main>Pintar bonita BIO</main>
  <!-- <div>
    <div class="hero">
      <h1>{{ hero.name }}</h1>
      <p>{{ hero.text }}</p>
      <img :src="hero.image" alt="Hero Image">
      <p>{{ hero.tagline }}</p>
      <div class="actions">
        <router-link v-for="(action, index) in hero.actions" :key="index" :to="action.link" class="action" :class="{ 'alt': action.theme === 'alt' }">{{ action.text }}</router-link>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      hero: {
        name: "@laigma",
        text: "Luis Iglesias · FullStack Developer",
        image: "/img/prof.jpg",
        tagline: `Hi, I'm Luis Iglesias. I'm a full-stack developer based in Seville, Spain, experienced in VueJS and NodeJS frameworks.
          I'm also developing a serverless stack in AWS and Azure.
          I'd like to enhance my career by contributing to open-source projects through this site.`,
        actions: [
          { theme: "alt", text: "Projects", link: "/projects" },
          { theme: "alt", text: "Contact", link: "/contact" }
        ]
      }
    };
  }
};
</script>

<style scoped>
.hero {
  /* Estilos para el componente del héroe */
}
.actions {
  /* Estilos para los botones de acción */
}
.action {
  /* Estilos para cada botón de acción */
}
.alt {
  /* Estilos alternativos */
}
</style>
