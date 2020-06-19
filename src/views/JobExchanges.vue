<template>
    <v-container class="error mt-5 pa-5 mb-5" grid-list-lg>
        <v-card xs12 width="1200" class="mx-auto warning">            
            <v-col>
                <v-row justify="center">
                      <v-card-title>
                          <v-icon>mdi-briefcase</v-icon>
                          BOLSA DE TRABAJO
                      </v-card-title>
                </v-row>
            </v-col>  
            <v-divider/>
            <v-layout row wrap>
                <v-flex  fluid column wrap  class="pa-3 mb-3" xs12 sm4 v-for="(job, index) in jobs" :key="index">
                    <v-card xs12 width="500" class="mb-3 pa-3  mt-5">
                        <v-col>
                            <v-row justify="center">
                                <v-card-title>
                                    {{job.title}}
                                </v-card-title>
                            </v-row>
                            <v-row>
                                <p>
                                    <span>Requisitos</span>
                                    <v-card-subtitle> {{job.requesitos}} </v-card-subtitle>                                    
                                </p>
                                <p>
                                    <span>Sucursales</span>
                                    <v-card-subtitle> {{job.surcursal}} </v-card-subtitle>                                    
                                </p>                                
                            </v-row>
                            <v-divider/>
                            <v-card-actions>                                
                                <v-row justify="center">
                                    <v-btn color="info" rounded @click="dialog=!dialog">POSTULAR</v-btn>
                                </v-row>                                
                            </v-card-actions>
                        </v-col>                    
                    </v-card>                    
                </v-flex>                
            </v-layout>                      
        </v-card>
        <v-row>
            <v-dialog v-model="dialog" persistent max-width="600px">            
            <v-card>
                
                <v-card-title>
                <span class="headline">POSTULAR</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-form @submit.prevent="sendRequest">
                    <v-row>
                    <!--<v-col cols="12">
                        <v-card-text  v-for="(job, index) in jobs" :key="index"> Postulación para {{job.title}} </v-card-text>
                    </v-col>-->
                    
                    <v-col cols="12">
                        <v-text-field v-model="jobexchange.name" label="Nombre Completo*" required :rules="campos"></v-text-field>
                    </v-col>                   
                    <v-col cols="12" sm="2">
                        <v-text-field v-model="jobexchange.age" label="Edad*" required :rules="campos"></v-text-field>
                    </v-col>
                  <!-- <v-col cols="12" sm="10">
                        <v-text-field v-model="jobexchange." label="Email*" required :rules="campos"></v-text-field>
                    </v-col>-->
                    <v-col cols="12" md="3">
                         <v-select
                         v-model="jobexchange.gender"
                        :items="['Masculino', 'Femenino']"
                        label="Género*"
                        required
                        :rules="campos"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                         <v-select
                         v-model="jobexchange.occupation"
                        :items="['Estudiante', 'Desempleado','Nini']"
                        label="Ocupación*"
                        required
                        :rules="campos"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                         <v-select
                         v-model="jobexchange.civilstatus"
                        :items="['Soltero(a)', 'Casado(a)','Divorciado(a)']"
                        label="Estado Civil*"
                        required
                        :rules="campos"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="jobexchange.phone" label="Teléfono*" required :rules="phoneRule"></v-text-field>
                    </v-col>                    
                   <!-- <v-col cols="12" sm="6">
                         <v-select
                         v-model="jobexchange.store"
                        :items="['HuastecPizza Caucel', 'HuastecPizza Fco. Montejo', 'HuastecPizza Umán', 'HuastecPizza Centro']"
                        label="Sucursal*"
                        required
                        :rules="campos"
                        ></v-select>
                    </v-col>    TAG NOT WORKING YET--> 
                      <v-col cols="12" sm="6">
                         <v-select
                         v-model="jobexchange.jobname"
                        :items="['Repartidor', 'Cocinero', 'Asesor Telefonico']"
                        label="Puesto a solicitar"
                        required
                        :rules="campos"
                        ></v-select>
                    </v-col>
                    </v-row>
                    <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">cerrar</v-btn>
                <v-btn color="blue darken-1" text type="submit" @click="dialog = false"> <v-icon>mdi-email</v-icon> enviar</v-btn>
                </v-card-actions>
                  </v-form>
                  </v-container>
                  <small>* Indica los campos obligatorios</small>
                </v-card-text>
                
            </v-card>
            </v-dialog>
        </v-row>

        <v-snackbar v-model="alert" type="success" width="400">
            {{notification}}
            <v-btn text color="info">cerrar</v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
import jobService from '../services/JobExchange.service'
import JobModel from'../models/jobexchange'
export default {
    data: () => ({
        jobexchange: new JobModel('','','','','','',''),
        jobs: [
            {
                id:1,
                title: 'REPARTIDOR',
                requesitos: 'Ser mayor de edad',
                surcursal: 'Huastecnology Fco. Montejo,Huastecnology Centro,Huastecnology Caucel ',
                icon:'mdi'
            },
            {
                id:2,
                title: 'COCINERO',
                requesitos: 'Ser mayor de edad',
                surcursal: 'Huastecnology Fco. Montejo,Huastecnology Centro,Huastecnology Caucel'
            },
            {
                id:3,
                title: 'ASESOR TELEFÓNICO',
                requesitos: 'Ser mayor de edad',
                surcursal: 'Huastecnology Fco. Montejo,Huastecnology Centro, Huastecnology Caucel'
            }
        ],
        dialog : false,
        dialogm1: '',
        phoneRule:[  v => !!v || 'El teléfono es requerido',
        v => (v && v.length <= 8) || 'El número debe tener sólo de 8 númeos, ignore los primeros (99)',],
        campos:[  v => !!v || 'El campo es requerido'],
        notification:'',
        alert:false
    }),
    methods:{
        sendRequest(){
            console.log(this.jobexchange)
            jobService.createJobExchange(this.jobexchange).then(response => {
                this.notification =  response.data.message
                this.alert = true
            })
        }
    }
}
</script>