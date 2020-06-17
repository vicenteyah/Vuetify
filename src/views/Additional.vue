<template>
      <v-container class="mt-2" grid-list-lg>
            <v-layout class="mx-auto" row wrap>
                  <v-flex column wrap xs12 md4 lg3 v-for="(additional,index) in additionals" :key="index">
                       <v-card class="mx-auto" max-width="400">
                             <v-img class="white--text align-end" 
                             height="200" 
                             :src="additionals[index].imgurl">
                             </v-img>
                              <v-card-title>
                                   {{ additional.additionalName }}
                             </v-card-title>
                             <v-card-subtitle class="pb-0">
                                   Precio:$ {{ additional.price }}
                             </v-card-subtitle>
                             <v-card-actions>
                                   <v-btn color="orange" text rounded><v-icon>mdi-cart </v-icon> ordenar</v-btn>
                             </v-card-actions>
                       </v-card>
                  </v-flex>
            </v-layout>
      </v-container>
</template>

<script>
export default {
      data:()=> ({
            additionals: [
                  {
            id:1,
            imgurl:'https://www.pizcadesabor.com/wp-content/uploads/2017/07/Adobo-tacos-al-pastor-4.jpg',
            additionalName:'orden de tacos al pastor (3 tacos)',
            price:30},
            {
            id:2,
            imgurl:'https://cdn.kiwilimon.com/recetaimagen/30178/th5-640x426-32651.jpg',
            additionalName:'Burrito de arrachera',
            price:125}
            ]
      })
}
</script>