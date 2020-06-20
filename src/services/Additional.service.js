import axios from 'axios'

const API_URL = 'http://localhost:8080/api/Additional/'

class additionalService {
    getAdditional(){
        return axios.get(API_URL + 'additionals')
    }
    getAnAdditional(id){
        return axios.get(API_URL + 'additionals/' + id)
    }
    createAdditional(additional){
        return axios.post(API_URL + 'additionals',{
            imgurl: additional.imgurl,
            additionalName: additional.additionalName,
            price: additional.price
        })
    }
    deleteAdditional(id){
        return axios.delete(API_URL + 'additionals/' + id)
    }
    updateAdditional(additional,id){
        return axios.put(API_URL + 'additionals/' + id , {
            imgurl: additional.imgurl,
            additionalName: additional.additionalName,
            price: additional.price
        })
    }
}

export default new additionalService()