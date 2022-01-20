<template>
<section class="selecao">
  <div class="genero">
    <label> Genêro</label>
    <select v-model="tipo" class="genero-selecet">
      <option selected value="">Escolha</option>
      <option v-for="genero in generos" :key="genero.id" :value="genero.id" :selected="genero.id === tipo" >
        {{genero.nome}}
      </option>
    </select>
  </div>
  <div  class="comida">
    <label>  Comida</label>
    <select v-model="comida" class="comida-selecet">
      <option selected value="">Escolha</option>
      <option :value="doce" :selected="doce === comida">Doce</option>
      <option :value="salgado" :selected="salgado === comida">Salgada</option>
    </select>
  </div>
  <div class="bebida">
    <label>  Bebida</label>
    <select v-model="bebida" class="bebida-selecet">
      <option selected value="">Escolha</option>
      <option :value="quente" :selected="quente === bebida">Quente</option>
      <option :value="frio" :selected="frio === bebida">Frio</option>
    </select>
  </div>
  <div class="selecao-btn">
    <button @click="selectMovie">
      SELECT MOVIE
    </button>
  </div>
    <div class="alerta" :class="{erro: ativoErro}">
      <p class="mensagemAlerta">Algo não foi selecionado</p>
  </div>
<div :class="{ativo: ativoSelecionados}" @click="clickForaSelecionados" class="selecionados" v-if="filmeSelecionado && bebidaSelecionado && comidaSelecionado">
  <div class="selecionados-container">
    <button class="selecionados_fechar" @click="ativoSelecionados = false">X</button>
    <h2>Filme</h2>
    <p>{{filmeSelecionado.nome}}</p>
    <h2>Comida</h2>
    <p>{{comidaSelecionado.nome}}</p>
    <h2>Bebida</h2>
    <p>{{bebidaSelecionado.nome}}</p>
  </div>
</div>
</section>
</template>
<script>
export default {
name: "Selecao",
data(){
  return{
    tipo: '',
    doce: 'doce',
    salgado: 'salgado',
    quente: 'quente',
    frio: 'frio',
    ativoErro: false,
    ativoSelecionados: false,
    comida: '',
    comidas: null,
    comidaSelecionado: null,
    filterComida: null,
    bebida: '',
    bebidas: null,
    bebidaSelecionado: null,
    filterBebidas: null,
    filmeSelecionado: null,
    filterFilme: null,
    filmes: null, 
    generos: null,
  }
},
methods:{
fetchGeneros(){
  fetch('http://localhost:3000/generos')
  .then(response => response.json())
  .then(response => {
    this.generos = response
  })
},
fetchFlimesPorGenero(){
  fetch('http://localhost:3000/filmesPorGenero')
  .then(response => response.json())
  .then(response => {
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
selectMovie(){
  if (this.tipo !== "" && this.bebida !== "" && this.comida !== ""){

    this.filterFilme = this.filmes.filter((filme) => filme.genero === this.tipo )
    this.filmeSelecionado =  this.filterFilme[Math.floor((Math.random() * this.filterFilme.length))]

    this.filterBebida = this.bebidas.filter((bebida) => bebida.tipo === this.bebida )
    this.bebidaSelecionado =  this.filterBebida[Math.floor((Math.random() * this.filterBebida.length))]

    this.filterComida = this.comidas.filter((comida) => comida.tipo === this.comida )
    this.comidaSelecionado =  this.filterComida[Math.floor((Math.random() * this.filterComida.length))]

    this.ativoSelecionados = true
  } else {
     this.ativoErro = true 
     setTimeout(()=>{
       this.ativoErro = false
     }, 1500)
  }
},
clickForaSelecionados(event){
  if (event.currentTarget === event.target) {
    this.ativoSelecionados = false
  }
}
},
created(){
  this.fetchGeneros()
  this.fetchFlimesPorGenero()
  this.fetchComida()
  this.fetchBebida()
}
}
</script>
<style scoped>
.selecao{
  background: white;
  border-radius: 500px;
  width: 400px;
  height: 400px;
  align-items: center;
  padding: 60px;
  display: grid;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
}
.selecao label{
  color:#b52325;
  font-size: 1rem;
  margin-right: 20px;
  text-transform: uppercase;
}
.selecao select{
    outline:none;
    background: white;
    border: 3px solid #b52325;
    width: 30%;
    height: 40px;
    border-radius: 100px;
    color: #b52325;
}
.mensagemAlerta {
  background: #ffffff;
  color: #b52325;
  padding: 20px 40px;
  display: inline-block;
  border: 2px solid  red;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
}
.alerta {
  position: absolute;
  top: 20px;
  left: 0px;
  z-index: 1;
  width: 100%;
  text-align: center;
  display: none;
}
.alerta.erro{
  display: block;
  animation: fadeInDown 0.3s forwards;
}
.selecao-btn button{
  background: transparent;
  border-radius: 200px;
  border: 2px solid #b52325;
  padding: 20px 60px;
  color: #b52325;
  cursor:pointer;

}
.selecionados{
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 20px;
  display: none;
}
.selecionados-container{
  border-radius: 500px;
  color: red;
  z-index: 1;
  display: inline-grid;
  position: relative;
  margin: 80px auto;
  background: #ffffff;
  padding: 40px;
  width: 500px;
  height: 500px;
  -webkit-animation: fadeInDown forwards 0.3s;
  animation: fadeInDown forwards 0.3s;
}
.selecionados_fechar{
  border: 1px solid #b52325;
  border-radius: 50%;
  color: #b52325;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 30px;
  right: 120px;
  font-size: 1rem;
  background: #ffffff;

  cursor: pointer;
}
.selecionados.ativo{
display: block
}
.selecionados p,h2{
 margin: 20px
}
</style>