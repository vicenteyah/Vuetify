<template>
    <v-container>
        <v-card width="1100">            
            <v-col>
                <v-row justify="center">
                      <v-card-title>
                          BOLSA DE TRABAJO
                      </v-card-title>
                </v-row>
            </v-col>  
            <v-divider/>
            <v-layout>
                <v-flex v-for="(job, index) in jobs" :key="index">
                    <v-card width="300" class="mb-3 pa-3 mx-3 mt-5">
                        <v-col>
                            <v-row justify="center">
                                <v-card-title>
                                    {{job.title}}
                                </v-card-title>
                            </v-row>
                            <v-row justify="left">
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
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">            
            <v-card>
                <v-card-title>
                <span class="headline">POSTULAR</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                    <!--<v-col cols="12">
                        <v-card-text  v-for="(job, index) in jobs" :key="index"> Postulación para {{job.title}} </v-card-text>
                    </v-col>-->
                    <v-col cols="12">
                        <v-text-field label="Nombre Completo*" required :rules="campos"></v-text-field>
                    </v-col>                   
                    <v-col cols="12" sm="2">
                        <v-text-field label="Edad*" required :rules="campos"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="10">
                        <v-text-field label="Email*" required :rules="campos"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                         <v-select
                        :items="['Masculino', 'Femenino']"
                        label="Género*"
                        required
                        :rules="campos"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                         <v-select
                        :items="['Estudiante', 'Desempleado','Nini']"
                        label="Ocupación*"
                        required
                        :rules="campos"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                         <v-select
                        :items="['Soltero(a)', 'Casado(a)','Divorciado(a)']"
                        label="Estado Civil*"
                        required
                        :rules="campos"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field label="Teléfono*" required :rules="phoneRule"></v-text-field>
                    </v-col>                    
                    <v-col cols="12" sm="6">
                         <v-select
                        :items="['HuastecPizza Caucel', 'HuastecPizza Fco. Montejo', 'HuastecPizza Canek', 'HuastecPizza Umán', 'HuastecPizza Centro']"
                        label="Sucursal*"
                        required
                        :rules="campos"
                        ></v-select>
                    </v-col>
                    </v-row>
                </v-container>
                <small>* Indica los campos obligatorios</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        jobs: [
            {
                id:1,
                title: 'REPARTIDOR',
                requesitos: 'Contar con Licencia de Conducir y ser mayor de edad',
                surcursal: 'Huastecnology Centro'
            },
            {
                id:2,
                title: 'COCINERO',
                requesitos: 'Ser mayor de edad',
                surcursal: 'Huastecnology Fco. Montejo'
            },
            {
                id:3,
                title: 'ASESOR TELEFÓNICO',
                requesitos: 'Ser mayor de edad',
                surcursal: 'Huastecnology Caucel'
            }
        ],
        dialog : false,
        dialogm1: '',
        phoneRule:[  v => !!v || 'El teléfono es requerido',
        v => (v && v.length <= 8) || 'El número debe tener sólo de 8 númeos, ignore los primeros (99)',],
        campos:[  v => !!v || 'El campo es requerido']
    })
}
</script>