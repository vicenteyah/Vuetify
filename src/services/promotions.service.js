import axios from 'axios'

const API_URL = 'http://localhost:8080/api/Promotions/';

class PromotionsService {
    getpromotions(){
        return axios.get(API_URL + 'promotions')
    }
    getAPromotion(id){
        return axios.get(API_URL + 'promotions/' + id)
    }
}
export default new PromotionsService();