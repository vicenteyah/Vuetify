<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm14 md6 lg2>
                <v-card width="500" class="mt-1"><v-card-title>Promociones</v-card-title></v-card>
                <v-card width="500" class="mt-2"  v-for="(item,index) in promotions" :key="index">
                   <v-chip label color="primary" text-color="white" class="ml-0">
                       <v-icon left>mdi-label</v-icon>
                       id-product:{{item.id}}
                   </v-chip>
                   <v-card-subtitle>imgurl: {{item.imgurl}}</v-card-subtitle>
                   <v-card-text>descipción: {{item.description}}</v-card-text>
                   <v-card-text>precio:$ {{item.price}}</v-card-text>
                   <v-divider/>
                   <v-card-actions>
                       <v-btn rounded color="warning" class="mx-2" @click="updatePromotion(index)">Editar</v-btn>
                       <v-spacer/>
                       <v-btn rounded color="error" class="mx-2" @click="deletePromotion(item.id)" >Eliminar</v-btn>
                   </v-card-actions>
                </v-card>

                <v-card v-if="addPromotionForm" width="500" class="mt-1 mb-3 pa-3">
                    <v-form @submit.prevent="addPromotion">
                       <v-text-field label="url de la imagen" v-model="promotion.imgurl" />
                       <v-text-field label="Nombre del producto" v-model="promotion.packagename"/>
                       <v-textarea label="Descripción del producto" v-model="promotion.description"/>
                       <v-text-field label="Precio" v-model="promotion.price"/>
                       <v-divider/>
                       <v-btn block color="success" type="submit">crear nuevo</v-btn>
                    </v-form>
                </v-card>

                <v-card v-if="!addPromotionForm" width="500" class="mt-1 mb-3 pa-3">
                    <v-form @submit.prevent="putPromotion">
                       <v-text-field label="url de la imagen" v-model="promotion.imgurl" />
                       <v-text-field label="Nombre del producto" v-model="promotion.packagename"/>
                       <v-textarea label="Descripción del producto" v-model="promotion.description"/>
                       <v-text-field label="Precio"  v-model="promotion.price"/>
                       <v-divider/>
                       <v-btn block color="warning" type="submit">actualizar</v-btn>
                       <v-btn block color="error" @click="cancelUpdatePromotion">cancelar</v-btn>
                    </v-form>
                </v-card>

            </v-flex>
            <v-flex xs12 md6 lg2>
                <v-card width="500" class="mt-1"><v-card-title>Pizzas</v-card-title></v-card>
                <v-card width="500" class="mt-2"  v-for="(item,index) in pizzas" :key="index">
                   <v-chip label color="primary" text-color="white" class="ml-0">
                       <v-icon left>mdi-label</v-icon>
                       id-product:{{item.id}}
                   </v-chip>
                   <v-card-subtitle>imgurl: {{item.imgurl}}</v-card-subtitle>
                   <v-card-text>Nombre del Producto: {{item.pizzasName}}</v-card-text>
                   <v-card-text>Precio:$ {{item.price}}</v-card-text>
                   <v-divider/>
                   <v-card-actions>
                       <v-btn rounded color="warning" class="mx-2" @click="updatePizza(index)">Editar</v-btn>
                       <v-spacer/>
                       <v-btn rounded color="error" class="mx-2" @click="deletePizza(item.id)">Eliminar</v-btn>
                   </v-card-actions>
                </v-card>

                 <v-card v-if="addPizzaForm" width="500" class="mt-1 mb-3 pa-3">
                    <v-form @submit.prevent="addPizza">
                       <v-text-field label="url de la imagen" v-model="pizza.imgurl"/>
                       <v-text-field label="Nombre del producto" v-model="pizza.pizzasName"/>
                       <v-text-field label="Precio" v-model="pizza.price"/>
                       <v-divider/>
                       <v-btn block color="success" type="submit">crear nuevo</v-btn>
                    </v-form>
                </v-card>

                  <v-card v-if="!addPizzaForm" width="500" class="mt-1 mb-3 pa-3">
                    <v-form @submit.prevent="putPizza">
                       <v-text-field label="url de la imagen" v-model="pizza.imgurl"/>
                       <v-text-field label="Nombre del producto" v-model="pizza.pizzasName"/>
                       <v-text-field label="Precio" v-model="pizza.price"/>
                       <v-divider/>
                       <v-btn block color="warning" type="submit">Actualizar</v-btn>
                       <v-btn block color="error" @click="cancelUpdatePizza">cancelar</v-btn>
                    </v-form>
                </v-card>

            </v-flex>
        </v-layout>
        <v-snackbar v-model="snackbar">
            {{message}}
            <v-btn text color="info" @click="snackbar=false" >cerrar</v-btn>
        </v-snackbar>
    </v-container>
</template>
<script>
import promotionsService from '../services/promotions.service';
import pizzasService from '../services/pizzas.service'
import Pizza from '../models/pizza'
import Promotion from '../models/promotion'
export default {
    
    data:()=>({
        pizza: new Pizza('','',''),
        promotion: new Promotion('','','',''),
        pizzas:[],
        addPromotionForm: true,
        promotions:[],
        addPizzaForm: true,
        snackbar: false,
        message:''
    }),
    mounted(){
        promotionsService.getpromotions().then(response =>{
            this.promotions = response.data
        }),
        pizzasService.getPizzas().then(response =>{
            this.pizzas = response.data
        })
    },
    methods:{
        cancelUpdatePizza(){
            this.pizza.imgurl =''
            this.pizza.pizzasName = ''
            this.pizza.price = ''
            this.addPizzaForm = true
        },
        addPizza(){
            pizzasService.createPizzas(this.pizza).then(response => {
                console.log(response.data.message)
                this.message = response.data.message
                this.snackbar = true
            })
        },
        deletePizza(id){
            pizzasService.deletePizzas(id).then(response =>{
                console.log(response.data.message)
                this.message = response.data.message
                this.snackbar = true
            })
        },
        updatePizza(index){
            this.addPizzaForm = false
            const id = this.pizzas[index].id
            localStorage.setItem("idPizza",JSON.stringify(id))
            this.pizza.imgurl = this.pizzas[index].imgurl
            this.pizza.pizzasName = this.pizzas[index].pizzasName
            this.pizza.price = this.pizzas[index].price
        },
        putPizza(){
            pizzasService.updatePizzas(this.pizza,localStorage.getItem("idPizza")).then(response=>{
                console.log(response)
                localStorage.removeItem("idPizza")
                this.message = response.data.message
                this.pizza.imgurl =''
                this.pizza.pizzasName = ''
                this.pizza.price = ''
                this.snackbar = true
                this.addPizzaForm = true
            })
        },
        addPromotion(){
            promotionsService.createPromotion(this.promotion).then(response=>{
                console.log(response)
                this.message =  response.data.message
                this.snackbar = true
            })
        },
        deletePromotion(id){
            promotionsService.deletePromotion(id).then(response =>{
                console.log(response)
                this.message = response.data.message
                this.snackbar= true
            })
        },
        updatePromotion(index){
            this.addPromotionForm = false
            const id = this.promotions[index].id
            localStorage.setItem("idPromotion",JSON.stringify(id))
            this.promotion.imgurl = this.promotions[index].imgurl
            this.promotion.packagename = this.promotions[index].packagename
            this.promotion.description = this.promotions[index].description
            this.promotion.price = this.promotions[index].price

        },
        putPromotion(){
           promotionsService.updatePromotion(this.promotion,localStorage.getItem("idPromotion")).then(response => {
               console.log(response)
               localStorage.removeItem("idPromotion") 
               this.message = response.data.message
               this.promotion.imgurl = ''
               this.promotion.packagename = ''
               this.promotion.description = ''
               this.promotion.price = ''
               this.snackbar = true
               this.addPromotionForm = true
            })
        },
        cancelUpdatePromotion(){
            this.promotion.imgurl = ''
            this.promotion.packagename = ''
            this.promotion.description = ''
            this.promotion.price = ''
            localStorage.removeItem("idPromotion")
            this.addPromotionForm = true
        }
    }
}
</script>
