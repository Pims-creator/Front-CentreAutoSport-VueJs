<template>

<router-link :to="{ name: 'voiture', params: {id: voiture.id}}" class="cardVoiture">
  <img :src="voiture.photos[0].path" alt="imagevoiture" height="200">
  <div class="idvoiture">
    <h2>{{ voiture.modele.marque.nom }} {{ voiture.modele.nom }}  <span class="prix">{{ voiture.prix }} €</span>  </h2>
    <p> {{ voiture.kilometrage }} Km</p>
    <p> {{ voiture.carburant.nom }}</p>
    <p> {{ voiture.annee }}</p>
  </div>
</router-link>


</template>

<script>


export default {
  props:['voiture'],



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
