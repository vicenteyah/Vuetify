import axios from 'axios'

const API_URL = 'http://localhost:8080/api/Pizza/'

class PizzasService {
    getPizzas(){
        return axios.get(API_URL + 'pizzas')
    }
}
export default new PizzasService();