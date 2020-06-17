import axios from 'axios'

const API_URL = 'http://localhost:8080/api/Pizza/'

class PizzasService {
    getPizzas(){
        return axios.get(API_URL + 'pizzas')
    }
    createPizzas(pizza){
        return axios.post(API_URL + 'pizzas',{
            imgurl: pizza.imgurl,
            pizzasName: pizza.pizzasName,
            price: pizza.price
        })
    }
    deletePizzas(id){
        return axios.delete(API_URL + 'pizzas/' + id)
    }
    updatePizzas(pizza,id){
        return axios.put(API_URL +'pizzas/'+id,{
            imgurl: pizza.imgurl,
            pizzasName: pizza.pizzasName,
            price: pizza.price
        })
    }
}
export default new PizzasService();