<template>
  <div class="topnav">
    <a class="active" href="#">Home</a>
    <a href="#">Sobre</a>
    <a href="#">Projectos</a>
    <a href="#">Contacto</a>
    <a href="#" v-if="esta_logado">Meu Perfil</a>
  </div>
</template>
<script>
export default {
  name:'Header',
  props:["esta_logado"]
};
</script>
<style scoped>
.topnav {
    background-color: #333;
    overflow: hidden;
}
.topnav a {
    float: left;
    color: #f2f2f2;
    text-align-last: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}
.topnav a:hover{
    background-color: #ddd;
    color: black;
}
.topnav a.active{
    background-color: #04AA6D;
    color:white;
}

</style>