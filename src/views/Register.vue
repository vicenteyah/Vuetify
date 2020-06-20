<template>
    <v-card width="500" class="mx-auto mt-5">
        <v-card-title><h3 class="display-1 text-center teal--text font-weight-bold" align="start">Registrarse</h3></v-card-title>
        <v-card-text>
            <v-form name="form" @submit.prevent="handleRegister">
            <div v-if="!successful">
             <v-text-field v-model="user.username" v-validate="'required|min:3|max:20'"  label="Nombre de usuario" prepend-icon="mdi-account-circle" name="username"/>
             <v-text-field v-model="user.email" v-validate="'required'" type="email" label="correo" name="email" prepend-icon="mdi-email"/>
             <v-text-field v-model="user.password" v-validate="'required'" :type="showPassword? 'text':'password'" name="password" 
             label="contraseña" 
             prepend-icon="mdi-lock"
             append-icon="mdi-eye-off"
             @click:append="showPassword=!showPassword"/>
             <v-card-actions>
                <v-btn rounded color="primary" type="submit" >Registrarse</v-btn>
                <v-spacer></v-spacer>
                <v-btn rounded color="info" to="/login">iniciar sesion</v-btn>
             </v-card-actions>
            </div>
            </v-form>
        </v-card-text>
        <v-alert v-model="alert" type="error" :class="successful ? 'alert-success' : 'alert-danger'">
            {{ message.message }}
            <v-btn color="blue" text @click="alert=false">cerrar</v-btn>
        </v-alert>
        <v-alert v-model="successful" type="success">
            Usuario Creado satisfactoriamente
            <v-btn text color="info" to="/login">iniciar sesion</v-btn>
        </v-alert>
    </v-card>
    
</template>
<script>
import User from '../models/user'
export default {
    name:'Register',
    data:()=>({
        user: new User('','',''),
        showPassword: false,
        alert: false,
        message:'',
        successful: false
    }),
    computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
              this.alert = true;
            }
          );
        }
      });
    }
  }
};
</script>