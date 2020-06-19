<template>
    <v-container>
        <v-layout>
            <v-flex column wrap xs12 sm4 md10 lg4 v-for="(job, index) in job_list" :key="index">
                <v-card width="500" class="mx-auto">
                   <v-chip label color="primary" text-color="white" class="ml-0">
                       <v-icon left>mdi-label</v-icon>
                       TITULO
                   </v-chip>
                   <v-card-subtitle><b>Nombre: </b> {{job.name}} </v-card-subtitle>
                   <v-card-subtitle><b> Telefono: </b> {{job.phone}} </v-card-subtitle>
                   <v-card-subtitle><b>Ocupación: </b> {{job.occupation}} </v-card-subtitle>
                   <v-card-subtitle><b>Puesto solicitado: </b> {{job.jobname}} </v-card-subtitle>
                    <v-divider/>
                    <v-card-actions>
                        <v-row justify="center">
                            <v-btn rounded color="error" @click="deleteRequest(job.id)">Rechazar Solicitud</v-btn>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <v-snackbar type="success" v-model="alert" width="400" class="mx-auto">
            {{message}}
            <v-btn color="blue" text @click="alert=false" class="mx-5">Ok!</v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
import JobService from '../services/JobExchange.service.js'
export default {
    data: () => ({
        job_list : [],
        alert:false,
        message:''
    }),
    mounted() {
        JobService.getJobExchange().then(
            response => {
                console.log(response.data, 'this array');
                this.job_list = response.data;
            }
        )        
    }, 
    methods: {
        deleteRequest(id){
            JobService.deleteJobExchanges(id).then(response =>{
                console.log(response.data.message); 
                this.message = 'Solicitud Rechazada'
                this.alert = true
            })
        }
    }
}
</script>