<template>
    <v-container grid-list-lg class="deep-purple darken-1 mb-3 mt-2">
        <v-layout row wrap>
            <v-flex column wrap xs12 sm4 md10 lg3>
                <v-card width="400" class="mt-1 deep-orange lighten-3"> <v-row justify="center"> <v-card-title>Promociones</v-card-title></v-row></v-card>
                <v-card width="400" class="mt-2"  v-for="(item,index) in promotions" :key="index">
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

                <v-card v-if="addPromotionForm" width="400" class="mt-1 mb-3 pa-3">
                    <v-form v-model="valid" lazy-validation ref="form" @submit.prevent="addPromotion">
                       <v-text-field :rules="campos" label="url de la imagen" v-model="promotion.imgurl"  required/>
                       <v-text-field :rules="campos" label="Nombre del producto" v-model="promotion.packagename" required/>
                       <v-textarea :rules="campos" label="Descripción del producto" v-model="promotion.description" required/>
                       <v-text-field :rules="campos" label="Precio" v-model="promotion.price" required/>
                       <v-divider/>
                       <v-btn :disabled="!valid" block color="success" class="mr-4" type="submit" @click="validate">crear nuevo</v-btn>
                    </v-form>
                </v-card>

                <v-card v-if="!addPromotionForm" width="500" class="mt-1 mb-3 pa-3">
                    <v-form v-model="valid" lazy-validation ref="form" @submit.prevent="putPromotion">
                       <v-text-field :rules="campos" label="url de la imagen" v-model="promotion.imgurl" required/>
                       <v-text-field :rules="campos" label="Nombre del producto" v-model="promotion.packagename" required/>
                       <v-textarea  :rules="campos" label="Descripción del producto" v-model="promotion.description" required/>
                       <v-text-field :rules="campos" label="Precio"  v-model="promotion.price" required/>
                       <v-divider/>
                       <v-btn :disabled="!valid" block color="warning" type="submit" @click="validate">actualizar</v-btn>
                       <v-btn block color="error" @click="cancelUpdatePromotion">cancelar</v-btn>
                    </v-form>
                </v-card>

            </v-flex>
    <!--______________________________________PIZZAS SECTION_______________________________________-->
            <v-flex column wrap xs12 sm4 md10 lg3>
                <v-card width="400" class="mt-1 green accent-3"><v-row justify="center"> <v-card-title>Pizzas</v-card-title></v-row></v-card>
                <v-card width="400" class="mt-2"  v-for="(item,index) in pizzas" :key="index">
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

                 <v-card v-if="addPizzaForm" width="400" class="mt-1 mb-3 pa-3">
                    <v-form v-model="valid" lazy-validation ref="form" @submit.prevent="addPizza">
                       <v-text-field :rules="campos" label="url de la imagen" v-model="pizza.imgurl" required/>
                       <v-text-field :rules="campos" label="Nombre del producto" v-model="pizza.pizzasName" required/>
                       <v-text-field :rules="campos" label="Precio" v-model="pizza.price" required/>
                       <v-divider/>
                       <v-btn :disabled="!valid" block color="success" type="submit" @click="validate">crear nuevo</v-btn>
                    </v-form>
                </v-card>

                <v-card v-if="!addPizzaForm" width="500" class="mt-1 mb-3 pa-3">
                    <v-form v-model="valid" lazy-validation ref="form" @submit.prevent="putPizza">
                       <v-text-field :rules="campos" label="url de la imagen" v-model="pizza.imgurl" required/>
                       <v-text-field :rules="campos" label="Nombre del producto" v-model="pizza.pizzasName" required/>
                       <v-text-field :rules="campos" label="Precio" v-model="pizza.price" required/>
                       <v-divider/>
                       <v-btn :disabled="!valid" block color="warning" type="submit" @click="validate">Actualizar</v-btn>
                       <v-btn block color="error" @click="cancelUpdatePizza">cancelar</v-btn>
                    </v-form>
                </v-card>
            </v-flex>
    <!--__________________________ADDITIONALS SECTION ________________________________-->
            <v-flex column wrap xs12 sm4 md10 lg3>
                <v-card width="400" class="mt-1 orange lighten-2"><v-row justify="center"> <v-card-title>Adicionales</v-card-title></v-row></v-card>
                <v-card width="400" class="mt-2" v-for="(additional,index) in additionals" :key="index">
                    <v-chip label color="info" text-color="white" class="ml-0">
                        <v-icon left>mdi-label</v-icon>
                        id-product: {{additional.id}}
                    </v-chip>
                    <v-card-subtitle>imgurl: {{additional.imgurl}}</v-card-subtitle>
                    <v-card-text>Nombre del Producto: {{additional.additionalName}}</v-card-text>
                    <v-card-text>Precio:$ {{additional.price}}</v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-btn rounded color="warning" @click="updateAdditional(index)">editar</v-btn>
                        <v-spacer/>
                        <v-btn rounded color="error" @click="deleteAdditional(additional.id)">eliminar</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card v-if="additionalForm" width="400" class="mt-1 mb-3 pa-3">
                    <v-form v-model="valid" lazy-validation ref="form" @submit.prevent="addAdditional">
                       <v-text-field :rules="campos" label="url de la imagen" v-model="additional.imgurl"/>
                       <v-text-field :rules="campos" label="Nombre del producto" v-model="additional.additionalName"/>
                       <v-text-field :rules="campos" label="Precio" v-model="additional.price"/>
                       <v-divider/>
                       <v-btn :disabled="!valid" block color="success" type="submit" @click="validate">crear nuevo</v-btn>
                    </v-form>
                </v-card>

                <v-card v-if="!additionalForm" width="500" class="mt-1 mb-3 pa-3">
                    <v-form v-model="valid" lazy-validation ref="form" @submit.prevent="putAdditional">
                       <v-text-field :rules="campos" label="url de la imagen" v-model="additional.imgurl" required/>
                       <v-text-field :rules="campos" label="Nombre del producto" v-model="additional.additionalName" required/>
                       <v-text-field :rules="campos" label="Precio" v-model="additional.price" required/>
                       <v-divider/>
                       <v-btn :disabled="!valid" block color="warning" type="submit" @click="validate">actualizar</v-btn>
                       <v-btn block color="error" @click="cancelAdditionalUpdate">cancelar</v-btn>
                    </v-form>
                </v-card>
            </v-flex>
<!--_______________________________________EXTRAS SECTION __________________________________________________________-->
            <v-flex column wrap xs12 sm4 md10 lg3>
                <v-card width="400" class="mt-1 cyan accent-2"><v-row justify="center"> <v-card-title>Extras</v-card-title></v-row></v-card>
                <v-card width="400" class="mt-2" v-for="(extra,index) in extras" :key="index">
                    <v-chip label color="info" text-color="white" class="ml-0">
                        <v-icon>mdi-label</v-icon>
                        id-product: {{extra.id}}
                    </v-chip>
                    <v-card-subtitle>imgurl: {{extra.imgurl}}</v-card-subtitle>
                    <v-card-text>Nombre del Producto: {{extra.extraName}}</v-card-text>
                    <v-card-text>Precio:$ {{extra.price}}</v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-btn rounded color="warning" @click="updateExtra(index)">editar</v-btn>
                        <v-spacer/>
                        <v-btn rounded color="error" @click="deleteExtra(extra.id)">eliminar</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card v-if="addExtraForm" width="400" class="mt-1 mb-3 pa-3">
                    <v-form v-model="valid" lazy-validation ref="form" @submit.prevent="addExtra">
                        <v-text-field :rules="campos" v-model="extra.imgurl" label="url de la imagen" required/>
                        <v-text-field :rules="campos" v-model="extra.extraName" label="Nombre del producto" required/>
                        <v-text-field :rules="campos" v-model="extra.price" label="Precio" required/>
                        <v-divider/>
                        <v-btn :disabled="!valid" block color="success" type="submit" @click="validate">crear nuevo</v-btn>
                    </v-form>
                </v-card>

                <v-card v-if="!addExtraForm" width="400" class="mt-1 mb-3 pa-3">
                    <v-form v-model="valid" lazy-validation ref="form" @submit.prevent="putExtra">
                        <v-text-field :rules="campos" v-model="extra.imgurl" label="url de la imagen" required/>
                        <v-text-field :rules="campos" v-model="extra.extraName" label="Nombre del producto" required/>
                        <v-text-field :rules="campos" v-model="extra.price" label="Precio" required/>
                        <v-divider/>
                        <v-btn :disabled="!valid" block color="warning" type="submit" @click="validate">actualizar</v-btn>
                        <v-btn block color="error" @click="cancelExtraUpdate">cancelar</v-btn>
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
import additionalService from '../services/Additional.service'
import extraService from '../services/Extra.service'
import Pizza from '../models/pizza'
import Promotion from '../models/promotion'
import Additional from '../models/additional'
import Extras from '../models/extras'
export default {
    
    data:()=>({
        pizza: new Pizza('','',''),
        promotion: new Promotion('','','',''),
        additional: new Additional('','',''),
        extra: new Extras('','',''),
        valid: true,
        pizzas:[],
        addPromotionForm: true,
        promotions:[],
        additionals:[],
        extras:[],
        addPizzaForm: true,
        additionalForm: true,
        addExtraForm:true,
        snackbar: false,
        message:'',
         campos:[  v => !!v || 'El campo es requerido']
    }),
    mounted(){
        promotionsService.getpromotions().then(response =>{
            this.promotions = response.data
        }),
        pizzasService.getPizzas().then(response =>{
            this.pizzas = response.data
        }),
        additionalService.getAdditional().then(response =>{
            this.additionals = response.data
        }),
        extraService.getExtra().then(response => {
            this.extras = response.data
        })
    },
    methods:{
        validate(){
           this.$refs.form.validate()
        },
        cancelUpdatePizza(){
            localStorage.removeItem('idPizza')
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
                setTimeout(() => (location.reload()), 2000)
            })
        },
        deletePizza(id){
            pizzasService.deletePizzas(id).then(response =>{
                console.log(response.data.message)
                this.message = response.data.message
                this.snackbar = true
                setTimeout(() => (location.reload()), 2000)
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
                setTimeout(() => (location.reload()), 2000)
            })
        },
        addPromotion(){
            promotionsService.createPromotion(this.promotion).then(response=>{
                console.log(response)
                this.message =  response.data.message
                this.snackbar = true
                setTimeout(() => (location.reload()), 2000)
            })
        },
        deletePromotion(id){
            promotionsService.deletePromotion(id).then(response =>{
                console.log(response)
                this.message = response.data.message
                this.snackbar= true
                setTimeout(() => (location.reload()), 2000)
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
               setTimeout(() => (location.reload()), 3000)
            })
        },
        cancelUpdatePromotion(){
            this.promotion.imgurl = ''
            this.promotion.packagename = ''
            this.promotion.description = ''
            this.promotion.price = ''
            localStorage.removeItem("idPromotion")
            this.addPromotionForm = true
        },
        addAdditional(){
            additionalService.createAdditional(this.additional).then(response =>{
                this.message = response.data.message
                this.snackbar = true
                setTimeout(() => (location.reload()), 2000)
            })
        },
        deleteAdditional(id){
            additionalService.deleteAdditional(id).then(response =>{
                this.message  = response.data.message
                this.snackbar = true
                setTimeout(() => (location.reload()), 2000)
            })
        },
        updateAdditional(index){
            this.additionalForm = false
            const id = this.additionals[index].id
            localStorage.setItem("idAdditional",JSON.stringify(id))
            this.additional.imgurl = this.additionals[index].imgurl
            this.additional.additionalName = this.additionals[index].additionalName
            this.additional.price = this.additionals[index].price
        },
        putAdditional(){
            additionalService.updateAdditional(this.additional,localStorage.getItem('idAdditional')).then(response => {
                localStorage.removeItem('idAdditional')
                this.message = response.data.message
                this.additional.imgurl = ''
                this.additional.additionalName = ''
                this.additional.price = ''
                this.snackbar = true
                this.additionalForm = true
                setTimeout(() => (location.reload()), 2000)
            })
        },
        cancelAdditionalUpdate(){
            localStorage.removeItem('idAdditional')
            this.additional.imgurl = ''
            this.additional.additionalName = ''
            this.additional.price = ''
            this.additionalForm = true
        },
        addExtra(){
            extraService.createExtra(this.extra).then(response => {
                this.message = response.data.message
                this.snackbar = true
                setTimeout(() => (location.reload()), 2000)
            })
        },
        deleteExtra(id){
            extraService.deleteExtra(id).then(response => {
                this.message =  response.data.message
                this.snackbar = true
                setTimeout(() => (location.reload()), 2000)
            })
        },
        updateExtra(index){
            this.addExtraForm = false
            const id = this.extras[index].id
            localStorage.setItem('idExtra',JSON.stringify(id))
            this.extra.imgurl = this.extras[index].imgurl
            this.extra.extraName = this.extras[index].extraName
            this.extra.price = this.extras[index].price
        },
        cancelExtraUpdate(){
            localStorage.removeItem('idExtra')
            this.extra.imgurl = ''
            this.extra.extraName = ''
            this.extra.price = ''
            this.addExtraForm =  true
        },
        putExtra(){
            extraService.updateExtra(this.extra,localStorage.getItem('idExtra')).then(response => {
                localStorage.removeItem('idExtra')
                this.extra.imgurl = ''
                this.extra.extraName = ''
                this.extra.price = ''
                this.message = response.data.message
                this.snackbar = true
                this.addExtraForm =  true
                setTimeout(() => (location.reload()), 2000)
            })
        }
    }
}
</script>
