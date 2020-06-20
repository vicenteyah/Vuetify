<template>
  <v-container>
    <v-card width="700" class="mx-auto mt-5 teal lighten-5">
        <v-card-title><strong>Perfil de: {{ currentUser.username }}</strong></v-card-title>
        <v-card-text><strong>autorización:</strong>
            {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
        </v-card-text>
        <v-card-text>
            <strong>uuid:</strong>
            {{currentUser.id}}
        </v-card-text>
        <v-card-text>
            <strong>Email:</strong>
            {{currentUser.email}}
        </v-card-text>
        <v-card-text v-for="(role,index) in currentUser.roles" :key="index">
            <strong>Role:</strong>{{ role }}
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-col>
            <v-row justify="center">
                <v-btn v-if="status" rounded color="info" @click="dialog=!dialog">Completar mi información</v-btn>
                <v-btn v-if="!status" rounded color="warning" @click="dialog2=!dialog2">Modificar información</v-btn>
            </v-row>
          </v-col>
        </v-card-actions>
    </v-card>
    
    <v-card v-if="status2" width="700" class="mx-auto mt-3">
      <v-card-title><strong>Nombre: {{personal.nameData}}</strong></v-card-title>
      <v-card-text><strong>Dirección: {{personal.addressData}}</strong></v-card-text>
      <v-card-text><strong>Telefono: </strong>{{personal.phoneData}}</v-card-text>
       <v-card-text><strong>Método de Pago: {{personal.paymentMeth}}</strong></v-card-text>
    </v-card>

    <v-row justify="center">
      <v-dialog v-model="dialog"  max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Completar Información</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="completeData">
               <v-row>
                 <v-col cols="12" sm="5" md="3">
                    <v-select v-model="user.userId" label="uuid del usuario" :items="[currentUser.id]" required :rules="campos"/>
                 </v-col>
                 <v-col cols="12"  md="7">
                    <v-text-field v-model="user.nameData" label="Nombre completo" required :rules="campos"/>
                 </v-col>
                 <v-col cols="12" md="7">
                    <v-text-field v-model="user.addressData" label="Dirección" required :rules="campos"/>
                 </v-col>
                 <v-col cols="12" sm="5" md="5">
                     <v-text-field v-model="user.phoneData" label="Telefono" required :rules="campos" />
                 </v-col>
                 <v-col cols="12" sm="5" md="5">
                    <v-select v-model="user.paymentMeth" label="Método de pago" required :rules="campos" :items="['Efectivo','paypal','applepay','débito','crédito']"/>
                 </v-col>
                    <v-card-actions>
                        <v-btn color="blue darken-1"  text @click="dialog=!dialog">cerrar</v-btn>
                        <v-spacer/>
                        <v-btn color="blue darken-1" text type="submit" @click="dialog=!dialog"> <v-icon>mdi-email</v-icon> guardar</v-btn>
                    </v-card-actions>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog2"  max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Modificar Información</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="updateInfo(currentUser.id)">
               <v-row>
                 <v-col cols="12"  md="7">
                    <v-text-field v-model="user.nameData" label="Nombre completo" required :rules="campos"/>
                 </v-col>
                 <v-col cols="12" md="7">
                    <v-text-field v-model="user.addressData" label="Dirección" required :rules="campos"/>
                 </v-col>
                 <v-col cols="12" sm="5" md="5">
                     <v-text-field v-model="user.phoneData" label="Telefono" required :rules="campos" />
                 </v-col>
                 <v-col cols="12" sm="5" md="5">
                    <v-select v-model="user.paymentMeth" label="Método de pago" required :rules="campos" :items="['Efectivo','paypal','applepay','débito','crédito']"/>
                 </v-col>
                    <v-card-actions>
                        <v-btn color="blue darken-1"  text @click="dialog2=!dialog2">cerrar</v-btn>
                        <v-spacer/>
                        <v-btn color="blue darken-1" text type="submit" @click="dialog2=!dialog2"> <v-icon>mdi-email</v-icon> guardar</v-btn>
                    </v-card-actions>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>

    <v-snackbar v-model="snackbar">
      {{ notification }}
      <v-btn rounded text color="info" @click="snackbar=!snackbar">OK!</v-btn>
    </v-snackbar>

  </v-container> 
</template>
<script>
import personalData from '../services/Personal.service'
import personalInfo from '../models/personaldata'
export default {
  name: 'Profile',
  data: () => ({
    user: new personalInfo('','','','',''),
    dialog:false,
    dialog2:false,
    campos:[  v => !!v || 'El campo es requerido'],
    status:true,
    status2: false,
    personal:'',
    snackbar: false,
    notification: ''
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
  },
  created(){
    const id = this.currentUser.id
    personalData.getPersonalData(id).then(response =>{
      console.log(response.data)
      this.personal = response.data
      if(this.personal === ''){
        this.status=true
      }else { 
        this.status = false
        this.status2 = true
      }
    })
  },
  methods:{
    completeData(){
      personalData.completePersonalData(this.user).then(response => {
        console.log(response.data)
        this.notification = response.data.message
        this.snackbar = true
        setTimeout(() => (location.reload()), 3000)
      })
    },
    updateInfo(id){
      personalData.updatePersonalData(this.user,id).then(response => {
         this.notification = response.data.message
         this.snackbar = true
         setTimeout(() => (location.reload()), 3000)
      })
    }
  }
}
</script>