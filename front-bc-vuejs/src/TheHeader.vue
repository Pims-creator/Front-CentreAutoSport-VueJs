<template>
  <ul>
    <li><img src="./assets/logovoituremodifie.png" alt="logo" height="80" width="80" /></li>
    <li>page principale</li>
    <li >page recherche</li>
    <li >page annonce individuel</li>
    <li > Se connecter </li>
    <li > se deconnecter </li>
  </ul>

</template>

<script>



export default {
  name: 'TheHeader'

}
</script>


<style scoped>

li {
  list-style: none;
  margin: 10px;
  color: rgba(224, 99, 59, 1);
  cursor: pointer;
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(28, 35, 33, 1);
}
button {
  background-color: coral;
  cursor: pointer;
}


</style>