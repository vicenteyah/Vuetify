<template>
      <v-container class="mt-2" grid-list-lg>
            <v-layout class="mx-auto" row wrap>
                  <v-flex column wrap xs12 md4 lg3 v-for="(additional,index) in additionals" :key="index">
                       <v-card class="mx-auto" max-width="400">
                             <v-img class="white--text align-end" 
                             height="200" 
                             :src="additionals[index].imgurl">
                             </v-img>
                              <v-card-title>
                                   {{ additional.additionalName }}
                             </v-card-title>
                             <v-card-subtitle class="pb-0">
                                   Precio:$ {{ additional.price }}
                             </v-card-subtitle>
                             <v-card-actions>
                                   <v-btn v-if="!currentUser" color="orange" text rounded @click="dialog = !dialog"><v-icon>mdi-cart</v-icon> ordenar</v-btn>
                                   <v-btn v-if="currentUser" rounded  text color="primary" @click="getAItem(additional.id)"><v-icon>mdi-cart</v-icon>agregar al carrito</v-btn>
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
import additionalService from '../services/Additional.service'
export default {
      data:()=> ({
            additionals:[],
            dialog: false,
            message:'',
            alert: false
      }),
      computed: {
            currentUser(){
                  return this.$store.state.auth.user
            }
      },
      mounted(){
         additionalService.getAdditional().then(response => {
               this.additionals = response.data
         })
      },
      methods:{
            getAItem(id){
               var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
               additionalService.getAnAdditional(id).then(response => {
                  oldItems.push(response.data)
                  localStorage.setItem('itemsArray',JSON.stringify(oldItems))
                  this.message = 'Agregado al carrito'
                  this.alert = true
               })
            }
      }
}
</script>