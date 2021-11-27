<template>
<div>
   <h2>Este é a descrição de uma pessoa {{nome}}</h2> 
<Info :email="email" :estou_trabalhando=false />
</div>
</template>
<script>
import Info from './Info.vue'

export default {
  components: { Info },
    name: 'Pessoa',
    data(){
        return{
            nome:'Marcos',
            email:"melquilegend@gmail.com"
        }
    }
}
</script>