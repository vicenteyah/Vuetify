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
               <v-card width="800" class="mx-auto mt-1"  v-for="(item,index) in taskList" :key="index">
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
                       <v-btn rounded text color="error" @click="deleteItem(item.id)">eliminar</v-btn>
                   </v-card-actions>
               </v-card>
           </v-flex>
       </v-layout>
       <v-layout>
           <v-flex>
               <v-card width="800" class="mx-auto mt-1" >
                   <v-card-title>Total a Comprar:$ {{ Total }}</v-card-title>
                   <v-card-actions>
                       <v-btn  rounded color="success">comprar carrito</v-btn>
                   </v-card-actions>
               </v-card>

           </v-flex>
       </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () =>({
        taskList:[],
        auxlist:[],
        flag: true,
        Total:0,
    }),
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }, 
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
        var oldItems = JSON.parse(localStorage.getItem('itemsArray'))
            this.taskList = oldItems
            
            //console.log(this.taskList)
        
           
    },
    created(){
        this.computeTotalPrice()
    },
    methods:{
        computeTotalPrice(){
            var oldItems = JSON.parse(localStorage.getItem('itemsArray'))
            this.taskList = oldItems
            for (let index = 0; index <= this.taskList.length; index++) {
                console.log(this.taskList)
                this.Total = this.Total + this.taskList[index].price;  
                
            }
            this.flag = false
            return this.Total
        },
        deleteItem(id){
            console.log(id)
            this.taskList = this.taskList.filter(el => el.id != id)
        },
    }
}
</script>

