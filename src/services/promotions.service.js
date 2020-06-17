import axios from 'axios'

const API_URL = 'http://localhost:8080/api/Promotions/';

class PromotionsService {
    getpromotions(){
        return axios.get(API_URL + 'promotions')
    }
    getAPromotion(id){
        return axios.get(API_URL + 'promotions/' + id)
    }
    createPromotion(promotion){
        return axios.post(API_URL + 'promotions',{
            imgurl: promotion.imgurl,
            packagename: promotion.packagename,
            description: promotion.description,
            price: promotion.price
        })
    }
    deletePromotion(id){
        return axios.delete(API_URL + 'promotions/'+id)
    }
    updatePromotion(promotion,id){
        return axios.put(API_URL + 'promotions/'+id,{
            imgurl: promotion.imgurl,
            packagename: promotion.packagename,
            description: promotion.description,
            price: promotion.price
        })
    }
}
export default new PromotionsService();