<template>
  <v-app>
   <v-app-bar app color="amber lighten-2" dense dark>
     <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
     <v-toolbar-title>Huastech Pizza</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-btn color="info" fab dark small v-if="currentUser"><v-icon>mdi-cart</v-icon></v-btn>
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
          <v-btn text color="info" block to="/"><v-icon>mdi-home</v-icon>Inicio</v-btn>
          <v-btn text color="info" block to="/About"><v-icon>mdi-help-circle</v-icon> Acerca De</v-btn>
        <!--contenedor con directiva v-if para el control del inicio de sesion-->  
       <v-container v-if="!currentUser"> 
          <v-btn text color="blue darken-1" to="/Login" block><v-icon>mdi-account-circle</v-icon> Iniciar Sesión</v-btn>
          <v-btn text color="blue darken-1" to="/register" block><v-icon>mdi-account-plus</v-icon>registrarse</v-btn>
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

    <v-footer
    dark
    padless
    >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4 white--text"
          icon
          :href="icons[index].url" target="_blank"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Visita nuestras redes sociales en facebook y github para saber más sobre nuestros repositorios y colaboradores de éste proyecto. HuastecosPizza® es una marca registrada de HuasTechnology, Inc. Todos los derechos reservados
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>HuasTechnology, inc.</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  </v-app>
</template>

<script>

export default {
  data: () => ({
    //
    drawer:false,
    icons: [
        {id:1,icon:'mdi-facebook', url:'https://www.facebook.com/sari.m.rg'},
        {id:2,icon:'mdi-github', url:'https://github.com/vicenteyah/auth-CRUD.git'}
      ],
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