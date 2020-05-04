<template>
  <v-app>
   <v-app-bar app color="amber lighten-2" dense dark>
     <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
     <v-toolbar-title>Huastech Pizza</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-btn rounded color="blue darken-1" to="/Login" class="mx-2">login</v-btn>
     <v-btn rounded color="blue darken-1">register</v-btn>
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
         <v-btn text color="info" block to="/">Home</v-btn>
         <v-btn text color="info" block to="/About">About page</v-btn>
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
    drawer:false
  }),
};
</script>