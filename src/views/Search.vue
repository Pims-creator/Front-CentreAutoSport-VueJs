<template>
  <h2>search</h2>

  <form @submit="submitForm" class="d-flex flex-column">
    <div class="d-flex justify-content-center flex-column w-50">

      <div class="p-3">
        <label>marque</label>
        <select @change="getModeleByMarque($event)" v-model="form.marque" class="form-control">
          <option value="">Choississez une marque</option>
          <option v-for="marque in marques" :key="marque.nom"  >{{ marque.nom }}</option>
        </select>
      </div>

      <div class="p-3">
        <label>modele</label>
        <select v-model="form.modele" class="form-control">
          <option value="">Choississez un modele</option>
          <option v-for="modele in modeles" :key="modele.nom" >{{ modele.nom }}</option>
        </select>
      </div>

      <div class="p-3">
        <label>Carburant</label>
        <select v-model="form.carburant" class="form-control">
          <option value="">Choississez un carburant</option>
          <option v-for="carburant in carburants" :key="carburant.nom"  >{{ carburant.nom }}</option>
        </select>
      </div>

      <div class="p-3">
        <label>prix</label>
        <select v-model="form.prix" class="form-control">
          <option value="">Choississez une fourchette de  prix</option>
          <option value="0..5000">Entre 0 et 5000</option>
          <option value="5000..20000">Entre 5000 et 20000</option>
          <option value="2000..50000">Entre 20000 et 50000</option>
          <option value="50000..200000">Entre 50000 et 200000</option>
        </select>
      </div>


      <div class="p-3">
        <label>annee</label>
        <select v-model="form.annee" class="form-control">
          <option value="">Choississez une fourchette d annee</option>
          <option value="1980..1990">Entre 1980 et 1990</option>
          <option value="1990..2000">Entre 1990 et 2000</option>
          <option value="2000..2010">Entre 2000 et 2010</option>
          <option value="2010..2020">Entre 2010 et 2020</option>
          <option value="2021..2021">2021</option>
        </select>
      </div>

      <div class="p-3">
        <label>kilometrage</label>
        <select v-model="form.kilometrage" class="form-control">
          <option value="">Choississez une fourchette de kilometrage</option>
          <option value="0..10000">Entre 0 et 10000</option>
          <option value="10000..50000">Entre 100000 et 50000</option>
          <option value="50000..100000">Entre 500000 et 100000</option>
          <option value="2010..250000">Entre 100000 et 250000</option>
        </select>
      </div>

    </div>


    <button type="submit" class="btn btn-primary">Rechercher</button>


 </form>

      <button class="btn btn-primary" @click="testSubmitAll" >simualtion Search All</button>

<voiture-light v-for="voiture in voitures" :voiture="voiture" :key="voiture.id" ></voiture-light>

</template>

<script>

import voitureLight from "../components/voitureLight";
import axios from "axios";

export default {
  name: 'Search',
  data() {
    return{
      form:{
        marque:'',
        modele:'',
        carburant:'',
        prix:'',
        annee:'',
        kilometrage:'',
        estManuel:'',
      },
      voitures : [],
      marques : '',
      modeles : '',
      carburants:'',
    }
  },
  mounted() {
    axios
      .get('https://127.0.0.1:8000/api/marques')
      .then(response =>{
        this.marques = response.data['hydra:member'];
      });
    axios
       .get('https://127.0.0.1:8000/api/carburants')
        .then(response =>{
          this.carburants = response.data['hydra:member'];
        })

  },
  components: {
    voitureLight
  },
  methods:{
    submitForm(){
      axios
        .get(`https://127.0.0.1:8000/api/annonces?page=1&modele.nom=${this.modele}&modele.marque.nom=${this.marque}&prix%5Bbetween%5D=${this.prix}&kilometrage%5Bbetween%5D=${this.kilometrage}&annee%5Bbefore%5D=2020&annee%5Bafter%5D=1980`)
    },
    testSubmitAll(){
      axios
          .get('https://127.0.0.1:8000/api/annonces?page=1')
          .then(response => {
            this.voitures = response.data['hydra:member'];
            console.log(this.voitures)
          })
        },
    getModeleByMarque(event){
      console.log(event)
      axios
        .get('https://127.0.0.1:8000/api/modeles?page=1&marque.nom=' + event.target.value)
        .then(response =>{
          console.log(response.data['hydra:member']);
          this.modeles = response.data['hydra:member']
        })
    }
  }
}
</script>

<style>

</style>