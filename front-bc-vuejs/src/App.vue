<template>
  <TheHeader></TheHeader>
  <div class="containerbloc">
  <router-view/>
  </div>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter"

export default {
  name:'app',
  components: {
    TheHeader,
    TheFooter
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.containerbloc{
  min-height: 30vh;
  max-width: 80%;
  margin: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:rgba(28, 35, 33, 1) ;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  color: inherit;

}




</style>
