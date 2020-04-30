<template>
 <v-container grid-list-lg>
   <v-layout row wrap>
     <v-flex column wrap xs12 sm6>
       <v-card class="my-2" v-for="(item,index) in images" :key="index">
         <v-img :src="images[index].url" width="600" ></v-img>
         <v-card-title><h2>{{ item.title }}</h2></v-card-title>
         <v-card-text>{{ item.description }}</v-card-text>
         <v-card-text>{{ item.price }}</v-card-text>
         <v-card-actions><v-btn rounded color="info">ordenar</v-btn></v-card-actions>
       </v-card>
     </v-flex>
   </v-layout>
 </v-container>
</template>

<script>
export default {
  data:() => ({
    images:[
      {id:1,url:'https://images.template.net/wp-content/uploads/2019/03/Featured-Image18.jpg',
      title:'HuastiSpecial',description:'la mejor de nuestro menu diseñada por el huasteco' ,price:'199.99'},
      {id:2,url:'https://www.recetastv.com/wp-content/uploads/2019/03/pizza-hawaiana.jpg',
      title:'pizza hawiana', description:'Extra queso para darte gusto a ti',price:'189.99'}
    ]
  })
}
</script>
