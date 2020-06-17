<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card width="800" class="mx-auto">
                    <v-col>
                        <v-row class="mx-auto" justify="center">
                            <v-card-title>Ajustes de Administrador</v-card-title>
                        </v-row>
                    </v-col>
                    <v-card-title>Usuario Administrador: {{currentUser.username}}</v-card-title> 
                    <v-card-subtitle>Email: {{currentUser.email}}</v-card-subtitle>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <v-card width="800" class="mx-auto">
                    <v-col>
                        <v-row class="mx-auto" justify="center">
                            <v-card-title>Menu de opciones</v-card-title>
                        </v-row>
                    </v-col>
                    <v-divider/>
                    <v-card-actions>
                        <v-btn rounded text color="success" @click="$router.push('/create')">crear productos</v-btn>
                        <v-spacer/>
                        <v-btn rounded text color="error" @click="$router.push('/jobreq')">Ver solicitudes</v-btn>
                        <v-spacer/>
                        <v-btn rounded text color="info" @click="$router.push('/feedreq')">ver feedbacks</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted(){
        if(this.currentUser.roles.includes('ROLE_USER')){
            this.$router.push('/profile');
        }
    }
}
</script>
