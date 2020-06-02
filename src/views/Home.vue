<template>
 <v-container grid-list-lg>
    <v-container class="orange lighten-3 mt-2">
     <v-layout wrap class="mt-5">
      <v-flex xs12 md12>
        <h1 class="display-3 text-center teal--text font-weight-bold" align="start" >{{ content }}</h1>
      </v-flex>
      <v-flex xs12 md12 >
        <v-img class="mx-auto" src="../assets/logo-huasteco.svg" width="300" height="200"></v-img>
        <h2 class="text-center red--text" align="start">¡Promociones de la semana!</h2>
      </v-flex>
    </v-layout>
    </v-container>
   <v-layout row wrap>
     <v-flex column wrap xs12 sm4 v-for="(promotion,index) in promotions" :key="index">
       <v-card class="mx-auto mt-5"  width="400">
         <v-img :src="promotions[index].imgurl" height="200" width="400" ></v-img> 
         <v-card-title><h2>{{ promotion.packagename }}</h2></v-card-title>
         <v-card-text>Descripcion: {{ promotion.description }}</v-card-text>
         <v-card-text>Precio:$ {{ promotion.price }}</v-card-text>
         <v-card-actions><v-btn rounded color="info">ordenar</v-btn></v-card-actions>
       </v-card>
     </v-flex>
   </v-layout>
 </v-container>
</template>

<script>
import UserService from '../services/user.service';
import PromotionsService from '../services/promotions.service';
export default {
  data:() => ({
    promotions:[],
    content:''
  }),
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    PromotionsService.getpromotions().then(
      response => {
        console.log(response.data,'this array')
        this.promotions = response.data;

      }
    );
  }
}
</script>
