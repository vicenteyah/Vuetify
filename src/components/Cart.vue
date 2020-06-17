<template>
    <v-container>
       <v-layout>
           <v-flex>
               <v-card width="800" class="mx-auto">
                   <v-col>
                       <v-row class="mx-auto" justify="center">
                           <v-card-title>Carrito</v-card-title>
                       </v-row>
                   </v-col>
                   <v-divider></v-divider>
               </v-card>
                
                <v-card v-if="empty" width="800" class="mx-auto mt-1">
                    <v-col>
                        <v-row class="mx-auto" justify="center">
                            <v-card-subtitle> <h3>Tu carrito está vacío</h3></v-card-subtitle>
                        </v-row>
                    </v-col>
                </v-card>


               <v-card v-if="!empty" width="800" class="mx-auto mt-1"  v-for="(item,index) in taskList" :key="index">
                    <v-chip label color="primary" text-color="white" class="ml-0">
                       <v-icon left>mdi-label</v-icon>
                        <v-card-title>id del paquete: {{item.id}}</v-card-title>
                   </v-chip>
                   <v-card-subtitle>Nombre del Paquete: {{item.packagename}}</v-card-subtitle>
                   <v-card-subtitle>Descripción del producto: {{ item.description }}</v-card-subtitle>
                   <v-card-text>Precio:$ {{item.price}} </v-card-text>
                   <v-divider></v-divider>
                   <v-card-actions>
                       <v-spacer></v-spacer>
                       <!--<v-btn rounded text color="error" @click="deleteItem(item.id)">eliminar</v-btn> not working well--> 
                   </v-card-actions>
               </v-card>
           </v-flex>
       </v-layout>
       <v-layout>
           <v-flex>
               <v-card width="800" class="mx-auto mt-1" >
                   <v-card-title>Total a Comprar:$ {{ Total }}</v-card-title>
                   <v-card-actions>
                       <v-btn  rounded color="success"  @click="dialog=!dialog" >comprar carrito</v-btn>
                       <v-spacer></v-spacer>
                       <v-btn rounded  color="info" to="/">regresar a promociones</v-btn>
                       <v-spacer></v-spacer>
                       <v-btn rounded color="error" 
                       :loading="loading" 
                       :disabled="loading" 
                       @click="loader = 'loading'"
                       v-on:click="cancelCart"
                       >
                       cancelar carrito</v-btn>
                   </v-card-actions>
               </v-card>

           </v-flex>
        </v-layout>

    <v-dialog v-model="dialog" width="400" persistent>
      <v-card>
        <v-card-title>Hey!</v-card-title>
        <v-card-text>Estas seguro de realizar está compra</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn rounded text color="primary" @click="dialog=!dialog">cancelar</v-btn>
          <v-btn rounded text color="error" v-on:click="buyNow()" > Si, comprar ahora</v-btn>
        </v-card-actions>
      </v-card>
      <v-alert type="success" v-model="alert" width="400" class="mx-auto">
            Compra realizada con éxito
            <v-btn color="blue" text @click="alert=false" class="mx-5">cerrar</v-btn>
     </v-alert>
    </v-dialog>
    </v-container>
</template>

<script>
export default {
    data: () =>({
        taskList:[],
        auxlist:[],
        flag: true,
        Total:0,
        loading: false,
        loader: null,
        empty:true,
        dialog:false,
        alert:false
    }),
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
        var oldItems = JSON.parse(localStorage.getItem('itemsArray'))
            this.taskList = oldItems
            if (this.taskList === null){
                this.empty = true
            }else{
                this.empty = false
            }
            //console.log(this.taskList)
        
           
    },
    created(){
        this.computeTotalPrice()
    },
    methods:{
        computeTotalPrice(){
            var oldItems = JSON.parse(localStorage.getItem('itemsArray'))
            this.taskList = oldItems
            if(this.taskList === null){console.log("there is nothing in cart")}else{ 
                for (let index = 0; index <= this.taskList.length; index++) {
                    console.log(this.taskList)
                    this.Total = this.Total + this.taskList[index].price;  
                
                }
            }
            this.flag = false
            return this.Total
            
        },
        deleteItem(id){
            console.log(id)
            this.taskList = this.taskList.filter(el => el.id != id)
        },
        cancelCart(){
            localStorage.removeItem("itemsArray");
            location.reload()
            this.empty = true
        },
        buyNow(){
            console.log('has hecho click')
            var buyItems = JSON.parse(localStorage.getItem('itemsArray'))
            this.auxlist = buyItems
            localStorage.setItem('purchases', JSON.stringify(this.auxlist))
            localStorage.removeItem("itemsArray")
            this.alert = true
            location.reload()
            this.empty = true
            
        }
    },
    watch:{
        loader () {
            const l = this.loader
            this[l] = !this[l]
            setTimeout(() => (this[l] = false), 3000)
            this.loader = null
        }
    }
}    
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

