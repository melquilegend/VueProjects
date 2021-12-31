<template>
<body id="page-top">
<Navbar :logo="logo_src" :alt="app_name"/>
<router-view/>
<Footer />
</body>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    Navbar,
    Footer
  },
  data(){
    return {
    logo_src: "/img/logo.png",
    app_name:"Faz o teu Burger"
    }
    

  }
 
}
</script>

<style>
*{
  font-family: Helvetica;
  padding:0;
  margin: 0;
  box-sizing: border-box;
}
.page-section {
  padding: 6rem 0;
}
.page-section h2.section-heading, .page-section .section-heading.h2 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}
.page-section h3.section-subheading, .page-section .section-subheading.h3 {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 4rem;
}
</style>
