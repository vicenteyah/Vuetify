<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex column wrap xs12 sm4 md10 lg4 v-for="(pizza, index) in pizzas" :key="index">
                <v-card
                    class="mx-auto"
                    max-width="374"
                >
                    <v-img
                    height="250"
                    :src="pizzas[index].imgurl"
                    ></v-img>

                    <v-card-title> {{ pizza.pizzasName }} </v-card-title>

                    <v-card-text>

                    <div class="my-4 subtitle-1">
                        Precio: $ {{ pizza.price }}
                    </div>

                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-actions>
                    <v-btn v-if="!currentUser" color="info" rounded text @click="dialog = !dialog"><v-icon>mdi-cart</v-icon>ordenar</v-btn>
                    <v-btn v-if="currentUser" rounded text color="primary" @click="getAItem(pizza.id)"><v-icon>mdi-cart</v-icon>agregar al carrito</v-btn>
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
import PizzaService from '../services/pizzas.service.js'
export default {
    data: () => ({
      pizzas:[],
      dialog:false,
      message:'',
      alert:false
    }),
    computed:{
        currentUser(){
            return this.$store.state.auth.user
        }
    },
    mounted(){
        PizzaService.getPizzas().then(
            response => {
                console.log(response.data, 'this array'); 
                this.pizzas = response.data;               
            }
        )
    },
    methods:{
        getAItem(id){
            var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
            PizzaService.getAPizza(id).then(response => {
                console.log(response.data)
                oldItems.push(response.data)
                localStorage.setItem('itemsArray',JSON.stringify(oldItems));
                this.message = 'Agregado al carrito'
                this.alert = true
            })
        }
    }
  }
</script>