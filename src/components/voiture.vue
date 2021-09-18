<template>

<div v-if="voiture" class="cardVoiture">
  <h2>voiture seul</h2>
  <img  :src="voiture.photos[0].path" alt="imagevoiture" height="200">
  <p>{{voiture.description}}</p>
  <div class="idvoiture">
    <h2>{{ voiture.modele.marque.nom }} {{ voiture.modele.nom }}  <span class="prix">{{ voiture.prix }} €</span>  </h2>
    <p> {{ voiture.kilometrage }} Km</p>
    <p> {{ voiture.carburant.nom }}</p>
    <p> {{ voiture.annee }}</p>
  </div>
</div>


</template>

<script>


import axios from "axios";

export default {
  data(){
    return{
      voiture : '',
      carId: this.$route.params.id
    }

  },
  watch:{
    voiture : function (nval) {
      console.log(nval)
    }
  },

  mounted() {
    console.log(this.carId)

    axios
        .get(`https://127.0.0.1:8000/api/annonces/${this.carId}`)
        .then(response => {
          this.voiture = response.data;
          console.log(this.voiture)

        })

  }

}
</script>

<style scoped>
.cardVoiture{
  border: 1px solid rgba(224, 99, 59, 1);
  border-radius:5px;
  box-shadow: 8px 8px 8px 1px rgba(28, 35, 33, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 20px;
}
.idvoiture{
  margin: 20px;
  text-align:center;
}

.prix{
  color:rgba(224, 99, 59, 1);
}

</style>
