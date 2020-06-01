<template>
    
    <v-card width="600" class="mx-auto mt-5">
        <v-card-title><h3 class="display-1">Iniciar Sesión</h3></v-card-title>
        <v-card-text>
            <v-form name="form" @submit.prevent="handleLogin">
                <v-text-field v-validate="'required'" v-model="user.username" label="nombre de usuario" prepend-icon="mdi-account-circle" name="username" />
                <v-text-field v-validate="'required'" v-model="user.password" :type="showPassword? 'text' :'password'" name="password"
                label="contraseña" 
                prepend-icon="mdi-lock" 
                append-icon="mdi-eye-off"
                @click:append="showPassword=!showPassword"/>
                <v-card-actions>
                    <v-btn rounded color="info" type="submit">Iniciar Sesion</v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
        <v-snackbar v-model="snackbar">
            {{ message }}
            <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
        </v-snackbar>
    </v-card>
            
</template>

<script>
import User from '../models/user';
export default {
    name:'Login',
    data:()=>({
        user: new User('', ''),
        showPassword:false,
        snackbar: false,
        message:''
    }),
    computed:{
       loggedIn(){
           return this.$store.state.auth.status.loggedIn;
        }
    },
    created(){
        if(this.loggedIn){
            this.$router.push('/profile');
        }
    },
    methods:{
        handleLogin(){
            console.log('has hecho click')
            this.$validator.validateAll().then(isValid => {
                if (!isValid) {
                    this.loading = false;
                    return;
                }

                if(this.user.username && this.user.password){
                    this.$store.dispatch('auth/login', this.user).then(
                        () => {
                            this.$router.push('/profile');
                        },
                        error => {
                            this.message = 
                            (error.response && error.rsponse.data) ||
                            error.message ||
                            error.toString();
                            this.snackbar = true
                        }
                    );
                }
            });
        }
    }
};
</script>