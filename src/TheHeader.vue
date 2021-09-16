<template>
  <ul>
    <li><router-link to="/"><img src="./assets/logovoituremodifie.png" alt="logo" height="80" width="80" /></router-link></li>
    <li><router-link to="/">page principale</router-link></li>
    <li ><router-link to="Search">page recherche</router-link></li>
    <li v-if="!isConnect" ><router-link to="Login"> Se connecter</router-link></li>
    <li @click="disconnect" v-if="isConnect"> se deconnecter </li>
  </ul>

</template>

<script>



export default {
  name: 'TheHeader',
  data(){
    return {
      isConnect : false,
      userId: '',
      userRoles: ''
    }
  },
  methods:{
    disconnect(){
      localStorage.clear()
    }
  },
  mounted() {
    if(localStorage.getItem('jwtToken')){
      this.isConnect = true;
      this.userId = localStorage.getItem('userId');
      this.userRoles = localStorage.getItem('userRoles')
    }
  }
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