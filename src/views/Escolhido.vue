<template>
  <div class="escolhido">
    <div class="filme">
      <h2>Filme</h2>
      <p> {{$store.state.filmeEscolhido.nome}}</p>
    </div>
    <div class="comida">
      <h2>Comida</h2>
      <p> {{$store.state.comidaEscolhida.nome}}</p>
    </div>
    <div class="bebida">
      <h2>Bebida</h2>
    <p> {{$store.state.bebidaEscolhida.nome}}</p>
    </div>
  </div>
</template>
<script>
export default {
name: 'Escolhido'
}
</script>
<style scoped>
.escolhido{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}
.filme{
color: #b52325;
font-size: 1rem;
z-index: 1;
width: 300px;
height: 300px;
background: #fff;
max-width: 900px;
padding: 90px 20px;
margin: 0 auto;
box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 500px;
}
.bebida{
color: #b52325;
font-size: 1rem;
z-index: 1;
width: 300px;
height: 300px;
background: #fff;
max-width: 900px;
padding: 100px 20px;
margin: 0 auto;
box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 500px;
}
.comida{
color: #b52325;
font-size: 1rem;
z-index: 1;
width: 300px;
height: 300px;
background: #fff;
max-width: 900px;
padding: 100px 20px;
margin: 0 auto;
box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 500px;
}
</style>