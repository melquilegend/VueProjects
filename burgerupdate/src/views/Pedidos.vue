<template>
<section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Gerenciar pedidos:</h2>
                    <h3 class="section-subheading text-muted">Dashboard.</h3>
                </div>
                <div class="row">
                <Dashboard />
                  
                   
                </div>
            </div>
</section>
</template>
<script>
import Dashboard from "../components/Dashboard.vue";

export default {
name:"Pedidos",
components:{
  Dashboard
}
}
</script>

