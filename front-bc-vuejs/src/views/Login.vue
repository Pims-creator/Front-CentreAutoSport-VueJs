<template>
  <form v-on:submit.prevent="submitForm()" method="POST" class="d-flex flex-column">
    <div class="d-flex justify-content-center flex-column w-50">

      <div class="p-3">
        <label>email</label>
        <input v-model="email" type="email"  class="form-control">
      </div>
      <div class="p-3">
        <label>password</label>
        <input v-model="password" type="password"  class="form-control">
      </div>

      <input type="submit" class="btn btn-primary" value="Se connecter">

    </div>
  </form>

  <button @click="findUser"   type="button"  >voir son identifiant</button>
</template>

<script>

import axios from "axios";

export default {
  name: 'Login',
  data(){
    return{
      email : '',
      password : '',
      token:''
    }
  },
  methods:{
    submitForm() {

      axios.post('https://127.0.0.1:8000/authentication_token', {
        email: this.email,
        password: this.password
      }).then(response => {
        this.token = 'Bearer ' + response.data.token;
        // localStorage.setItem('jwtToken','Bearer ' + response.data.token);
        localStorage.setItem('jwtToken', this.token)
        console.log(response);
      }).catch(e => {
        console.log(e)
      })

    },
    findUser(){
      axios.get('https://127.0.0.1:8000/api/users?page=1&email=' + this.email ,
          {
            'headers': {
              'Authorization': localStorage.getItem('jwtToken')
            }
          }
      ).then(response =>{
        console.log(response.data['hydra:member'][0]);
        localStorage.setItem('userId', response.data['hydra:member'][0]['id']);
        localStorage.setItem("userRoles", response.data['hydra:member'][0]['roles'][0]);
      })
    }
  }
}
</script>
