<template>
<v-container>
      <v-card width="700" class="mx-auto mt-5 mb-3 pa-3">
          <v-card-title>
              <h3>Sugerencias</h3>
          </v-card-title>  
          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="sendFeedback"
          >
              <v-text-field
              v-model="feedback.completename"
              :counter="10"
              :rules="nameRules"
              label="Nombre"
              required
              ></v-text-field>

              <v-text-field
              v-model="feedback.email"
              :rules="emailRules"
              label="E-mail"
              required
              ></v-text-field>

              <v-text-field
              v-model="feedback.phone"
              :rules="phoneRule"
              label="Teléfono"
              required
              ></v-text-field>

              <v-select
              v-model="feedback.store"
              :items="items"
              :rules="[v => !!v || 'La sucursal es requerida']"
              label="Sucursal"
              required
              ></v-select>

              <v-textarea v-model="feedback.message" label="Mensaje"  :rules="messageRule"/>

              <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'Debes de estar de acuerdo para continuar!']"
              label="¿Estás de acuerdo con el comentario?"
              required
              ></v-checkbox>

              <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              type="submit"
              @click="validate"
              >
              <v-icon>mdi-email</v-icon> enviar
              </v-btn>

              <v-btn
              color="error"
              class="mr-4"
              @click="reset"
              >
              Limpiar campos
              </v-btn>
        </v-form>
    </v-card>
    <v-snackbar type="success" v-model="alert" width="400">
      {{notification}}
      <v-btn color="blue" text @click="alert=false" class="mx-5">cerrar</v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
import Feedback from '../models/feedback'
import feedback from '../services/Feedback.service'

export default {
    data: () => ({
      valid: true,
      alert: false,
      notification : '',
      feedback: new Feedback('','','','',''),
      nameRules:[
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phoneRule:[ v => !!v || 'Telefono es requerido'],
      messageRule:[v => !!v || 'EL mensaje es requerido'],
      items: [
        'Huastechnology Fco. Montejo',
        'Huastechnology Centro',
        'Huastechnology Caucel',
        'Huastechnology Umán',
      ],
      checkbox: false,
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      sendFeedback(){
        feedback.createFeedbacks(this.feedback)
        .then(response => {
          console.log(response);          
          this.notification = response.data.message
          this.alert = true;
        })
      }
     
    },
  }
</script>