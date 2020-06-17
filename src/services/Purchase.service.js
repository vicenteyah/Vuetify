import axios from 'axios'

const API_URL = 'http://localhost:8080/api/Purchases/'

class purchaseService{
    createPurchase(list){
        return axios.post(API_URL + 'purchases',{
            userid: localStorage.getItem('id'),
            promotionsid: list.id
        })
    }
}
export default new purchaseService()