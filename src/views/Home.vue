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
     <v-flex column wrap xs12 sm4 lg2 v-for="(promotion,index) in promotions" :key="index">
       <v-card class="mx-auto mt-5"  width="400">
         <v-img :src="promotions[index].imgurl" height="200" width="400" ></v-img> 
         <v-card-title>{{ promotion.packagename }}</v-card-title>
         <v-card-text>Descripcion: {{ promotion.description }}</v-card-text>
         <v-card-text>Precio:$ {{ promotion.price }}</v-card-text>
         <v-card-actions>
            <v-btn v-if="currentUser" rounded text color="primary" @click="getAItem(promotion.id)"><v-icon>mdi-cart</v-icon>agregar al carrito</v-btn>
            <v-btn v-if="!currentUser" rounded text color="info" @click="dialog = !dialog"> <v-icon>mdi-cart</v-icon> ordenar</v-btn>
         </v-card-actions>
       </v-card>
     </v-flex>
   </v-layout>

    <v-dialog v-model="dialog" width="400" persistent>
      <v-card>
        <v-card-title>Hey!</v-card-title>
        <v-card-text>Antes de ordenar debes iniciar sesión</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn rounded text color="primary" @click="dialog=!dialog">Cerrar</v-btn>
          <v-btn rounded text color="error" to="/register"> registrate </v-btn>
          <v-btn rounded text color="green" to="/login">iniciar sesión</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar type="success" v-model="alert" width="400" class="mx-auto">
            {{ message }}
            <v-btn color="blue" text @click="alert=false" class="mx-5">cerrar</v-btn>
    </v-snackbar>
 </v-container>
 
</template>

<script>
import UserService from '../services/user.service';
import PromotionsService from '../services/promotions.service';
export default {
  data:() => ({
    promotions:[],
    content:'',
    dialog: false,
    alert: false,
    message: ''
  }),
  computed:{
    currentUser(){
      return this.$store.state.auth.user
    }
  },
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
  },
  
  methods:{
    getAItem(id){
      const ID = id;
      var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
      PromotionsService.getAPromotion(ID).then(response => {
        console.log(response.data)
        oldItems.push(response.data)
        
          localStorage.setItem('itemsArray', JSON.stringify(oldItems));
        
        this.message = 'Agregado al carrito'
        this.alert = true
      })
     
    }
  }
}
</script>
