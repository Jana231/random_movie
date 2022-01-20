<template>
<section class="buttons">

  <router-link to="/escolhido">
  <div class="random">
    <button @click="choiceMovie" class="btn btn-random"> Filme Aleátorio</button>
  </div>
  </router-link>
    <router-link to="/selecao">
      <div class="selecao">
        <button class="btn btn-selecao"> Selecione o Filme</button>
      </div>
  </router-link>
</section>
</template>
<script>
export default {
  name: "Buttons",
  data(){
    return{
      comidas: null,
      bebidas: null,
      filmes: null,

    }
  },
  methods:{
    fetchFilme(){
      fetch("http://localhost:3000/filmes").then(response => response.json()).then(response => {
        this.filmes = response
      })
    },
    fetchComida(){
      fetch("http://localhost:3000/comidas").then(response => response.json()).then(response => {
        this.comidas = response
      })
    },
    fetchBebida(){
      fetch("http://localhost:3000/bebidas").then(response => response.json()).then(response => {
        this.bebidas = response
      })
    },
    choiceMovie(){
      this.$store.state.filmeEscolhido =  this.filmes[Math.floor((Math.random() * this.filmes.length))]
      this.$store.state.comidaEscolhida=  this.comidas[Math.floor((Math.random() * this.comidas.length))]
      this.$store.state.bebidaEscolhida =  this.bebidas[Math.floor((Math.random() * this.bebidas.length))]
    }
  },
created(){
  this.fetchFilme()
  this.fetchComida()
  this.fetchBebida()
}
}
</script>
<style scoped>
.buttons{
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid: gap 30px;
}
</style>