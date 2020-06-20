<template>
    <v-container>
        <v-layout row wrap>
            <v-flex column wrap xs12 sm5 md4 lg3 v-for="(extra,index) in extrasList" :key="index">
                <v-card class="mx-auto mt-2" width="400">
                    <v-img :src="extrasList[index].imgurl" height="200" width="400"/>
                    <v-card-title>{{ extra.extraName }}</v-card-title>
                    <v-card-subtitle>Precio:$ {{ extra.price }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn v-if="currentUser" rounded text color="success" @click="getAItem(extra.id)"><v-icon>mdi-cart</v-icon>agregar al carrito</v-btn>
                        <v-btn v-if="!currentUser" rounded text color="primary" @click="dialog=!dialog">Ordenar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <v-dialog v-model="dialog" width="400" persistent>
            <v-card>
            <v-card-title>Hey!</v-card-title>
            <v-card-text>Antes de ordenar debes iniciar sesión</v-card-text>
            <v-divider/>
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
import extraService from '../services/Extra.service'
export default {
    data: () => ({
        extrasList:[],
        dialog: false,
        alert: false,
        message: ''
    }),
    computed:{
        currentUser(){
            return this.$store.state.auth.user
        } 
    },
    mounted(){
        extraService.getExtra().then(response => {
            console.log(response.data)
            this.extrasList = response.data
        })
    },
    methods:{
        getAItem(id){
           var oldItems = JSON.parse(localStorage.getItem('itemsArray'))||[]
           extraService.getAExtra(id).then(response => {
               console.log(response.data)
               oldItems.push(response.data)
               localStorage.setItem('itemsArray',JSON.stringify(oldItems));
               this.message = 'Agregado al carrito'
               this.alert =  true
           })
        }
    }
}
</script>

