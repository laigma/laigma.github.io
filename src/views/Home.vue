<template>
  <main class="row se">
    <section class="col cols-10 xl-3 md-4">
      <AppCard>
        <template #cardTitle>
          @laigma
        </template>

        <template #cardSubtitle>
          Luis Iglesias · FullStack Developer
        </template>

        <template #cardContent>
          Hi, I'm Luis Iglesias. I'm a full-stack developer based in Seville, Spain, experienced in VueJS and NodeJS
          frameworks.<br />

          I'm also developing a serverless stack in AWS and Azure.<br />

          I'd like to enhance my career by contributing to open-source projects through this site.<br />
        </template>

        <template #actions>
          <AppLinkButton label="Skills" link="/profile.html" />
          <AppLinkButton label="Contact" link="/contact.html" />
          <AppLinkButton label="Projects" link="/projects.html" />
        </template>
      </AppCard>
    </section>

    <section class="col cols-10 md-4">
      <AppAvatar src="/img/prof.jpg" alt="Luis Iglesias" size="350px" />
    </section>
  </main>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>
