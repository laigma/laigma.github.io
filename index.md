---
layout: home

hero:
  name: "@laigma"
  text: "Luis Iglesias · FullStack Developer"
  image: "/img/prof.jpg"
  tagline: >
    Hi, I'm Luis Iglesias. I'm a full-stack developer based in Seville, Spain, experienced in VueJS and NodeJS frameworks. 
    
    I'm also developing a serverless stack in AWS and Azure. 
    
    I'd like to enhance my career by contributing to open-source projects through this site.
    
  actions:
    - theme: alt
      text: Projects
      link: /projects
    - theme: alt
      text: Contact
      link: /contact

---
<Animation />

<FeaturesLayout />

<script>
import FeaturesLayout from "./src/views/Features/FeaturesLayout.vue"

export default {
  components: {
    FeaturesLayout
  }
}
</script>
