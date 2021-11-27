<template>
<div>
    <p v-if="estou_trabalhando">Estou trabalhando no momento</p>
    <p v-else>Estou em busca de novas oportunidades</p>
   <Technology />
    <div><button @click="showEmail">{{textoBotao}}</button></div>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    <p>
        Para acessar o meu portifolio:
        <a :href="meu_link" target="_blank">basta Clicar aqui</a>
    </p>
    <Picture />
</div>
</template>

<script>
import Technology from "./Technology.vue";
import Picture from "./Picture.vue";
export default {
    name: "Info",
    components: {
        Technology,
        Picture
    },
    props:{
        email: String,
        estou_trabalhando: Boolean,
    },
    data() {
        return {
            mostrar_email: false,

            meu_link: "https://melquivunge.com",
            textoBotao: 'Mostrar email',
        };
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email;
            if (!this.mostrar_email) {
              this.textoBotao = 'Mostrar e-mail'
            } else{
              this.textoBotao = 'Esconder e-mail'
            }
        },
    },
};
</script>
