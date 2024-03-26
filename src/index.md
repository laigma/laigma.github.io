---
layout: home

# hero:
#   name: "@laigma"
#   text: "Luis Iglesias · FullStack Developer"
#   image: "/img/prof.jpg"
#   tagline: >
#     Hi, I'm Luis Iglesias. I'm a full-stack developer based in Seville, Spain, experienced in VueJS and NodeJS frameworks. 
    
#     I'm also developing a serverless stack in AWS and Azure. 
    
#     I'd like to enhance my career by contributing to open-source projects through this site.
    
#   actions:
#     - theme: alt
#       text: Projects
#       link: /projects
#     - theme: alt
#       text: Contact
#       link: /contact

---
<AppAnimation />

<!-- <FeaturesLayout /> -->
<Home class="vpHomeWrap"/>

<script>
import FeaturesLayout from "./views/Features/FeaturesLayout.vue"
import Home from "./views/Home.vue"

export default {
  components: {
    FeaturesLayout,
    Home
  }
}
</script>

<style>
.vpHomeWrap {
  width: 100%;
  height: calc(100vh - 64px);
  background-color: transparent;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 99;
}  
</style>
