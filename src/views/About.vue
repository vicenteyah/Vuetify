<template>
  <v-container grid-list-lg>
    <v-container class="blue-grey darken-1">
    <v-layout >
      <v-flex xs12 md12>
        <v-img class="mx-auto" src="../assets/HuasTechnology-logo.png" width="75" height="55"></v-img> 
        <h1 class="display-2 text-center yellow--text font-weight-medium" align="start" > HuasTechnology Development Team</h1>
      </v-flex>
    </v-layout>
    </v-container>
    <v-layout row wrap>
      <v-flex xs12 sm4 lg3 class="mx-auto">
        <v-card  width="300">
          <v-img src="../assets/team/sara.jpg"  height="200px"/>
            <v-card-title>
              Sara Melina Reyes Gonzalez
            </v-card-title>
            <v-card-subtitle>
              Estudiante de Ingeniería de software
            </v-card-subtitle>
            <v-card-actions>
              <v-btn text color="info" href="https://www.facebook.com/sari.m.rg" target="_blank"><v-icon>{{ 'mdi-facebook' }}</v-icon></v-btn>
              <v-btn color="primary" href="https://github.com/SariMelina" target="_blank" text><v-icon>{{'mdi-github'}}</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                Desarrollador Backend en nodejs express y python
              </v-card-text>
            </div>
          </v-expand-transition>
       </v-card>
     </v-flex>
    
    <v-flex xs12 sm4 lg3 class="mx-auto">
        <v-card width="300">
          <v-img src="../assets/team/vicente.png"  height="200px"/>
            <v-card-title>
              Eliud Vicente Yah Dzul
            </v-card-title>
            <v-card-subtitle>
              Estudiante de Ingeniería de software
            </v-card-subtitle>
            <v-card-actions>
              <v-btn text color="info" href="https://www.facebook.com/vicente.yah" target="_blank"><v-icon>{{ 'mdi-facebook' }}</v-icon></v-btn>
              <v-btn color="orange" href="https://github.com/vicenteyah" target="_blank" text><v-icon>{{'mdi-github'}}</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show2 = !show2">
                <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>
              <v-card-text>
                Desarrollador en nodejs, Vue.js y python-flask 
              </v-card-text>
            </div>
          </v-expand-transition>
       </v-card>
     </v-flex>
    
    <v-flex xs12 sm4 lg3 class="mx-auto">
        <v-card width="300">
          <v-img src="../assets/team/kikin.jpg"  height="200px"/>
            <v-card-title>
              Balfre Marrufo Novelo
            </v-card-title>
            <v-card-subtitle>
              Estudiante de Ingeniería de software
            </v-card-subtitle>
            <v-card-actions>
              <v-btn text color="info" href="https://www.facebook.com/kikenovelo14" target="_blank"><v-icon>{{ 'mdi-facebook' }}</v-icon></v-btn>
              <v-btn color="red" href="https://github.com/Kikemn" target="_blank" text><v-icon>{{'mdi-github'}}</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show3 = !show3">
                <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

          <v-expand-transition>
            <div v-show="show3">
              <v-divider></v-divider>
              <v-card-text>
                Desarrollador Frontend en vuejs, html y canvas
              </v-card-text>
            </div>
          </v-expand-transition>
       </v-card>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      show: false,
      show2:false,
      show3: false
    }),
  }
</script>
