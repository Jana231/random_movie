<template>
  <div id="app">
    <main id="main">
      <router-view/>
    </main>
  </div>
</template>

<style>
*{
 box-sizing:  border-box;
}
body, ul, li, h1, h2, p{
  padding: 0px;
  margin: 0px;
}
ul {
  list-style: none;
}
body{
  font-family: Helvetiva, Arial, sans-serif;
  color: #345;
  background: url("./assets/fundo.webp") no-repeat bottom;
  background-position: center;
  background-size: cover;
}
a{
  color: #345;
  text-decoration: none;
}
img{
  max-width: 100%;
  display: block;
}

#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#main{
  flex: 1;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
}
.btn {
  display: block;
  margin: 20px;
  padding: 10px 20px;
  background:white;
  border-radius: 100px;
  color: #b52325;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  width: 400px;
  height: 200px;
}

.btn:hover {

  transform: scale(1.1);
}
</style>
