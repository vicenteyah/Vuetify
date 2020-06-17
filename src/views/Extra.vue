<template>
    <v-container>
        <v-layout row wrap>
            <v-flex column wrap xs12 sm5 md4 lg3 v-for="(extra,index) in extrasList" :key="index">
                <v-card class="mx-auto mt-2" width="400">
                    <v-img :src="extrasList[index].imgurl" height="200" width="400"/>
                    <v-card-title>{{ extra.extraName }}</v-card-title>
                    <v-card-subtitle>Precio:$ {{ extra.price }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn rounded text color="success"><v-icon>mdi-cart</v-icon>Comprar</v-btn>
                    </v-card-actions>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        extrasList:[{id:1,imgurl:'https://cdn.kiwilimon.com/recetaimagen/30178/th5-640x426-32651.jpg',extraName:'Aderezo BBQ(50grs.)',price:10},
        {id:2,imgurl:'https://cdn.kiwilimon.com/recetaimagen/30178/th5-640x426-32651.jpg',extraName:'Coca Cola 2.5 lt',price:45},
        {id:3,imgurl:'https://cdn.kiwilimon.com/recetaimagen/30178/th5-640x426-32651.jpg',extraName:'Salsa de tomate', price:10},
        {id:4,imgurl:'https://cdn.kiwilimon.com/recetaimagen/30178/th5-640x426-32651.jpg',extraName:'Salsa de tomate', price:10}]
    })
}
</script>

