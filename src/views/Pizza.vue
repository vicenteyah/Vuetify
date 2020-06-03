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
                    <v-btn
                        color="deep-purple lighten-2"
                        rounded text
                    >
                        <v-icon>mdi-cart</v-icon>
                        Ordenar
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import PizzaService from '../services/pizzas.service.js'
export default {
    data: () => ({
      pizzas: []
    }),
    mounted(){
        PizzaService.getPizzas().then(
            response => {
                console.log(response.data, 'this array'); 
                this.pizzas = response.data;               
            }
        )
    }
  }
</script>