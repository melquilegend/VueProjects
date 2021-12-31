<template>
<div>
<Banner />
<section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Monte o Seu Burger:</h2>
                    <h3 class="section-subheading text-muted">Escolha os ingredientes.</h3>
                </div>
                <div class="row">
                   <BurgerForm />
                  
                   
                </div>
            </div>
</section>
</div>
</template>

<script>
import Banner from "../components/Banner.vue";
import BurgerForm from "../components/BurgerForm.vue";
export default {
  name:"Home",
  components: {
    Banner,
    BurgerForm
  }
}


</script>


