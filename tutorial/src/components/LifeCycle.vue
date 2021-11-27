<template>
    <h1>Meu Nome é {{nome}}</h1>
</template>
<script>

export default {
  name:'LifeCycle',
  data(){
      return{
          nome: 'ainda não sei'
      }
  },
  created(){
    this.nome = "Melqui"
  }  
}
</script>