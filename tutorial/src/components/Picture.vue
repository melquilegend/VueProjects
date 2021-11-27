<template>
<div>
    <img :src="avatar" :alt="descricao">
    <MudarImagem @mudar-imagem="trocarImage"/>
</div>
</template>
<script>
import MudarImagem from './MudarImagem.vue';

export default {
    nome:'Picture',
    components: {
       MudarImagem
    },
    data(){
        return{
            avatar:"/img/avatar.png",
            descricao: "Melqui Vunge"
        }
    },
    methods: {
        trocarImage(){
            this.avatar="/img/avatar2.png"
            
        }
    }
}
</script>