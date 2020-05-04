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
         <v-list-item-title class="headline">Octocat</v-list-item-title>
       </v-list-item-content>
     </v-list-item>
     <v-divider></v-divider>
     <v-layout>
       <v-flex>
          <v-btn text color="info" block to="/"><v-icon>mdi-home</v-icon>Home</v-btn>
          <v-btn text color="info" block to="/About">About page</v-btn>
        <!--contenedor con directiva v-if para el control del inicio de sesion-->  
       <v-container v-if="!currentUser"> 
          <v-btn text color="blue darken-1" to="/Login" block>login</v-btn>
          <v-btn text color="blue darken-1" to="/register" block>register</v-btn>
       </v-container>
        <!--Este boton solo aparece si el usuario está logueado-->
       <v-container v-if="currentUser">
          <v-btn  text color="blue darken-1" block>cerrar sesion</v-btn>
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
    currentUser:false // test v-if to authentication
  }),
};
</script>