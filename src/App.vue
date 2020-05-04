<template>
  <v-app>
   <v-app-bar app color="amber lighten-2" dense dark>
     <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
     <v-toolbar-title>Huastech Pizza</v-toolbar-title>
   </v-app-bar>

   <v-navigation-drawer app v-model="drawer" temporary>
     <v-list-item>
       <v-list-item-avatar>
         <v-img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" width="34" height="34"></v-img>
       </v-list-item-avatar>

       <v-list-item-content>
         <v-list-item-title v-if="!currentUser" class="headline">Ordene Ahora</v-list-item-title>
         <v-list-item-title v-if="currentUser" ><v-btn text color="blue darken-1" block to="/profile">{{ currentUser.username }}</v-btn></v-list-item-title>
       </v-list-item-content>
     </v-list-item>
     <v-divider></v-divider>
     <v-layout>
       <v-flex>
          <v-btn text color="info" block to="/"><v-icon>mdi-home</v-icon>Home</v-btn>
          <v-btn text color="info" block to="/About"><v-icon>mdi-help-circle</v-icon> About page</v-btn>
        <!--contenedor con directiva v-if para el control del inicio de sesion-->  
       <v-container v-if="!currentUser"> 
          <v-btn text color="blue darken-1" to="/Login" block><v-icon>mdi-account-circle</v-icon> login</v-btn>
          <v-btn text color="blue darken-1" to="/register" block><v-icon>mdi-account-plus</v-icon> register</v-btn>
       </v-container>
        <!--Este boton solo aparece si el usuario está logueado-->
       <v-container v-if="currentUser">
          <v-btn  text color="blue darken-1" block @click.prevent="logOut"><v-icon>mdi-account-arrow-left</v-icon> cerrar sesion</v-btn>
       </v-container>
       </v-flex>
     </v-layout>
   </v-navigation-drawer>

    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    //
    drawer:false,
   // currentUser:false // test v-if to authentication
  }),
  computed:{
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods:{
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>