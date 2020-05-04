<template>
 <v-container grid-list-lg>
   <v-layout row wrap>
     <v-flex column wrap xs12 sm6>
       <h1>{{ content }}</h1>
       <v-card class="my-2" v-for="(promotion,index) in promotions" :key="index">
         <!--<v-img :src="images[index].url" width="600" ></v-img> not working yet--> 
         <v-card-title><h2>{{ promotion.packagename }}</h2></v-card-title>
         <v-card-text>Descripcion: {{ promotion.description }}$</v-card-text>
         <v-card-text>Precio: {{ promotion.price }}$</v-card-text>
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

      },err =>{
        console.log(err);
      }
    );
  }
}
</script>
